import { useNavigate } from "react-router-dom";
import perfil from "../Pictures/perfil.jpg";
import "../Styles/Stylepefil.css";

export function Componenteperfil() {
  const navigate = useNavigate();

  return (
    <div className="ContenidoP">
      <div className="Cconfiguracion">
        <label>Editar</label>
        <label>__________</label>
        <label>Notificaciones</label>
        <label>__________</label>
        <label>Cerrar Sesión</label>
      </div>

      <div className="Cdatos">
        <div className="header">
          <img src={perfil} alt="Logo Empresa" className="profile-pic" />
          <button className="edit-foto-btn">Editar Foto</button>
        </div>
        <div className="info">
          <h2>Cambia tus datos y edita tu información personal.</h2>
          <form>
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" value="Juan de olla" readOnly />
            </div>
            <div className="form-group">
              <label>Descripción</label>
              <input type="text" value="Descripción opcional" readOnly />
            </div>
            <div className="form-group">
              <label>Correo</label>
              <input type="email" value="juan.ejemplo@gmail.com" readOnly />
            </div>
            <div className="form-group">
              <label>Teléfono</label>
              <input type="text" value="XXXX - XXXX" readOnly />
            </div>
          </form>
        </div>
        <button className="btn-regresar" onClick={() => navigate(-1)}>Regresar</button>
      </div>
    </div>
  );
}

export default Componenteperfil;
