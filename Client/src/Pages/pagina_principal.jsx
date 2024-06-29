import React from "react";

import "../Styles/EstiloLogin.css";
import Navbar2 from "../components/Navbar2";
import ComponenteJumbotron from "../components/ComponenteJumbotron";
import ComponenteBienvenido from "../components/ComponenteBienvenido";
import ComponenteServicios from "../components/ComponenteServicios";
import ComponenteBarberos from "../components/ComponenteBarberos";
import ComponenteContacto from "../components/ComponenteContacto";

export function PaginaP() {
  // const [activeSection, setActiveSection] = useState("");

  // const handleScroll = () => {
  //   const sections = document.querySelectorAll("section");
  //   let currentSection = "";

  //   sections.forEach((section) => {
  //     const sectionTop = section.offsetTop;
  //     if (window.scrollY >= sectionTop - 50) {
  //       currentSection = section.getAttribute("id");
  //     }
  //   });

  //   setActiveSection(currentSection);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100px",
          width: "100%",
          position: "fixed",
          zIndex: 1,
        }}
      >
        <Navbar2 />
      </div>

      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <ComponenteJumbotron />
        <ComponenteBienvenido />
        <ComponenteServicios />
        <ComponenteBarberos />
        <ComponenteContacto />
      </div>
    </div>
  );
}

export default PaginaP;
