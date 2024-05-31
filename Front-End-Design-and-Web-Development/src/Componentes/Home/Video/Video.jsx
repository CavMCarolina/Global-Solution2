import video from "../../../assets/GS-video.mp4";

export default function Video() {
  return (
    <div className="video-background-container">
      {/* Video de Fundo */}
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" alt="Video de fundo" />
      </video>
      <div className="transicao_video"></div>
    </div>
  );
}
