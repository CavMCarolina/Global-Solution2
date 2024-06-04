#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>

// Definindo informações de conexão e configuração do MQTT
#define ID_MQTT "esp32_mqtt" // Identificador do dispositivo MQTT
#define PUBLISH_DELAY 1000 // Atraso entre as publicações

// Informações do Wi-Fi
const char *SSID = "Wokwi-GUEST"; // Nome da rede Wi-Fi
const char *PASSWORD = ""; // Senha da rede Wi-Fi

// Configurações do Broker MQTT
const char *BROKER_MQTT = "broker.hivemq.com"; // Endereço do Broker MQTT
int BROKER_PORT = 1883; // Porta do Broker MQTT

// Controla o tempo de publicação
unsigned long publishUpdate;

// Sensores conectados ao ESP32
const int phSensorPin = 34; // Potenciômetro de pH
const int oxygenSensorPin = 35; // Potenciômetro de oxigenação
const int dhtPin = 23; // DHT22

// Definindo sensor DHT
#define DHTTYPE DHT22
DHT dht(dhtPin, DHTTYPE);

// Inicializando o cliente Wi-Fi e o cliente MQTT
WiFiClient espClient;
PubSubClient MQTT(espClient);

// Funções
void initWiFi(void);
void initMQTT(void);
void callbackMQTT(char *topic, byte *payload, unsigned int length);
void reconnectMQTT(void);
void reconnectWiFi(void);
void checkWiFIAndMQTT(void);

// Função para inicializar a conexão Wi-Fi
void initWiFi(void) {
  delay(10);
  Serial.println("Iniciando conexão Wi-Fi...");
  Serial.print("Conectando-se à rede: ");
  Serial.println(SSID);
  Serial.println("Aguarde...");
  reconnectWiFi();
}

// Função para inicializar a conexão MQTT
void initMQTT(void) {
  MQTT.setServer(BROKER_MQTT, BROKER_PORT);
  MQTT.setCallback(callbackMQTT);
}

// Função de retorno de chamada para mensagens MQTT recebidas
void callbackMQTT(char *topic, byte *payload, unsigned int length) {
  // Esta função é chamada quando uma mensagem MQTT é recebida
}

// Função para reconectar ao Broker MQTT
void reconnectMQTT(void) {
  while (!MQTT.connected()) {
    Serial.print("* Tentando se conectar ao Broker MQTT: ");
    Serial.println(BROKER_MQTT);
    if (MQTT.connect(ID_MQTT)) {
      Serial.println("Conectado com sucesso ao Broker MQTT!");
    } else {
      Serial.println("Falha ao reconectar ao Broker MQTT.");
      Serial.println("Nova tentativa de conexão em 2 segundos.");
      delay(1000);
    }
  }
}

// Função para verificar a conexão Wi-Fi e MQTT e reconectar se necessário
void checkWiFIAndMQTT(void) {
  if (!MQTT.connected())
    reconnectMQTT();
  reconnectWiFi();
}

// Função para reconectar o Wi-Fi
void reconnectWiFi(void) {
  // Verifica se já está conectado ao Wi-Fi
  if (WiFi.status() == WL_CONNECTED)
    return;

  // Caso contrário, tenta reconectar
  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }

  // Caso conectar
  Serial.println();
  Serial.print("Conectado com sucesso à rede ");
  Serial.print(SSID);
  Serial.println("IP obtido:");
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  initWiFi();
  initMQTT();
}

void loop() {
  // Verifica hora de publicar os dados
  if ((millis() - publishUpdate) >= PUBLISH_DELAY) {
    publishUpdate = millis();

    // Verifica a conexão Wi-Fi e MQTT
    checkWiFIAndMQTT();

    // Realiza leituras dos sensores
    int phValue = analogRead(phSensorPin);
    float ph = map(phValue, 0.0, 4095, 0.0, 14.0);

    int oxygenValue = analogRead(oxygenSensorPin);
    float oxygenPercent = map(oxygenValue, 0, 4095, 0, 100);

    float temperature = dht.readTemperature();

    // Converte os valores para string
    char phData[10];
    char oxygenData[10];
    char tempData[10];

    dtostrf(ph, 4, 2, phData);
    dtostrf(oxygenPercent, 4, 2, oxygenData);
    dtostrf(temperature, 4, 2, tempData);

    // Publica os dados no tópico MQTT
    MQTT.publish("/GS2/ph1", phData);
    MQTT.publish("/GS2/oxy1", oxygenData);
    MQTT.publish("/GS2/temp1", tempData);

    // Mantém a comunicação com o Broker MQTT
    MQTT.loop();
    }
}