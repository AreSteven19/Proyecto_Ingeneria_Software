import "../Styles/Style.Barberos.css";

export default function Barberos() {
  return (
    <div id="servicios" className="container_Barberos">
      <section className="container_tittleBarberos">
        <p className="title_Barberos">Nuestros Barberos</p>
      </section>
      <section className="container_CardsB">
        <div className="containerCards_1B">
          <div className="cardB">
            <div id="tittleCardB">
              <p>Andy Castrillo</p>
            </div>
          </div>

          <div className="cardB">
            <div id="tittleCardB">
              <p>Yosh Lobo</p>
            </div>
          </div>
        </div>

        <div className="containerCards_2B">
          <div className="cardB">
            <div id="tittleCardB">
              <p>Guillermo Hernandez</p>
            </div>
          </div>

          <div className="cardB">
            <div id="tittleCardB">
              <p>Geohandry Zúñiga</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container_BtnBarberos">
        <button className="Button_Barberos">Reservar</button>
      </div>
    </div>
  );
}
