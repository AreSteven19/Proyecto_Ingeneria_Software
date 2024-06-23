// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "../Styles/EstiloNavbar.css";

// import image from "../Pictures/image.png";

// export function Navbar2() {
//   const [visible, setVisible] = useState(false);
//   const [visible2, setVisible2] = useState(false);

//   const cambiarEstado = () => {
//     setVisible(!visible);
//   };

//   const cambiarEstado2 = () => {
//     setVisible2(!visible2);
//   };

//   return (
//     <nav className="Navbar">
//       <img src={image} alt="Logo Empresa" className="logoempresa" />

//         <div className="containerLinks">
//           <Link id="link" to="/">
//             Inicio
//           </Link>
//           <Link id="link" to="/">
//             Servicios
//           </Link>
//           <Link id="link" to="/">
//             Contacto
//           </Link>
//         </div>

//         <button className="menu" onClick={cambiarEstado}></button>
//         <div
//           className="dropdown-content"
//           style={{ display: visible ? "flex" : "none" }}
//         >
//           Inicio
//         </Link>
//         <Link
//           id="link"
//           to="#servicios"
//           className={activeSection === "servicios" ? "active" : ""}
//         >
//           Servicios
//         </Link>
//         <Link
//           id="link"
//           // to="/"
//           className={activeSection === "section1" ? "active" : ""}
//           href="#section1"
//         >
//           Contacto
//         </Link>
//       </div>

//       <button className="menu" onClick={cambiarEstado}></button>
//       <div
//         className="dropdown-content"
//         style={{ display: visible ? "flex" : "none" }}
//       >
//         <Link to="/">Inicio</Link>
//         <Link to="/">Servicios</Link>
//         <Link to="/">Contacto</Link>
//         <Link to="/">Perfil</Link>
//       </div>

//       <button className="btnUser" onClick={cambiarEstado2}></button>
//       <div
//         className="dropdown-content2"
//         style={{ display: visible2 ? "flex" : "none" }}
//       >
//         <Link to="/">Perfil</Link>
//         <Link to="/">Configuraciones</Link>
//         <Link to="/">Cerrar Sesión</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar2;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/EstiloNavbar.css";
import image from "../Pictures/image.png";

export function Navbar2({ activeSection }) {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const cambiarEstado = () => {
    setVisible(!visible);
  };

  const cambiarEstado2 = () => {
    setVisible2(!visible2);
  };

  return (
    <nav className="Navbar">
      <img src={image} alt="Logo Empresa" className="logoempresa" />

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
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/perfil">Perfil</Link>
      </div>

      <button className="btnUser" onClick={cambiarEstado2}></button>
      <div
        className="dropdown-content2"
        style={{ display: visible2 ? "flex" : "none" }}
      >
        <Link to="/perfil">Perfil</Link>
        <Link to="/configuraciones">Configuraciones</Link>
        <Link to="/cerrar-sesion">Cerrar Sesión</Link>
      </div>
    </nav>
  );
}

export default Navbar2;
