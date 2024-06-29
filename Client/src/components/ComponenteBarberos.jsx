import "../Styles/Style.ComponenteBarberos.css";

export default function ComponenteBarberos() {
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
            <div className="ContainerbtnVer_Card">
              <input type="button" value="Ver" className="btnVer" />
            </div>
          </div>

          <div className="cardB">
            <div id="tittleCardB">
              <p>Yosh Lobo</p>
            </div>
            <div className="ContainerbtnVer_Card">
              <input type="button" value="Ver" className="btnVer" />
            </div>
          </div>
        </div>

        <div className="containerCards_2B">
          <div className="cardB">
            <div id="tittleCardB">
              <p>Guillermo Hernandez</p>
            </div>
            <div className="ContainerbtnVer_Card">
              <input type="button" value="Ver" className="btnVer" />
            </div>
          </div>

          <div className="cardB">
            <div id="tittleCardB">
              <p>Geohandry Zúñiga</p>
            </div>
            <div className="ContainerbtnVer_Card">
              <input type="button" value="Ver" className="btnVer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
