import { Link } from "react-router-dom";

export default function Realidade() {
  return (
    <section id="realidade">
      <div className="realidade">
        <div className="transicao2"></div>
      </div>
      <Link to={"/BlueWatch/API"}>
        <button className="botao" id="botao_api">
          Esse é o oceano genérico que você conhece
        </button>
      </Link>

      <h1>Esta é a Realidade:</h1>

      {/* Slider do bootstrap: */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://tapioca.ird.fr/wp-content/uploads/2022/08/7_pl540_mar-lixo2.jpg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://festivaldasustentabilidade.com.br/wp-content/uploads/2021/10/image-1024x683.jpg"
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.huffingtonpost.com/asset/590b3aa1150000f4068c7af2.jpeg?ops=1200_630"
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.otempo.com.br/content/dam/otempo/editorias/mundo/2022/6/mundo-poluicao-dos-oceanos-poluicao-dos-mares-manchas-de-oleo-no-oceano-1708974891.jpeg"
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://wwfeu.awsassets.panda.org/img/small_ww2108066_681569.jpg"
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://conteudo.imguol.com.br/c/noticias/5c/2019/09/27/tartaruga-encontrada-na-praia-da-redinha-em-natal-que-esta-no-centro-de-descontaminacao-de-fauna-oleada-da-uern-em-mossoro-rn-1569599746671_v2_695x638.jpg"
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2015/09/shutterstock_276997154.jpg"
              className="d-block"
              alt="..."
            />
          </div>
        </div>
        <div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
