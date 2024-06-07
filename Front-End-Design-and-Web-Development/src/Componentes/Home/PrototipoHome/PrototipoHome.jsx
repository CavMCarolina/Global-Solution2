import { Link } from "react-router-dom";
import circuito from "../../../assets/circuito.jpg";

export default function PrototipoHome() {
  return (
    <section id="prototipo">
      <h1 className="titulo">O Protótipo:</h1>
      <div className="conteudo">
        <div className="prototipo">
          <p>
            O nosso projeto conta com um ESP32 conectado a dois potenciômetros e
            um sensor DHT22. O potenciômetro, do tipo slide, é utilizado para
            simular a leitura do pH da água, variando de 0 a 14.
            <br />
            O segundo potenciômetro mede a oxigenação da água, com uma escala de
            0 a 100%. Já o sensor DHT22 é responsável por captar a temperatura
            da água.
            <br />
            Com os sensores em funcionamento, os dados são direcionados para o
            HiveMQ, onde devem ser conectados ao tópico /GS2/#. Após isso, os
            dados são recebidos dos sensores em tempo real. Finalmente, com o
            HiveMQ conectado ao NodeRed, o tópico é capturado e passado por uma
            função para ser interpretado pelo TagoIO.
          </p>
          <img src={circuito} />
        </div>
        <br />
        <div>
          <p>
            Por fim, os dados são apresentados pelo TagoIO, onde os três
            sensores são identificados por temp1, ph1 e oxy1, conforme definidos
            no HiveMQ.
            <br />
            Além disso, foram implementadas três funções no NodeRed que recebem
            dados de localização, que representa a posição de cada sensor.
          </p>
          <div className="centralizar_botao">
            <Link to="https://65f9831160854d0010e08c7e.tago.run/dashboards/info/66567033279732000954bf55?anonymousToken=00000000-65f9-8311-6085-4d0010e08c7e">
              <button className="botao">
                Veja os dados em tempo real!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
