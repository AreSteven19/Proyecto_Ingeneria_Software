import React from 'react';
import LoginC from './components/Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaL from './Pages/pagina_login.jsx';
import PaginaR from './Pages/pagina_registro.jsx';

function App() {
  return (
    <div className="App">

      
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginC />} />
          <Route path="/pagina_registro" element={<PaginaR />} />
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
