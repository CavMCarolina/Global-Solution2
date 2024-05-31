import Navbar from "./Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/BlueWatch.png";
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 50) {
              setScrolling(true);
          } else {
              setScrolling(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <header className={`cabecalho ${scrolling ? 'scrolled' : ''}`}>
        <img src={logo} alt="Logo BlueWatch" />
        <div className="icones_nav">
          <Navbar/>
          <FaUserCircle
          size={30}
            style={{
              color: "white",
            }}
          />
        </div>
    </header>
  );
}
