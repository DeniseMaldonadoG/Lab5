import "./App.css";
import Marie from "./assets/Marie.jpg";
import ksaru from "./assets/ksaru.jpg";

function CientificoBio({ nombre, profesion, premios, descubrio, imagen }) {
  return (
    <div className="bio">
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre} className="foto" />
      <ul>
        <li><b>Profesión:</b> {profesion}</li>
        <li><b>Premios:</b> {premios}</li>
        <li><b>Descubrió:</b> {descubrio}</li>
      </ul>
    </div>
  );
}

function App() {
  
  const cientificos = [
    {
      id: 1,
      nombre: "Maria Skłodowska-Curie",
      profesion: "física y química",
      premios:
        "4 (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)",
      descubrio: "polonio (elemento químico)",
      imagen: Marie,
    },
    {
      id: 2,
      nombre: "Katsuko Saruhashi",
      profesion: "geoquímica",
      premios: "2 (Premio Miyake de geoquímica, Premio Tanaka)",
      descubrio:
        "un método para medir el dióxido de carbono en el agua de mar",
      imagen: ksaru,
    },
  ];

  return (
    <div>
      <h1>Científicos Notables</h1>
      {cientificos.map((c) => (
        <CientificoBio
          key={c.id}
          nombre={c.nombre}
          profesion={c.profesion}
          premios={c.premios}
          descubrio={c.descubrio}
          imagen={c.imagen}
        />
      ))}
    </div>
  );
}

export default App;
