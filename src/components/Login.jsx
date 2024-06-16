import { Link, useNavigate } from "react-router-dom";
import "../Styles/EstiloLogin.css";

export function LoginC() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/pagina_home");
  };

  return (
    <div className="contenidoL">
      <div className="formulario">
        <h1>inicio de sesión</h1>

        <form action="">
          <div className="username">
            <input type="text" required />
            <label>Nombre de usuario</label>
          </div>

          <div className="username">
            <input type="password" required />
            <label>Ingrese contraseña </label>
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
