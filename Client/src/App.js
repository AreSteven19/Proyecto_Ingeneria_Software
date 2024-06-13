import React from 'react';
import LoginC from './components/Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaR from './Pages/pagina_registro.jsx';
import Navbar from './components/Navbar.jsx';
import PaginaP from './Pages/pagina_principal.jsx';
function App() {
  return (
    <div className="App">

      
      
      <BrowserRouter>
        <Routes>
          
          //para usar las rutas

          <Route path="/" element={<LoginC />} />
          <Route path="/pagina_registro" element={<PaginaR />} />
          <Route path="/pagina_principal" element={<PaginaP />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
