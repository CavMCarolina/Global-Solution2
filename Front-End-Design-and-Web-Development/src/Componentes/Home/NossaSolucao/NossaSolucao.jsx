import { Link } from "react-router-dom";

export default function NossaSolucao() {
  return (
    <section id="solucao">
      <h1 className="titulo negativo">
        Nossa Solução:
      </h1>
      <div className="conteudo">
        <p>
          Devido as dificuldades que os oceanos vêm passando, como o aquecimento
          global e a poluição, que são considerados os principais causadores do
          desequilíbrio no ecossistema marinho, resolvemos criar essa solução
          pois medir parâmetros críticos como o O2, acidez (pH) e temperatura,
          sendo fundamental para compreender os impactos ambientais e de quais
          maneiras podemos adiá-los. Além de procurar conservar e proteger o
          meio ambiente, conscientizar o público, incentivar e promover a
          sustentabilidade.
          <br />
          <br />
          Nossa solução envolve um sistema de monitoramento ambiental, onde
          utilizamos sensores para medir níveis de O2, acidez (pH) e
          temperatura. Foi montado uma simulação no simulador Wokwi, onde é
          possível visualizar os sensores funcionando com as informações que
          serão fornecidas através do banco de dados. Além disso, criamos um
          site onde será possível ver o local, através de um globo, onde os
          sensores estão ativos e informações do estado do oceano, ONGS e
          parceiros.
        </p>
        <div className="centralizar_botao">
          <Link to="BlueWatch/Voluntario">
            <button className="botao">
              Junte-se a nós nessa causa!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
