// Hoisting
// Afecta a las variables y a las funciones.
// No afecta a let y const

console.log(saludar);

function hola() {
  console.log("Hola mundo");
}

const adios = () => {
  console.log("Adios mundo");
};

var saludar = "Hola mundo";