import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Style.SeleccionBarbero.css";
import img1 from "../../Pictures/barber3.jpg";

const barberos = [
  { name: "Jorsh", image: img1 },
  { name: "Guillermo", image: img1 },
  { name: "Geohandry", image: img1 },
  { name: "Andy", image: img1 },
];

const SeleccionBarbero = ({ onSelectBarbero, goBack }) => {
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
    <div className="containerSeleccionBarbero">
      <div className="containerTittleBarber">
        <button className="btnVolverB" onClick={goBack}>
          {flecha}
        </button>
        <h1 className="tittleBarber">Seleccionar Barbero</h1>
      </div>
      <div className="ContainerBarberos">
        {barberos.map((barbero, index) => (
          <div
            key={index}
            className="barbero"
            onClick={() => onSelectBarbero(barbero)}
          >
            <div className="containerImgBarbero">
              <img
                className="imgBarbero"
                src={barbero.image}
                alt={barbero.name}
              />
            </div>
            <div className="containerNameBarbero">
              <p>{barbero.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeleccionBarbero;
