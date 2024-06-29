import React from "react";
import "../../Styles/Style.SeleccionProgreso.css";

const SeleccionProgreso = ({ steps, currentStep }) => {
  return (
    <div className="container_Progreso">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`opcionProgreso ${currentStep === index ? "active" : ""}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default SeleccionProgreso;
