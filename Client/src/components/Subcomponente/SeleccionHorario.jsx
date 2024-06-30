import React, { useState } from "react";
import "../../Styles/Style.SeleccionHorario.css";
import SubCompCalendario from "./SubComponenteCalendario";

const SeleccionHorario = ({ onSelectHorario, goBack, props }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChangeDate = (date) => {
    setSelectedDate(date);
    onSelectHorario(date);
  };

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
        <button className="btnVolverH" onClick={goBack}>
          {flecha}
        </button>
        <h1 className="tittleHorario">Seleccionar Fecha y Hora</h1>
      </div>
      <div className="barberoSeleccionado">
        {props ? props.name : "Aún no ha seleccionado barbero"}
      </div>
      <div className="ContainerHorarios">
        <SubCompCalendario onDateChange={handleChangeDate} />
      </div>
    </div>
  );
};

export default SeleccionHorario;
