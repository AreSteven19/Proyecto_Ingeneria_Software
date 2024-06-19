import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../Styles/EstiloNavbar.css";

import image from "../Pictures/image.png";
import icousuario from "../Pictures/icousuario.png";

export function Navbar2() {
  const [visible, setVisible] = useState(false);

  const cambiarEstado = () => {
    setVisible(!visible);
  };

  return (
    <div className="CNav">
      <nav className="Navbar">
        <img src={image} alt="Logo Empresa" id="logoempresa" />

        <div className="containerLinks">
          <Link id="link" to="/">
            Inicio
          </Link>
          <Link id="link" to="/">
            Servicios
          </Link>
          <Link id="link" to="/">
            Contacto
          </Link>
        </div>

        <button className="menu" onClick={cambiarEstado}></button>
        <div
          className="dropdown-content"
          style={{ display: visible ? "flex" : "none" }}
        >
          <Link to="/">Inicio</Link>
          <Link to="/">Servicios</Link>
          <Link to="/">Contacto</Link>
          <Link to="/">Perfil</Link>
        </div>

        <button className="btnUser"></button>
      </nav>
    </div>
  );
}

export default Navbar2;
