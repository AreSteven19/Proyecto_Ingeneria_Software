import "../Styles/EstiloLogin.css";
import Jumbotron from "../components/Jumbotron";
import Bienvenido from "../components/Bienvenido";
import Servicios from "../components/Servicios";
import { Navbar2 } from "../components/Navbar2";

export function PaginaP() {
  return (
    <div className="contenido" style={{ marginTop: "70px" }}>
      <Navbar2></Navbar2>
      <div className="bodyPrincipal" style={{ height: "calc(100vh - 60px)" }}>
        <Jumbotron />
        <Bienvenido />
        <Servicios />
      </div>

      <div className="contenido">
        <Navbar2></Navbar2>
      </div>
    </div>
  );
}

export default PaginaP;
