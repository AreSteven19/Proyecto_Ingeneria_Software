import { Link } from "react-router-dom";
import "../Styles/EstiloLogin.css";
import { useNavigate } from "react-router-dom";

export function LoginC() {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault(); // Previene el envío del formulario
    navigate("/pagina_principal");
  };

  return (
    <div className="contenidoL">
      <div className="formulario">
        <h1>Inicio de Sesión</h1>

        <form>
          <div className="username">
            <input type="text" required />
            <label>Correo Electrónico</label>
            <span></span>
          </div>

          <div className="username">
            <input type="password" required />
            <label>Contraseña</label>
            <span></span>
          </div>

          <input type="submit" onClick={handleClick} value="Iniciar Sesión" />

          <div className="registro">
            ¿No tienes una cuenta? <Link to="/pagina_registro">Registro</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginC;
