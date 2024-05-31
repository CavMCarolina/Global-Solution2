import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <div
        className={sidebarOpen ? "overlay open" : "overlay"}
        onClick={closeSidebar}
      ></div>
      <nav>
        <button id="menuBar" onClick={toggleSidebar}>
          <FaBars size={25}/>
        </button>
        <div className={sidebarOpen ? "sidebar open" : "sidebar"}>
          <a href="#importancia">Importância dos Oceanos</a>
          <a href="#realidade">A Realidade</a>
          <a href="#solucao">Nossa Solução</a>
          <a href="#ongs">ONGs</a>
          <a href="#prototipo">Dados em tempo real</a>
        </div>
      </nav>
    </>
  );
}
