import React from "react";

import "../Styles/Style.Contacto.css";
import MapComponent from "./MapComponent";

export default function Contacto() {
  return (
    <section className="Container_Contacto">
      <div className="container_tittle">
        <p className="title_Contacto">Contactenos</p>
      </div>
      <div className="containerGen_Form">
        <div className="container_Mapa">
          <MapComponent />
        </div>
        <div className="container_Form">
          <form className="formContact" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre"
              required
            />
            <input
              type="tel"
              name="telefono"
              id="telefono"
              placeholder="Teléfono"
              required
            />
            <input
              type="email"
              name="correo"
              id="correo"
              placeholder="Correo"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Mensaje"
              required
            ></textarea>
            <input type="submit" value="Enviar" id="botonEnviarForm" />
          </form>
        </div>
      </div>
    </section>
  );
}
