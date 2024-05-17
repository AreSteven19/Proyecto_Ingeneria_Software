
import '../Estilos/estilo.css';

export function Logininterfaz() {




  return (

    <div className="formulario">

      <h1>inicia de sesión</h1>

      <form action="">

        <div className='username'>

          <input type="text" required />
          <label>Nombre de usuario</label>

        </div>

        <div className='username'>

          <input type="text" required />
          <label>Ingrese contraseña </label>

        </div>

        <input type="submit" value="iniciar" />

        <div className="registro">
          ¿No tienes una cuenta? <a href="#">Registro</a>
        </div>




      </form>



    </div>
  );
}

export default Logininterfaz;
