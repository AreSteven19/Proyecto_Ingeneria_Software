import { Link } from 'react-router-dom';
import '../Styles/EstiloLogin.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function RegisterC() {

  const navigate = useNavigate();

  const DatosUsuarioR = {
    nombre: '',
    primerapellido: '',
    segundoapellido: '',
    correo: '',
    contra: '',
    numero: '',
  };

  const [EstadoRegistro, setDatos] = useState(DatosUsuarioR);

  const GuardarDatos = (e) => {
    const { name, value } = e.target;
    setDatos({ ...EstadoRegistro, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(EstadoRegistro);
    alert("¡Registro enviado!");
     navigate("/");
  };

  return (

    <div className="contenidoR">

      <div className="formulario">

        <h1>Bienvenido al Registro</h1>
        <form onSubmit={handleSubmit}>
          <div className='username'>
            <input
              type="text"
              name="nombre"
              required
              onChange={GuardarDatos}
              value={EstadoRegistro.nombre}
            />
            <label>Nombre</label>

          </div>

          <div className='username'>
            <input
              type="text"
              name="primerapellido"
              required
              onChange={GuardarDatos}
              value={EstadoRegistro.primerapellido}
            />
            <label>Primer apellido</label>

          </div>

          <div className='username'>
            <input
              type="text"
              name="segundoapellido"
              required
              onChange={GuardarDatos}
              value={EstadoRegistro.segundoapellido}
            />
            <label>Segundo apellido</label>

          </div>

          <div className='username'>
            <input
              type="text"
              name="correo"
              required
              onChange={GuardarDatos}
              value={EstadoRegistro.correo}
            />
            <label>Correo Electrónico</label>

          </div>

          <div className='username'>
            <input
              type="password"
              name="contra"
              required
              onChange={GuardarDatos}
              value={EstadoRegistro.contra}
            />
            <label>Contraseña</label>

          </div>

          <div className='username'>
            <input
              type="number"
              name="numero"
              required
              onChange={GuardarDatos}
              value={EstadoRegistro.numero}
            />
            <label>Número de teléfono</label>

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
