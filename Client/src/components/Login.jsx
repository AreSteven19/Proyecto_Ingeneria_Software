import { Link } from "react-router-dom";
import "../Styles/EstiloLogin.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export function LoginC() {
  const navigate = useNavigate();
 
  const handleClick = (event) => {
    event.preventDefault(); // Previene el envío del formulario
    navigate("/pagina_principal");
  };


  const DatosUsuarioL = {
    email: '',
    password: ''
  };

  const [EstadoLogin, setEstado] = useState(DatosUsuarioL);

  const GuardarDatos = (e) => {
    const { name, value } = e.target;
    setEstado({ ...EstadoLogin, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("¡Registro enviado!");
    navigate("/");
    try {
      console.log(EstadoLogin);
      
      // const response = await createClient(EstadoLogin)
      //console.log("Datos guardados",response.data)
    } catch (error) {
      console.error("Error al guardar datos", error)
    }
  };



  return (
    <div className="contenidoL">
      <div className="formulario">
        <h1>Inicio de Sesión</h1>

        <form>
          <div className="username">
            <input
              type="text"
              name="email"
              required
              onChange={GuardarDatos}
              value={EstadoLogin.email}
            />
            <label>Correo Electrónico</label>
            <span></span>
          </div>

          <div className="username">
            <input 
            type="password"  
            name="password" 
            required   
            onChange={GuardarDatos}
            value={EstadoLogin.password}/>
            <label>Contraseña</label>
            <span></span>
          </div>

          
          
          
          
          
          <input
            type="submit"


            onClick={handleSubmit} value="Iniciar Sesión" />

          <div className="registro">
            ¿No tienes una cuenta? <Link to="/pagina_registro">Registro</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginC;
