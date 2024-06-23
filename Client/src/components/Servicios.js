import "../Styles/Style.Servicios.css";

export default function Servicios() {
  return (
    <div id="servicios" className="container_Servicios">
      <section className="container_tittleServicios">
        <p className="title_Servicios">Nuestros Servicios</p>
      </section>
      <section className="container_Cards">
        <div className="containerCards_1">
          <div className="card">
            <div className="logoCards"></div>
            <div id="tittleCard">
              <p>CORTES</p>
            </div>
            <div id="descriptionCard">
              <p>Todo tipo de cortes y sombras</p>
            </div>
          </div>

          <div className="card">
            <div className="logoCards"></div>
            <div id="tittleCard">
              <p>BARBA</p>
            </div>
            <div id="descriptionCard">
              <p>Todo tipo de marcados y estilos</p>
            </div>
          </div>
        </div>

        <div className="containerCards_2">
          <div className="card">
            <div className="logoCards"></div>
            <div id="tittleCard">
              <p>SPÁ</p>
            </div>
            <div id="descriptionCard">
              <p>Limpieza facial, Barba spá</p>
            </div>
          </div>

          <div className="card">
            <div className="logoCards"></div>
            <div id="tittleCard">
              <p>CEJAS</p>
            </div>
            <div id="descriptionCard">
              <p>Definición marcado y más</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container_Btn">
        <button className="Button_Servicios">Reservar</button>
      </div>
    </div>
  );
}
