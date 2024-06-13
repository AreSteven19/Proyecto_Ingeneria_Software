import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import '../Styles/EstiloNavbar.css';

import image from '../Pictures/image.png';
import icousuario from '../Pictures/icousuario.png';

export function Navbar() {

  
 
  const [visible, setVisible] = useState(false);
  const ReferenciaMenu = useRef(null);

  /* constante para Cambiar el estado del menu*/ 
  const cambiarEstado = () => {
   /* //otra opción !visible cambiarlo a false*/ 
    setVisible(true);
  };

  /* Funcion para manejar clics fuera del menú*/ 
  const ConsultarCLick = (event) => {
    if (ReferenciaMenu.current && !ReferenciaMenu.current.contains(event.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', ConsultarCLick);
    return () => {
      document.removeEventListener('mousedown', ConsultarCLick);
    };
  }, []);

  return (
    <div className='CNav'>
      <nav className='Navbar'>
        <img src={image} alt="Logo Empresa" id='logoempresa' />

        <Link to="/pagina_registro" className='links'>Inicio</Link>
        <Link to="/pagina_registro" className='links'>Servicios</Link>
        <Link to="/pagina_registro" className='links'>Contacto</Link>

        <div className="dropdown" ref={ReferenciaMenu}>
          <button className='links' id='icouse' onClick={cambiarEstado}>
            <img src={icousuario} alt='logo del usuario' id='icousuario' />
          </button>

          {visible && (
            <div className="dropdown-content">
              <Link to="/">Perfil</Link>
              <Link to="/">Configuración</Link>
              <Link to="/">Cerrar sesión</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
