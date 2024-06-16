import "../Styles/Style.Jumbotron.css";

export default function Jumbotron() {
  return (
    <div className="Container_Jumbotron">
      <div className="textJumbotron">
        <h1 className="Title_Jumbotron">Geo´s</h1>
        <h2 className="Subtitle_Jumbotron">BARBER SHOP</h2>
        <h3 className="Description_Jumbotron">
          Su barbería de confianza con estilo de calidad
        </h3>
      </div>

      <button className="Button_Jumbotron">Sobre nosotros</button>
    </div>
  );
}
