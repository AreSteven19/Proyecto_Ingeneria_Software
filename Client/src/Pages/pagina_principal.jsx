import React, { useEffect, useState } from "react";

import "../Styles/EstiloLogin.css";
import Jumbotron from "../components/Jumbotron";
import Bienvenido from "../components/Bienvenido";
import Navbar2 from "../components/Navbar2";
import Servicios from "../components/Servicios";

export function PaginaP() {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 50) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="contenido" style={{ height: "100%" }}>
      <Navbar2 />
      <div className="bodyPrincipal" style={{ height: "calc(100vh - 90px)" }}>
        <Jumbotron />
        <Bienvenido />
        <Servicios />
      </div>
    </div>
  );
}

export default PaginaP;
