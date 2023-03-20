"use strict";

//Atributos

let input = document.querySelector("input");
console.log(input);

//Obtenemos el valor actual de un atributo
//el.getAttribute(atributo)

console.log(input.getAttribute("value"));
console.log(input.getAttribute("type"));
console.log(input.getAttribute("required"));    //string vacio

//Comprobar si tiene un atributo
//atributo.hasAttribute("atributo");

console.log(input.hasAttribute("required"));    //true
console.log(input.hasAttribute("placeholder")); //false
console.log(input.hasAttribute("readonly"));    //false

//Definir el valor de un atributo
//atributo.setAttribute("atributo", valor)

input.setAttribute("value", "he cambiado de valor");    //Cambiamos el valor del contenido, en este caso le vamos a cambiar el texto
input.setAttribute("type", "password");     //Le vamos a cambiar el tipo de input que es, pasamos de texto a password. Se puede leer lo que pone, solo pone asteriscos

// input.setAttribute("disabled", true);

//Borrar atributos
//atributo.removeAttribute("atributo")

input.removeAttribute("required");

//////////////////////

//Atributo data-
//Podemos usar todos los metodos de arriba

let p = document.querySelector("p");

console.log(p);

console.log(p.dataset);

p.dataset.date = "19-03-2023"

console.log(p.dataset);

/* PROBAMOS A CAMBIAR EL TITLE */

let title = document.querySelector("title");
console.log(title.textContent);

title.textContent = "Cambio";
