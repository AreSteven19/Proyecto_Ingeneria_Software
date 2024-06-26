import { Link } from 'react-router-dom';
import '../Styles/EstiloLogin.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {createClient} from '../api/client.api';



export function RegisterC() {

  const navigate = useNavigate();

  const DatosUsuarioR = {
    name: '',
    lastname1: '',
    lastname2: '',
    email: '',
    password: '',
    telefeno: '',
    fk_id_role: 1,
  };

  const [EstadoRegistro, setDatos] = useState(DatosUsuarioR);

  const GuardarDatos = (e) => {
    const { name, value } = e.target;
    setDatos({ ...EstadoRegistro, [name]: value });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    //console.log(EstadoRegistro);
    alert("¡Registro enviado!");
     navigate("/");
     try {
      console.log(EstadoRegistro);
      const response = await createClient(EstadoRegistro)
      //console.log("Datos guardados",response.data)
  } catch (error) {
      console.error("Error al guardar datos",error)
  }
  };

  return (

    <div className="contenidoR">

      <div className="formulario">

        <h1>Bienvenido al Registro</h1>
        <form onSubmit={handleSubmit}>
          <div className='username'>
            <input
              type="text"
              name="name"
              required
              onChange={GuardarDatos}
              value={EstadoRegistro.nombre}
            />
            <label>Nombre</label>

          </div>

          <div className='username'>
            <input
              type="text"
              name="lastname1"
              required
              onChange={GuardarDatos}
              value={EstadoRegistro.primerapellido}
            />
            <label>Primer apellido</label>

          </div>

          <div className='username'>
            <input
              type="text"
              name="lastname2"
              required
              onChange={GuardarDatos}
              value={EstadoRegistro.segundoapellido}
            />
            <label>Segundo apellido</label>

          </div>

          <div className='username'>
            <input
              type="text"
              name="email"
              required
              onChange={GuardarDatos}
              value={EstadoRegistro.correo}
            />
            <label>Correo Electrónico</label>

          </div>

          <div className='username'>
            <input
              type="password"
              name="password"
              required
              onChange={GuardarDatos}
              value={EstadoRegistro.contra}
            />
            <label>Contraseña</label>

          </div>

          <div className='username'>
            <input
              type="number"
              name="telefono"
              required
              onChange={GuardarDatos}
              value={EstadoRegistro.numero}
            />
            <label>Número de teléfono</label>

          </div>

          <input type="submit" value="Registrarse" />

          <div className="registro">

            si quieres  <Link to="/">volver</Link>
          </div>

        </form>

      </div>
    </div>
  );
}

export default RegisterC;
