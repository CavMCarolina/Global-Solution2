import { useEffect, useState } from "react";
import video from "../assets/video_api.mp4";

export default function API() {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    fetch("https://666385d9932baf9032a8689a.mockapi.io/gs/fotos")
      .then((response) => response.json())
      .then((data) => setFotos(data));
  });

  return (
    <>
      <div className="background-container">
        {/* Video de Fundo */}
        <video autoPlay loop muted className="video">
          <source src={video} type="video/mp4" alt="Video de fundo" />
        </video>
        <div className="transicao1"></div>
      </div>
      <h1 className="titulo negativo">O Oceano que você conhece:</h1>
      <div className="conteudo">
        {fotos.map((foto, index) => (
          <div key={index} className="foto_api">
            <h2 className="porcentagens">{foto.id}</h2>
            <img src={foto.url} alt={foto.name}/>
          </div>
        ))}
      </div>
    </>
  );
}
