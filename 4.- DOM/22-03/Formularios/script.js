"use strict";

//FORMULARIOS I

//Seleccionar elementos del formulario

const boton = document.querySelector("button");

let [form] = document.forms;

console.log(form);
console.log(form.elements);

let { name, terminos, s, m, l, provincia } = form.elements;

console.log(name, terminos, s, m, l, provincia);

//Leer valor del campo
//el.value*

console.log(name.value);

function leerCampos(e)
{
    //Evitamos que mande el formulario y asi recargue la pagina
    e.preventDefault();

    //Leer campos normales
    console.log(name.value)

    
}

boton.addEventListener("click", leerCampos);
