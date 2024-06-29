import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Style.SeleccionServicio.css";

const services = [
  {
    category: "Spá",
    services: [
      {
        name: "Limpieza facial",
        duration: "40 min",
        description:
          "Vaporizador caliente para evitar irritación en la piel seguido de un exfoliante para eliminar la piel muerta de la cara y eliminar la piel grasosa, ayuda a rejuvenecer y mantener tu piel suave y limpia. Para cerrar los poros una mascarilla de velo facial.",
        price: 4500,
      },
      {
        name: "Barba tipo spá",
        duration: "35 min",
        description:
          "Vaporizador caliente para lavar la barva y la piel muerta y toda impureza",
        price: 2500,
      },
    ],
  },
];

const services2 = [
  {
    category: "Cabello",
    services: [
      {
        name: "Cejas",
        duration: "10 min",
        description:
          "Marcar con navaja - Bajar el volumen de las cejas si el cliente lo prefiere",
        price: 1000,
      },
      {
        name: "Tinte para barba semi permanente",
        duration: "15 min",
        description:
          "Tinte semipermanete con duración de 5 días, ideal para eventos",
        price: 2500,
      },
      {
        name: "Cejas",
        duration: "10 min",
        description:
          "Marcar con navaja - Bajar el volumen de las cejas si el cliente lo prefiere",
        price: 1000,
      },
      {
        name: "Tinte para barba semi permanente",
        duration: "15 min",
        description:
          "Tinte semipermanete con duración de 5 días, ideal para eventos",
        price: 2500,
      },
    ],
  },
];

export default function SeleccionServicio({ onSelectService }) {
  const navigate = useNavigate();
  const [bottonActivado, setbottonActivado] = useState("spa");

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
    <div className="ContainerServiciosGen">
      <div className="containerTittleServicios">
        <button
          className="btnVolver"
          onClick={() => navigate("/Pagina_Principal")}
        >
          {flecha}
        </button>
        <h1 className="tittleServicios">Seleccionar servicios</h1>
      </div>
      <div className="containerServicios">
        <div className="containerBtnOpciones">
          <button
            className={`bottonOptions ${
              bottonActivado === "spa" ? "active" : ""
            }`}
            onClick={() => setbottonActivado("spa")}
          >
            Spá
          </button>
          <button
            className={`bottonOptions ${
              bottonActivado === "cabello" ? "active" : ""
            }`}
            onClick={() => setbottonActivado("cabello")}
          >
            Cabello
          </button>
        </div>

        <div className="containerOptiones">
          {bottonActivado === "spa" && (
            <div className="opciones" key="spa">
              {services.map((category, index) => (
                <div className="opcion" key={index}>
                  {category.services.map((service, index) => (
                    <div key={index} className="detallesOpcion">
                      <div id="textoDetalles">
                        <p className="tittleDetalles">{service.name}</p>
                        <p className="durationDetalles">{service.duration}</p>
                        <p className="descripcionDetalles">
                          {service.description}
                        </p>
                      </div>
                      <div className="btnDetalles">
                        <button
                          className="btnMas"
                          onClick={() => onSelectService(service)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          {bottonActivado === "cabello" && (
            <div className="opciones" key="cabello">
              {services2.map((category, index) => (
                <div className="opcion" key={index}>
                  {category.services.map((service, index) => (
                    <div key={index} className="detallesOpcion">
                      <div id="textoDetalles">
                        <p className="tittleDetalles">{service.name}</p>
                        <p className="durationDetalles">{service.duration}</p>
                        <p className="descripcionDetalles">
                          {service.description}
                        </p>
                      </div>
                      <div className="btnDetalles">
                        <button
                          className="btnMas"
                          onClick={() => onSelectService(service)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
