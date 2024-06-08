import footer from "../../assets/footer.png";
import o20 from "../../assets/o20.png"
import aws from "../../assets/aws.png";
import unesco from "../../assets/unesco.png";
import un_globalCompact from "../../assets/un_global_compact.png";
import softtek from "../../assets/softtek.png";
import select_solucoes from "../../assets/select_solucoes.png";
import usp from "../../assets/usp.png";

export default function Footer() {
  const integrantes = [
    {
      nome: "Beatriz Silva",
      linkedin: "https://www.linkedin.com/in/beatriz-sp-rocha/",
      id: "bea"
    },
    {
      nome: "Carolina Machado",
      linkedin: "https://www.linkedin.com/in/carolinacavallimachado/",
      id: "lina"
    },
    {
      nome: "Lucas Masaki",
      linkedin: "https://www.linkedin.com/in/lucas-masaki-17040728a/",
      id: "lucas"
    },
  ];

  const parceiros = [
    {
      url: o20,
      nome: "O20",
      index: "o20",
      id: 1
    },
    {
      url: aws,
      nome: "AWS",
      index: "aws",
      id: 2
    },
    {
      url: unesco,
      nome: "UNESCO",
      index: "unesco",
      id: 3
    },
    {
      url: un_globalCompact,
      nome: "UN Global Compact",
      index: "un",
      id: 4
    },
    {
      url: softtek,
      nome: "Softtek",
      index: "softtek",
      id: 5
    },
    {
      url: select_solucoes,
      nome: "Select Soluções",
      index: "ss",
      id: 6
    },
    {
      url: usp,
      nome: "Catedral UNESCO para a Sustentabilidade do Oceano",
      index: "usp",
      id: 7
    },
  ];
  return (
    <footer>
      <div className="equipe">
        <h2>Nossa Equipe:</h2>
        {integrantes.map(integrante => (
          <a href={integrante.linkedin} key={integrante.id}>Linkedin de: {integrante.nome}</a>
        ))}
      </div>
      <div className="parceiros">
        <h2>Parceiros:</h2>
        <div className="imagens_parceiros">
        {parceiros.map(parceiro => (
          <img src={parceiro.url} alt={parceiro.nome} id={parceiro.index} key={parceiro.id}/>
        ))}
        </div>
      </div>
    </footer>
  );
}
