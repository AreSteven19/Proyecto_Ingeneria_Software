import "../Styles/EstiloLogin.css";
import Jumbotron from "../components/Jumbotron";
import Bienvenido from "../components/Bienvenido";
import Navbar2 from "../components/Navbar2";
import Servicios from "../components/Servicios";

export function PaginaP() {
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
