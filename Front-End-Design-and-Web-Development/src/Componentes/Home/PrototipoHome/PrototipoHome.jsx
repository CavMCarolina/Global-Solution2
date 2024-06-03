import { Link } from "react-router-dom";

export default function PrototipoHome() {
  return (
    <section id="prototipo">
      <h1 className="titulo">O Protótipo:</h1>
      <div className="conteudo">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde
          alias tenetur nobis ut possimus tempora qui! Corporis quis provident
          ad iusto deleniti blanditiis enim illo atque quod? Dolorum, iure.
        </p>
        <Link to="BlueWatch/Prototipo">
          <button className="botao">
            Clique aqui para ver os dados em tempo real!
          </button>
        </Link>
      </div>
    </section>
  );
}
