"use strict";

let h1 = document.querySelector("h1");

console.log(h1);
console.log(h1.style);

//Modificamos todo el CSS (en linea) de golpe. 
//Sustituye todos los estilos que tenga aplicados en linea, por el HTML o por JS
h1.style.cssText = "text-decoration: underline; text-shadow: 2px 2px 3px black;"

//Modificamos por atributo
//Se van sumando mientras no se repitan, si no se sobreescribiran. Gana el ultimo que se escriba

h1.style.color = "blueviolet";

//Lo unico que tenemos que tener en cuenta, en caso de que las propiedades tengan guiones, las escribiremos con el escritura de JS, lower camelCase, es decir, primera palabra en minuscula y se concatenan el resto de palabras con la primera letra en mayuscula. 
h1.style.textDecoration = "none"
h1.style.textDecoration = "line-through";