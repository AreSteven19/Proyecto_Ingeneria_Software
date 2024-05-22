import { Link } from 'react-router-dom';
import '../Styles/EstiloLogin.css'
export function RegisterC() {


  return (

    <div className="contenidoR">

      <div className="formulario">

        <h1>Bienvenido al Registro</h1>

        <form action="">

          <div className='username'>

            <input type="text" required />
            <label>Nombre de usuario</label>

          </div>

          <div className='username'>

            <input type="password" required />
            <label>Ingrese contraseña </label>

          </div>

          <input type="submit" value="Registrarse" />

          <div className="registro">
            si quieres volver: <Link to="/">volver</Link>
          </div>



        </form>



      </div>

    </div>
  );
}

export default RegisterC;
