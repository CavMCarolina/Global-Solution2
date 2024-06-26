# BlueWatch - Proteja o Azul com BlueWatch

- Beatriz Silva - RM553455;
- Carolina Machado - RM552925;
- Lucas Masaki - RM553084.

## PROBLEMA
O desafio de Inovação Azul 2024 incentiva nós estudantes a contribuírem para soluções que promovam uma gestão sustentável dos oceanos, onde é buscado um projeto que alerte e informe as populações costeiras e as empresas que utilizam os mares, para a existência de substâncias e sobre a saúde dos oceanos.

## SOLUÇÃO
Nossa solução envolve um sistema de monitoramento ambiental, onde utilizamos sensores para medir níveis de O2, acidez (pH) e temperatura. Foi montado uma simulação no simulador Wokwi, onde é possível visualizar os sensores funcionando com as informações que serão fornecidas através do banco de dados. 

## REQUISITOS
- DHT sensor library;
- WiFi;
- PubSubClient.

## INSTRUÇÕES DE USO
O nosso projeto conta com um ESP32 conectado a dois potenciômetros e um sensor DHT22. O potenciômetro, do tipo slide, é utilizado para simular a leitura do pH da água, variando de 0 a 14. O segundo potenciômetro mede a oxigenação da água, com uma escala de 0 a 100%. Já o sensor DHT22 é responsável por captar a temperatura da água.
Em primeiro lugar devemos importar três bibliotecas: DHT sensor library, WiFi, PubSubClient, e em segundo conetamos os pinos dos sensores: pH no 34, oxigênio no 35 e DHT no 23. Antes de iniciarmos, devemos nos conectar ao HiveMQ com o tópico /GS2/#. Após isso, os dados serão direcionados e recebidos dos sensores em tempo real.
Devemos configurar o HiveMQ ao NodeRed e finalmente o tópico é capturado e passado por uma função para ser interpretado pelo TagoIO. Por fim, os dados são apresentados pelo TagoIO por meio de um dashboard, onde os três sensores são identificados por temp1, ph1 e oxy1, conforme definidos no NodeRed. Além disso, foi implementado uma função no NodeRed que recebe o dado de uma localização que representa a posição de cada sensor e funciona da mesma forma para os outros dois sensores.

## CÓDIGO
<a href="./blueWatch.c++">Código do BlueWatch =D</a>

## LINKS:
- Sensor 1: https://wokwi.com/projects/399323109153763329;
- Sensor 2: https://wokwi.com/projects/399322516419885057;
- Sensor 3: https://wokwi.com/projects/399144457187163137.

- <a href="./script node-red/GS2-EDGE.json">Script do node-red<a>

- Tago: https://65f9831160854d0010e08c7e.tago.run/dashboards/info/66567033279732000954bf55?anonymousToken=00000000-65f9-8311-6085-4d0010e08c7e