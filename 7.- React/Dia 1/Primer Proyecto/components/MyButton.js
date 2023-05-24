"use strict";

function MyButton() {
  const [liked, setLiked] = React.useState(0);

  if (liked) {
    return "¡React me esta gustando!";
  }

  // return React.createElement(
  //   "button",
  //   { onClick: () => setLiked(true) },
  //   "Pulsame"
  // );

  return (
    <div className="container">
      <button onClick={() => setLiked(true)}>Pulsame</button>
    </div>
  );
}

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(MyButton));
