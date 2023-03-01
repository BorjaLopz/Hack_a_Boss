"use strict";

//String normales 
//Se escriben entre comillas dobles (") o comillas simples (')
//No aceptan saltos de linea

let stringNormal = "Esto será \n un salto de linea";
console.log(stringNormal)

//Si se quieren introducir variables, hay que concatenar 
let nombre = "Borja"
let fraseConNombre = "Hola, me llamo " + nombre;

console.log(fraseConNombre);


//Template Strings
//Se escriben con comillas francesas (`) (al lado del + al lado del enter)

let templateString =`Esta es un template String`;

//Permiten saltos de linea
let templateStringSaltoDeLinea = `Esto es una template
con dos pedazo salto 
de linea`;
console.log(templateStringSaltoDeLinea);

//Permite inyectar expresiones (variables y código simple) con esta sintaxis ${expresión}
let variablePrueba = 5;
let stringPrueba = `Tenemos ${variablePrueba} pruebas`;
console.log(stringPrueba)

let fraseConNombreComillasFrancesas = `Hola, me llamo ${nombre}`;
console.log(fraseConNombreComillasFrancesas);