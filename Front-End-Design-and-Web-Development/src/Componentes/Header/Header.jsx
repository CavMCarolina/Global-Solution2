import Navbar from "./Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/BlueWatch.png";
import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";

export default function Header() {
  // Para o header ficar fixo e mudar de cor
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Botão estilizado para login
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: () => console.log("Login Failed"),
  });

  return (
    <header className={`cabecalho ${scrolling ? "scrolled" : ""}`}>
      <img src={logo} alt="Logo BlueWatch" />
      <div className="icones_nav">
        <Navbar />
        <FaUserCircle
          size={30}
          style={{
            color: "white",
          }}
          onClick={() => login()}
        >
          Login with Google
        </FaUserCircle>
      </div>
    </header>
  );
}
