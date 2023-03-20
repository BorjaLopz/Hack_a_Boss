"use strict";

let parrafos = document.querySelectorAll("p");
console.log(parrafos);

//TEXT CONTENT

//Leer
let contenidoText = parrafos[0].textContent;

console.log(contenidoText);

//Escribir
parrafos[0].textContent ="Este parrafo fue modificado con <strong>Javascript</strong>"; //No generamos la etiqueta del strong ya que textContent lo unico que admite es texto plano

console.log(contenidoText); //Aunque hayamos modificado el contenido, este no se guarda en la variable como podemos ver aqui


//INNER HTML

//leer
let contenidoHTML = parrafos[1].innerHTML;

console.log(contenidoHTML);

//Escribir

parrafos[1].innerHTML = `Este parrafo fue modificado con <strong>JavaScript</strong>`;


//////////////////////////////

//Modificamos el ID

let unico = document.querySelector("#unico");
console.log(unico);

unico.setAttribute("id", "unique"); //Le cambiamos el nombre del ID
console.log(unico);

unico.outerHTML = `<div id="unico">Antes era un p, ahora es un div</div>`;

//Si se cambia el outerHTML, el elemento deja de seer el mismo (se quita del DOM) y se pone otro en su lugar
console.log(unico);