import ongs from "../../../data/ongs.json";

export default function Sobre() {
  return (
    <>
      <h1 className="titulo negativo ">
        ONGs na causa:
      </h1>
      <div className="conteudo">
        {ongs.map((ong, index) => (
          <div key={ong.id}>
            <h2 className="porcentagens">{ong.nome}</h2>
            <div className="ongs">
              <div className="texto">
                <p>
                  {ong.sobre}
                  <br />
                  <br />
                  Contato: {ong.contato}
                </p>
                <a href={ong.link}>Site de {ong.nome}</a>
              </div>
              <div
                className={`logo_ongs ${index < 2 ? "primeiras" : "restantes"}`}
              >
                <img src={ong.logo}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
