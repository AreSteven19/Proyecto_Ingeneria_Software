import React, { useRef } from "react";
import "../Styles/EstiloLogin.css";
import Navbar2 from "../components/Navbar2";
import ComponenteJumbotron from "../components/ComponenteJumbotron";
import ComponenteBienvenido from "../components/ComponenteBienvenido";
import ComponenteServicios from "../components/ComponenteServicios";
import ComponenteBarberos from "../components/ComponenteBarberos";
import ComponenteContacto from "../components/ComponenteContacto";

export function PaginaP() {
  const jumbotronRef = useRef(null);
  const bienvenidoRef = useRef(null);
  const serviciosRef = useRef(null);
  const barberosRef = useRef(null);
  const contactoRef = useRef(null);

  const scrollToSection = (section) => {
    let ref;
    if (section === "inicio") {
      ref = jumbotronRef;
    } else if (section === "servicios") {
      ref = serviciosRef;
    } else if (section === "barberos") {
      ref = barberosRef;
    } else if (section === "contacto") {
      ref = contactoRef;
    }

    if (ref && ref.current) {
      const top = ref.current.offsetTop - 100; // Ajusta este valor según la altura de tu navbar
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
        <Navbar2 scrollToSection={scrollToSection} />
      </div>

      <div
        style={{
          marginTop: "100px", // Ajusta este valor según la altura de tu navbar
          height: "100%",
          width: "100%",
        }}
      >
        <section ref={jumbotronRef}>
          <ComponenteJumbotron />
        </section>
        <section ref={bienvenidoRef}>
          <ComponenteBienvenido />
        </section>
        <section ref={serviciosRef}>
          <ComponenteServicios />
        </section>
        <section ref={barberosRef}>
          <ComponenteBarberos />
        </section>
        <section ref={contactoRef}>
          <ComponenteContacto />
        </section>
      </div>
    </div>
  );
}

export default PaginaP;
