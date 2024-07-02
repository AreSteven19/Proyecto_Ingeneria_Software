import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Styles/EstiloNavbar.css";
import image from "../Pictures/image.png";

export function Navbar2({ scrollToSection }) {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

  const cambiarEstado = () => {
    setVisible(!visible);
  };

  const cambiarEstado2 = () => {
    setVisible2(!visible2);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setVisible(false);
    }
    if (
      dropdownRef2.current &&
      !dropdownRef2.current.contains(event.target)
    ) {
      setVisible2(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="Navbar">
      <img src={image} alt="Logo Empresa" className="logoempresa" />

      <div className="containerLinks">
        <a id="link" style={{ cursor: 'pointer' }} onClick={() => scrollToSection("inicio")}>
          Inicio
        </a>
        <a id="link" style={{ cursor: 'pointer' }} onClick={() => scrollToSection("servicios")}>
          Servicios
        </a>
        <a id="link" style={{ cursor: 'pointer' }} onClick={() => scrollToSection("barberos")}>
          Barberos
        </a>
        <a id="link" style={{ cursor: 'pointer' }} onClick={() => scrollToSection("contacto")}>
          Contacto
        </a>
      </div>

      

      <button className="menu" onClick={cambiarEstado}></button>
      <div
        className="dropdown-content"
        ref={dropdownRef}
        style={{ display: visible ? "flex" : "none" }}
      >
        <a style={{ cursor: 'pointer' }} onClick={() => scrollToSection("inicio")}>Inicio</a>
        <a style={{ cursor: 'pointer' }} onClick={() => scrollToSection("servicios")}>Servicios</a>
        <a style={{ cursor: 'pointer' }} onClick={() => scrollToSection("contacto")}>Contacto</a>
        <Link to="/Pagina_perfil" style={{ cursor: 'pointer' }}>Perfil</Link>
      </div>

      <button className="btnUser" onClick={cambiarEstado2}></button>
      <div
        className="dropdown-content2"
        ref={dropdownRef2}
        style={{ display: visible2 ? "flex" : "none" }}
      >
        <Link to="/Pagina_perfil" style={{ cursor: 'pointer' }}>Perfil</Link>
        <Link to="/Pagina_principal" style={{ cursor: 'pointer' }}>Configuraciones</Link>
        <Link to="/" style={{ cursor: 'pointer' }}>Cerrar Sesión</Link>
      </div>
    </nav>
  );
}

export default Navbar2;
