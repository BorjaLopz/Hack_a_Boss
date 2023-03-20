"use strict";

//Seleccionar elementos (modo antiguo)

// let pUnico = document.getElementById("unico");

// console.log(pUnico);

// //Varios elementos

// //Por etiqueta

// let parrafos = document.getElementsByTagName("p");

// console.log(parrafos);

// //Por clase

// let importantes = document.getElementsByClassName("importante");

// console.log(importantes);


//Seleccionar elementos (modo actual)

//Un elemento (el primero que encuentre)

    //ID
    let pUnicoModerno = document.querySelector("#unico")  //Seleccionamos con un selector, al igual que con CSS

    console.log(pUnicoModerno);

    let primerParrafo = document.querySelector("p");
    console.log(primerParrafo);

    let h1 = document.querySelector("h1");
    console.log(h1);

    //Clase
    let primerImportante = document.querySelector(".importante");
    console.log(primerImportante);

//Varios elementos
//Todos los que coincidan

let parrafos = document.querySelectorAll("p");
console.log(parrafos);


let importantes = document.querySelectorAll(".importante");
console.log(importantes);

//Selectores mas avanzados
let primerosHijosMain = document.querySelectorAll("main :first-child");
console.log(primerosHijosMain)

let siguienteAUnico = document.querySelector("#unico + p");
console.log(siguienteAUnico);

//Seleccionar elementos dentro de otro ya seleccionado

let section = document.querySelector("section");
console.log(section);

let pSection = section.querySelectorAll("p");

console.log(pSection);