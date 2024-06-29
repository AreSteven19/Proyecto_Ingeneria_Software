import "../Styles/Style.ComponenteBienvenido.css";
import bgBienvenido from "../Pictures/bg_Bienvenido.jpg";

export default function ComponenteBienvenido() {
  return (
    <section id="bienvenido" className="Container_Bienvenido">
      <dic className="containerBg">
        <img className="bg_Bienvenido" src={bgBienvenido} alt="bg_Bienvenido" />
      </dic>

      <div className="textsBienvenido">
        <div className="containerTextos">
          <p id="titleBienvenido">
            Bienvenido a <strong>Geo'S</strong> Barber shop
          </p>
          <p id="subtitleBienvenido">
            Ubicados en el cantón de Coto Brus distrito de Agua Buena
          </p>
          <p id="descriptionBienvenido">
            Somos una barbería con 5 años de experiencia, donde la comodidad y
            satisfaccción del cliente es nuestra prioridad. nuestros barberos
            cuentan con amplia experiencia en todo tipo de sombras, cortes y
            marcados, será un placer atenderle
          </p>
        </div>
        <div className="ContainerButton">
          <button className="Button_Bienvenido">Servicios</button>
        </div>
      </div>
    </section>
  );
}
