import VideoVoluntario from "./VideoVoluntario/VideoVoluntario";
import React from "react";

export default function VoluntarioComponente() {
  const [nome, setNome] = React.useState("");
  const [sobrenome, setSobrenome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");

  const handleChange = (key, event, setter) => {
    localStorage.setItem(key, event.target.value);
    setter(event.target.value);
  };

  function submit(event) {
    event.preventDefault();

    console.log(
      `nome: ${localStorage.getItem("nome")}, sobrenome: ${localStorage.getItem(
        "sobrenome"
      )}, email: ${localStorage.getItem(
        "email"
      )}, telefone: ${localStorage.getItem("telefone")}`
    );
  }

  return (
    <>
      <VideoVoluntario />
      <h1 className="titulo negativo">
        Junte-se a Nós!
      </h1>
      {/* Formulario do Bootstrap */}
      <form>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            value={nome}
            onChange={(e) => handleChange("nome", e, setNome)}
            type="nome"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sobrenome</label>
          <input
            value={sobrenome}
            onChange={(e) => handleChange("sobrenome", e, setSobrenome)}
            type="sobrenome"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => handleChange("email", e, setEmail)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Nós nunca vamos compartilhar suas informações.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input
            value={telefone}
            onChange={(e) => handleChange("telefone", e, setTelefone)}
            type="telefone"
            className="form-control"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Aceito os termos e políticas do BlueWatch.
          </label>
        </div>
        <button onClick={submit} type="submit" className="botao">
          Enviar
        </button>
      </form>
    </>
  );
}
