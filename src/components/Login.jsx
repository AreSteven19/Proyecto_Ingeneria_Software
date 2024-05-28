
import { Link, Router } from 'react-router-dom';
import '../Styles/EstiloLogin.css'
export function LoginC() {


  return (

    <div className="contenidoL">

      <div className="formulario">

        <h1>inicio de sesión</h1>

        <form action="">

          <div className='username'>

            <input type="text" required />
            <label>Correo Electrónico</label>

          </div>

          <div className='username'>

            <input type="password" required />
            <label>Contraseña </label>

          </div>

          <input type="submit" value="Iniciar Sesión" />

          <div className="registro">
            ¿No tienes una cuenta? <Link to="/pagina_registro">Registro</Link>

          </div>




        </form>








      </div>

    </div>
  );
}

export default LoginC;
