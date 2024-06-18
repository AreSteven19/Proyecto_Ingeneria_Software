import "../Styles/Style.Servicios.css";

export default function Servicios() {
  return (
    <div className="container_Servicios">
      <div className="container_tittleServicios">
        <p className="title_Servicios">Nuestros Servicios</p>
      </div>
      <div className="container_Cards">
        <div className="card">
          <div id="logoCard"></div>
          <div id="tittleCard">
            <p>Cortes</p>
          </div>
          <div id="descriptionCard">
            <p>Todo tipo de cortes y sombras</p>
          </div>
        </div>

        <div className="card">
          <div id="logoCard"></div>
          <div id="tittleCard">
            <p>Cortes</p>
          </div>
          <div id="descriptionCard">
            <p>Todo tipo de cortes y sombras</p>
          </div>
        </div>

        <div className="card">
          <div id="logoCard"></div>
          <div id="tittleCard">
            <p>Cortes</p>
          </div>
          <div id="descriptionCard">
            <p>Todo tipo de cortes y sombras</p>
          </div>
        </div>

        <div className="card">
          <div id="logoCard"></div>
          <div id="tittleCard">
            <p>Cortes</p>
          </div>
          <div id="descriptionCard">
            <p>Todo tipo de cortes y sombras</p>
          </div>
        </div>
      </div>
      <div className="container_Btn">
        <button className="Button_Bienvenido">Reservar</button>
      </div>
    </div>
  );
}
