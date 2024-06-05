import { Link } from "react-router-dom";

export default function ONGsHome() {
  return (
    <section id="ongs">
      <h1 className="titulo">ONGs na causa:</h1>
      <div className="conteudo">
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque nemo nulla, quis modi unde commodi suscipit repellat officiis sunt reprehenderit molestiae nihil voluptatum earum minima ea, perferendis quam qui.
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
