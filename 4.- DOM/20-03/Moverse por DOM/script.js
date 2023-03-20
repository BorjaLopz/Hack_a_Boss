"use strict";

//Moverse por el DOM

let lista = document.querySelector("ul");

console.log(lista);

// //Nodos hijos

// let nodosHijos = lista.childNodes;
// console.log(nodosHijos);

// //Primer hijo nodo
// let primerNodo = lista.firstChild;
// console.log(primerNodo);

// //Ultimo hijo nodo
// let ultimoNodo = lista.lastChild;
// console.log(ultimoNodo);

// //Nodo hermano anterior
// let nodoAnterior = lista.previousSibling;
// console.log(nodoAnterior);

// //Nodo hermano siguiente
// let nodoSiguiente = lista.nextSibling;
// console.log(nodoSiguiente);

////////////////////////

//Sin nodos

let hijos = lista.children;
console.log(hijos);

//Primer elemento hijo
let primerHijo = lista.firstElementChild;
console.log(primerHijo);

//Ultimo elemento hijo
let ultimoHijo = lista.lastElementChild;
console.log(ultimoHijo);

//Hermano anterior
let hermanoAnterior = lista.previousElementSibling;
console.log(hermanoAnterior);

//Hermano siguiente
let hermanoSiguiente = lista.nextElementSibling;
console.log(hermanoSiguiente);

//Padre
let padre = lista.parentElement;
console.log(padre);