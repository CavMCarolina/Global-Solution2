import { Link } from "react-router-dom";

export default function ONGsHome() {
  return (
    <section id="ongs">
      <h1 className="titulo">ONGs na causa:</h1>
      <div className="conteudo">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde
          alias tenetur nobis ut possimus tempora qui! Corporis quis provident
          ad iusto deleniti blanditiis enim illo atque quod? Dolorum, iure.
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
