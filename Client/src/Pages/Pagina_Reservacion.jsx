import React, { useState } from "react";
import SeleccionProgreso from "../components/Subcomponente/SeleccionProgreso";
import SeleccionServicio from "../components/Subcomponente/SeleccionServicio";
import SeleccionBarbero from "../components/Subcomponente/SeleccionBarbero";
import SeleccionHorario from "../components/Subcomponente/SeleccionHorario";
import "../Styles/Style.PaginaReservacion.css";
import imgLogo from "../Pictures/logo.png";
import iconCalendario from "../Pictures/iconCalendario.svg";
import iconBarber from "../Pictures/iconBarber.svg";

const steps = ["Servicios", "Barbero", "Horario", "Confirmar"];

export default function Pagina_reservar() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBarbero, setSelectedBarbero] = useState(null);
  const [selectedHorario, setSelectedHorario] = useState(null);

  const [barberData, setBarberData] = useState({
    services: [],
    fecha: "",
    hora: "",
    barbero: "",
  });

  const handleConfirm = () => {
    const setBarberData = {
      services: barberData.services,
      fecha: barberData.fecha,
      hora: barberData.hora,
      barbero: barberData.barbero,
    };

    fetch("URL_DE_TU_BASE_DE_DATOS", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Realiza cualquier acción adicional después de enviar los datos
      })
      .catch((error) => {
        console.error("Error:", error);
      });

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
            selectedBarbero={selectedBarbero}
          />
        );
      default:
        return null;
    }
  };

  const handleConfirm = () => {
    const dataToSend = {
      services: selectedServices,
      fecha: selectedHorario.date,
      hora: selectedHorario.time,
      barbero: selectedBarbero.name,
    };
    console.log(dataToSend);
  };

  return (
    <div className="ContainerPage">
      <section className="container_BarProgres">
        <SeleccionProgreso steps={steps} currentStep={currentStep} />
      </section>

      <div className="containerSubcompoente">
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
              </button>
              <h1 className="tittleHorario">Revisar y confirmar</h1>
            </div>
          )}
          <div
            className={`bodyResumen ${currentStep >= 3 ? "fullWidthBody" : ""}`}
          >
            <div className="headerResumen">
              <img
                className={`imgLogo ${currentStep >= 3 ? "fullWidthLogo" : ""}`}
                src={imgLogo}
                alt=""
              />

              <div className="containertxtHeader">
                <p>Geo´s Barber Shop</p>
                <p>Agua buena, Agua Buena</p>
              </div>
            </div>
            <div className="containerResumenGeneral">
              <div className="servicioAgregado">
                {currentStep >= 3 && (
                  <p className="resumenFinaltxt">Resumen de la cita</p>
                )}
                {selectedHorario && (
                  <p className="horarioReservado">
                    <img
                      className="iconCal"
                      src={iconCalendario}
                      alt="Calendario"
                    ></img>{" "}
                    <span className="txtHorarioD">{selectedHorario.date}</span>
                    <span className="txtHorarioT">{selectedHorario.time}</span>
                  </p>
                )}
                <div className="containerServiciosRes">
                  {selectedServices.map((service, index) => (
                    <div className="servicioYprecio" key={index}>
                      <span className="nombreServicio">- {service.name}</span>
                      <span className="precioServicio">₡{service.price}</span>
                    </div>
                  ))}
                </div>
                {selectedBarbero && (
                  <span className="barberoRes">
                    <span className="txtBarberoName">
                      <span className="txtBarbero">
                        <img
                          className="iconBar"
                          src={iconBarber}
                          alt="Barbero"
                        ></img>
                        {" Barbero"}
                      </span>
                      {selectedBarbero.name}
                    </span>
                  </span>
                )}
                {currentStep >= 4 && (
                  <div className="Contnotasreserva">
                    <p className="notasreservaTxt">Notas de la reserva</p>
                    <textarea
                      name="message"
                      className="messageReser"
                      cols="30"
                      rows="5"
                      placeholder="Mensaje"
                      required
                    ></textarea>
                  </div>
                )}
              </div>

              <div className="containerTotal">
                <div className="totalContainer">
                  <p>Total</p>
                  <p>₡{getTotal()}CRC</p>
                </div>
              </div>
            </div>
          </div>
          <div className="btnContinuarRes">
            {currentStep >= 5 ? (
              <button onClick={handleConfirm}>Confirmar</button>
            ) : (
              <button onClick={() => setCurrentStep(currentStep + 1)}>
                Continuar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
