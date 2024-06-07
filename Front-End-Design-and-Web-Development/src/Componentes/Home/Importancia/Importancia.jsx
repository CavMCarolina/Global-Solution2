export default function Importancia() {
  const dados = [
    {
      h2: "70%",
      p: "Da superfície terrestre é coberta pelos oceanos",
      key: 1,
    },
    {
      h2: "25%",
      p: "Das emissões de CO2 são absorvidas pelos oceanos",
      key: 2,
    },
    {
      h2: "50% - 80%",
      p: "Do oxigênio do planeta é fornecido pelos oceanos",
      key: 3,
    },
  ];

  return (
    <section id="importancia">
      <h1>A Importância dos Oceanos:</h1>
      <div className="conteudo">
        <div className="importancia">
          {dados.map((div) => (
            <div key={div.key}>
              <h2 className="porcentagens">{div.h2}</h2>
              <p>{div.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
