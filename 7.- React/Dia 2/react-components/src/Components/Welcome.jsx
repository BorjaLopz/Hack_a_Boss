/* Primera forma de hacer componentes (Preferida por Cristobal) */

function Welcome(props) {
  return <h1>Bienvenid@ {props.name} a mi pagina en React!</h1>;
}

export default Welcome;

/* Segunda forma de hacer componentes en arrow function */

// const HolaMundo = () => {
//   return ''
// }

// export default HolaMundo
