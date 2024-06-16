import React from "react";
import LoginC from "./components/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaL from "./Pages/pagina_login.jsx";
import PaginaR from "./Pages/pagina_registro.jsx";
import Pagina_Home from "./Pages/pagina_home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginC />} />
        <Route path="/pagina_registro" element={<PaginaR />} />
        <Route path="/pagina_home" element={<Pagina_Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
