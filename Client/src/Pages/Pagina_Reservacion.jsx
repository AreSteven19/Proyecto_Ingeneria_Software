import React, { useState } from "react";
import SeleccionProgreso from "../components/Subcomponente/SeleccionProgreso";
import SeleccionServicio from "../components/Subcomponente/SeleccionServicio";
import SeleccionBarbero from "../components/Subcomponente/SeleccionBarbero";
import SeleccionHorario from "../components/Subcomponente/SeleccionHorario";
import "../Styles/Style.PaginaReservacion.css";
import imgLogo from "../Pictures/logo.png";
import iconCalendario from "../Pictures/iconCalendario.svg";

const steps = ["Servicios", "Barbero", "Horario", "Confirmar"];
export default function Pagina_reservar() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBarbero, setSelectedBarbero] = useState(null);
  const [selectedHorario, setSelectedHorario] = useState(null);

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

  const handleSelectService = (service) => {
    setSelectedServices([...selectedServices, service]);
  };

  const handleSelectBarbero = (barbero) => {
    setSelectedBarbero(barbero);
  };

  const handleSelectHorario = (date) => {
    setSelectedHorario(date);
    // setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getTotal = () => {
    return selectedServices.reduce(
      (total, service) => total + service.price,
      0
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <SeleccionServicio onSelectService={handleSelectService} />;
      case 1:
        return (
          <SeleccionBarbero
            onSelectBarbero={handleSelectBarbero}
            goBack={goBack}
          />
        );
      case 2:
        return (
          <SeleccionHorario
            onSelectHorario={handleSelectHorario}
            goBack={goBack}
            props={selectedBarbero}
          />
        );
      default:
        return (
          <SeleccionHorario
            onSelectService={handleSelectService}
            goBack={goBack}
          />
        );
    }
  };

  return (
    <div className="ContainerPage">
      <section className="container_BarProgres">
        <SeleccionProgreso steps={steps} currentStep={currentStep} />
      </section>

      <div className="containerBodyPage">
        {currentStep < 3 && (
          <div className="contentPageReservar">{renderCurrentStep()}</div>
        )}

        <div
          className={`ResumenSelecciones ${
            currentStep >= 3 ? "fullWidth" : ""
          }`}
        >
          {currentStep >= 3 && (
            <div className="containerTittleStepFinal">
              <button className="btnVolverH" onClick={goBack}>
                {flecha}
              </button>
              <h1 className="tittleHorario">Seleccionar Fecha y Hora</h1>
            </div>
          )}
          <div
            className={`bodyResumen ${currentStep >= 3 ? "fullWidthBody" : ""}`}
          >
            <div className="headerResumen">
              <img id="imgLogo" src={imgLogo} alt="" />

              <div className="containertxtHeader">
                <p>Geo´s Barber Shop</p>
                <p>Agua buena, Agua Buena</p>
              </div>
            </div>
            <div className="containerResumenGeneral">
              <div className="servicioAgregado">
                {/* Visualización del Horario de Reservación */}
                {currentStep >= 3 && (
                  <p className="resumenFinaltxt">Resumen de la cita</p>
                )}
                {selectedHorario && (
                  <p className="horarioReservado">
                    <img className="iconCal" src={iconCalendario}></img>{" "}
                    {selectedHorario.toDateString()}
                  </p>
                )}
                {/* Visualización de los Servicios */}
                <div className="containerServiciosRes">
                  {selectedServices.map((service) => (
                    <div className="servicioYprecio">
                      <span className="nombreServicio">{service.name}</span>
                      <span className="precioServicio">₡{service.price}</span>
                    </div>
                  ))}
                </div>
                <span className="barberoRes">
                  {selectedBarbero && <p>Barbero: {selectedBarbero.name}</p>}
                </span>
              </div>

              {/* Visualización del Total */}
              <div className="containerTotal">
                <p>Total</p>
                <p>₡{getTotal()}CRC</p>
              </div>
            </div>
          </div>
          <div className="btnContinuarRes">
            <button onClick={() => setCurrentStep(currentStep + 1)}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
