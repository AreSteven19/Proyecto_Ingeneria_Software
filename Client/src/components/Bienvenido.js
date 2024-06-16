import "../Styles/Style.Bienvenido.css";

export default function Bienvenido() {
  return (
    <div className="Container_Bienvenido">
      <div className="ImgBienvenido"></div>

      <div className="textBienvenido">
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
          <button className="Button_Bienvenido">Servicios</button>
        </div>
      </div>
    </div>
  );
}
