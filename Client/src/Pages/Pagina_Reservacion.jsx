import React, { useState } from "react";
import SeleccionProgreso from "../components/Subcomponente/SeleccionProgreso";
import SeleccionServicio from "../components/Subcomponente/SeleccionServicio";
import SeleccionBarbero from "../components/Subcomponente/SeleccionBarbero";
import SeleccionHorario from "../components/Subcomponente/SeleccionHorario";
import "../Styles/Style.PaginaReservacion.css";
import imgLogo from "../Pictures/logo.png";

const steps = ["Servicios", "Barbero", "Horario", "Confirmar"];
export default function Pagina_reservar() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBarbero, setSelectedBarbero] = useState(null);

  const handleSelectService = (service) => {
    setSelectedServices([...selectedServices, service]);
  };

  const handleSelectBarbero = (barbero) => {
    setSelectedBarbero(barbero);
    setCurrentStep(currentStep + 1);
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
        return <SeleccionBarbero onSelectBarbero={handleSelectBarbero} />;
      // Agregar más casos según sea necesario
      default:
        return <SeleccionHorario onSelectService={handleSelectService} />;
    }
  };

  return (
    <div className="ContainerPage">
      <section className="container_BarProgres">
        <SeleccionProgreso steps={steps} currentStep={currentStep} />
      </section>
      <div className="containerBodyPage">
        <div className="contentPageReservar">{renderCurrentStep()}</div>

        <div className="ResumenSelecciones">
          <div className="bodyResumen">
            <div className="headerResumen">
              <img id="imgLogo" src={imgLogo} alt="" />

              <div className="containertxtHeader">
                <p>Geo´s Barber Shop</p>
                <p>Agua buena, Agua Buena</p>
              </div>
            </div>
            <div className="containerResumenGeneral">
              <div className="servicioAgregado">
                {selectedServices.map((service) => (
                  <div className="servicioYprecio">
                    <span className="nombreServicio">{service.name}</span>
                    <span className="precioServicio">₡{service.price}</span>
                  </div>
                ))}
              </div>
              {selectedBarbero && <p>Barbero: {selectedBarbero.name}</p>}

              <div className="containerTotal">
                <p>Total</p>
                <p>₡{getTotal()}</p>
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
