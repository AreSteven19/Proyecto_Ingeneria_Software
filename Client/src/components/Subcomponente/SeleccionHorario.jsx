import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Style.SeleccionHorario.css";

const SeleccionHorario = ({ onSelectBarbero }) => {
  const navigate = useNavigate();
  const flecha = (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 12h14M5 12l4-4m-4 4 4 4"
      />
    </svg>
  );
  return (
    <div className="containerSeleccionHorario">
      <div className="containerTittleHorario">
        <button
          className="btnVolverH"
          onClick={() => navigate("/Pagina_Principal")}
        >
          {flecha}
        </button>
        <h1 className="tittleHorario">Seleccionar Horario</h1>
      </div>
      <div className="ContainerHorarios">
        <h1>Hola desde SeleccionHorario</h1>
      </div>
    </div>
  );
};

export default SeleccionHorario;
