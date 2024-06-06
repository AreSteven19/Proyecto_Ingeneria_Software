
import { Link, Router } from 'react-router-dom';
import '../Styles/EstiloNavbar.css'


export function Navbar() {


  return (

   

       <nav className='Contenido_Navbar'>

        <p>Geos Style barber shop</p>

        <Link to="/pagina_registro">Registro</Link>
        <Link to="/pagina_registro">Registro</Link>
        <Link to="/pagina_registro">Registro</Link>
        
        
        </nav> 

     

  
  );
}

export default Navbar;
