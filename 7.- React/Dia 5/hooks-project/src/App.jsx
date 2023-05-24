import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const buttonHandleAdd = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    console.log(number);
  })
  
  const buttonHandleSubtract = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <h1>El número es</h1>
      <h2>{number}</h2>
      <button onClick={buttonHandleAdd}>Aumentar</button> {""}
      <button onClick={buttonHandleSubtract}>Disminuir</button>
    </>
  );
}

export default App;
