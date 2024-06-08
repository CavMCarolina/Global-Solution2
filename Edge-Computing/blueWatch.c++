#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>

// Informações do servidor MQTT (HiveMQ)
#define ID_MQTT "esp32_mqtt"

#define TOPIC_SUBSCRIBE_LED       "topic_on_off_led"
#define TOPIC_PUBLISH_TEMPERATURE "topic_sensor_temperature"
#define TOPIC_PUBLISH_HUMIDITY    "topic_sensor_humidity"

#define PUBLISH_DELAY 1000   // Atraso da publicação (1 segundos)

const char *SSID = "Wokwi-GUEST"; // SSID / nome da rede WI-FI que deseja se conectar
const char *PASSWORD = "";        // Senha da rede WI-FI que deseja se conectar
const char *BROKER_MQTT = "broker.hivemq.com";
int BROKER_PORT = 1883; // Porta do Broker MQTT

unsigned long publishUpdate;

// Pinos do ESP32 para os sensores
const int phSensorPin = 34; // Pino do potenciômetro de pH
const int oxygenSensorPin = 35; // Pino do potenciômetro de oxigenação
const int dhtPin = 23; // Pino do DHT22

// Definindo o tipo do sensor DHT
#define DHTTYPE DHT22
DHT dht(dhtPin, DHTTYPE);

// Inicializando o cliente Wi-Fi
WiFiClient espClient;
PubSubClient MQTT(espClient);

void initWiFi(void);
void initMQTT(void);
void callbackMQTT(char *topic, byte *payload, unsigned int length);
void reconnectMQTT(void);
void reconnectWiFi(void);
void checkWiFIAndMQTT(void);


void initWiFi(void)
{
  delay(10);
  Serial.println("------Conexao WI-FI------");
  Serial.print("Conectando-se na rede: ");
  Serial.println(SSID);
  Serial.println("Aguarde");

  reconnectWiFi();
}

void initMQTT(void)
{
  MQTT.setServer(BROKER_MQTT, BROKER_PORT); // Informa qual broker e porta deve ser conectado
  MQTT.setCallback(callbackMQTT);           // Atribui função de callback (função chamada quando qualquer informação de um dos tópicos subescritos chega)
}

void callbackMQTT(char *topic, byte *payload, unsigned int length)
{
  String msg;

  // Obtem a string do payload recebido
  for (int i = 0; i < length; i++) {
    char c = (char)payload[i];
    msg += c;
  }

  Serial.printf("Chegou a seguinte string via MQTT: %s do topico: %s\n", msg, topic);

  /* Toma ação dependendo da string recebida */
  if (msg.equals("1")) {
    Serial.print("LED ligado por comando MQTT");
  }

  if (msg.equals("0")) {
    Serial.print("LED desligado por comando MQTT");
  }
}


void reconnectMQTT(void)
{
  while (!MQTT.connected()) {
    Serial.print("* Tentando se conectar ao Broker MQTT: ");
    Serial.println(BROKER_MQTT);
    if (MQTT.connect(ID_MQTT)) {
      Serial.println("Conectado com sucesso ao broker MQTT!");
      MQTT.subscribe(TOPIC_SUBSCRIBE_LED);
    } else {
      Serial.println("Falha ao reconectar no broker.");
      Serial.println("Nova tentativa de conexao em 2 segundos.");
      delay(1000);
    }
  }
}


void checkWiFIAndMQTT(void)
{
  if (!MQTT.connected())
    reconnectMQTT(); // se não há conexão com o Broker, a conexão é refeita

  reconnectWiFi(); // se não há conexão com o WiFI, a conexão é refeita
}


void reconnectWiFi(void)
{
  // se já está conectado a rede WI-FI, nada é feito.
  // Caso contrário, são efetuadas tentativas de conexão
  if (WiFi.status() == WL_CONNECTED)
    return;

  WiFi.begin(SSID, PASSWORD); // Conecta na rede WI-FI

  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }

  Serial.println();
  Serial.print("Conectado com sucesso na rede ");
  Serial.print(SSID);
  Serial.println("IP obtido: ");
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(115200);
  dht.begin();

  // Inicializa a conexao Wi-Fi
  initWiFi();

  // Inicializa a conexao ao broker MQTT
  initMQTT();
}

void loop() {

  if ((millis() - publishUpdate) >= PUBLISH_DELAY) {
  publishUpdate = millis();
  // Verifica o funcionamento das conexões WiFi e ao broker MQTT
  checkWiFIAndMQTT();

  // Formata as strings a serem enviadas para o dashboard (campos texto)
  // Leitura do potenciômetro de pH
  int phValue = analogRead(phSensorPin);
  float ph = map(phValue, 0.0, 4095, 0.0, 14.0);

  // Leitura do potenciômetro de oxigenação
  int oxygenValue = analogRead(oxygenSensorPin);
  float oxygenPercent = map(oxygenValue, 0, 4095, 0, 100);

  // Leitura do sensor DHT22
  float temperature = dht.readTemperature();

  char phData[10];
  char oxygenData[10];
  char tempData[10];

  dtostrf(ph, 4, 2, phData);
  dtostrf(oxygenPercent, 4, 2, oxygenData);
  dtostrf(temperature, 4, 2, tempData);

  // Envia as strings ao dashboard MQTT
  MQTT.publish("/GS2/ph1", phData);
  MQTT.publish("/GS2/oxy1", oxygenData);
  MQTT.publish("/GS2/temp1", tempData);

  // Keep-alive da comunicação com broker MQTT
  MQTT.loop();
  }
}