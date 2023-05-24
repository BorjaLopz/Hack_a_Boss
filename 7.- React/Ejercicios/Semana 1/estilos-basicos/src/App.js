import "./App.css";
import GenerateRandomRGB from "./components/GenerateRandomRGB/GenerateRandomRGB";

function App() {
  return (
    <>
      <h1 style={{ backgroundColor: GenerateRandomRGB() }}>Estilos básicos</h1>
      <p className="importante">Parrafo con información importante</p> 
      <p>Parrafo con información no importante</p>
    </>
  );
}

export default App;
