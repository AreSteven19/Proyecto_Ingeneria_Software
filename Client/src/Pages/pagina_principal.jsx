import "../Styles/EstiloLogin.css";
import { Navbar2 } from "../components/Navbar2";
import Jumbotron from "../components/Jumbotron";
import Bienvenido from "../components/Bienvenido";
import Servicios from "../components/Servicios";

export function PaginaP() {
  return (
    <div className="contenido" style={{ marginTop: "70px" }}>
      <Navbar2></Navbar2>
      <div className="bodyPrincipal" style={{ height: "calc(100vh - 60px)" }}>
        <Jumbotron />
        <Bienvenido />
        <Servicios />
      </div>
    </div>
  );
}

export default PaginaP;
