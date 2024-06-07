import { Link } from "react-router-dom";

export default function ONGsHome() {
  return (
    <section id="ongs">
      <h1 className="titulo">ONGs na causa:</h1>
      <div className="conteudo">
        <p>
          Os ONGs são parte importante da causa, uma vez que conscientizam a sociedade por meio de movimentos sustentáveis e de grande ajuda para a humanidade. Muitas delas são focadas em auxiliar os oceanos, veja abaixo algumas delas.
        </p>
        <Link to="BlueWatch/ONGs">
          <button className="botao">
            Clique aqui para ver as ONGs que auxiliam na causa!
          </button>
        </Link>
      </div>
    </section>
  );
}
