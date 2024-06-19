<<<<<<< HEAD
import React from "react";
import LoginC from "./components/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaR from "./Pages/pagina_registro.jsx";
import Navbar2 from "./components/Navbar2.jsx";
import PaginaP from "./Pages/pagina_principal.jsx";
=======
import React from 'react';
import LoginC from './components/Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaR from './Pages/pagina_registro.jsx';
import Navbar2 from './components/Navbar2.jsx';
import PaginaP from './Pages/pagina_principal.jsx';
>>>>>>> d54fe92c5e1ccf5bcdd1c27c15f55ac2ee9bff9e
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          //para usar las rutas
=======
          
          //para usar las rutas

>>>>>>> d54fe92c5e1ccf5bcdd1c27c15f55ac2ee9bff9e
          <Route path="/" element={<LoginC />} />
          <Route path="/pagina_registro" element={<PaginaR />} />
          <Route path="/pagina_principal" element={<PaginaP />} />
          <Route path="/navbar" element={<Navbar2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
