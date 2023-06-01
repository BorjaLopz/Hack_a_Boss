import "./App.css";
const { randomColor } = require("./utils/helpers.js");

function App() {
  return (
    <>
      {/* <h1>Hola</h1> */}
      <h1 style={{ background: randomColor() }}>Hola mundo desde REACT</h1>
      <p className="importante">Parrafo importante</p>
    </>
  );
}

export default App;
