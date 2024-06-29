import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaR from "./Pages/pagina_registro.jsx";
import Navbar2 from "./components/Navbar2.jsx";
import PaginaP from "./Pages/pagina_principal.jsx";
import LoginC from "./components/Login.jsx";
import Pagina_reservacion from "./Pages/Pagina_Reservacion.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* //para usar las rutas ======= //para usar las rutas */}
          <Route path="/" element={<LoginC />} />
          <Route path="/pagina_registro" element={<PaginaR />} />
          <Route path="/pagina_principal" element={<PaginaP />} />
          <Route path="/Pagina_reservacion" element={<Pagina_reservacion />} />
          <Route path="/" element={<PaginaP />} />
          <Route path="/navbar" element={<Navbar2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
