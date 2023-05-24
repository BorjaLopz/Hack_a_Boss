import { useState } from "react";

const obj = {
  hola: "mundo",
  numero: 10,
};

function MyButton() {
  const [liked, setLiked] = useState(false);

  if (liked) {
    return "React me esta gustando!";
  }

  return (
    <>
      <div className="container">
        <button onClick={() => setLiked(true)}>Púlsame</button>
      </div>
      <br />
      <div className="container_2">
        <button>{obj.hola} {obj.numero}</button>
      </div>
    </>
  );
}

export default MyButton;
