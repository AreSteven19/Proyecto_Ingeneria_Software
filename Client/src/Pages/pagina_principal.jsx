import "../Styles/EstiloLogin.css";
import { Navbar2 } from "../components/Navbar2";
import Jumbotron from "../components/Jumbotron";
import Bienvenido from "../components/Bienvenido";

export function PaginaP() {
  return (
    <div className="contenido">
      <Navbar2></Navbar2>
      <Jumbotron />
      <Bienvenido />
    </div>
  );
}

export default PaginaP;
