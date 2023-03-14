"use strict";

//JSON
//JavaScript Object Notation

let colores = ["azul", "rojo", "verde"]

let user = 
{
    nombre: "Borja", 
    edad: 26
};


//Convertimos a string

/* 
    Sintaxis: 

    JSON.stringify(objeto/array);
*/

let objJson = JSON.stringify(user);
console.log("objJson: " + objJson);

//Nos sale "undefined" ya que el string no tiene ninguna propiedad "nombre"
console.log(objJson.nombre);

let arrayJson = JSON.stringify(colores);
console.log("arrayJson: " + arrayJson);

//Nos sale "[" el primer corchete ya que lo que ha hecho es pasar todo el array a string, por tanto el primer caracter del string es "["
console.log(arrayJson[0])

//Convertir de JSON a JS

/*
    Sintaxis:

    JSON.parse(string);
*/

let objJS = JSON.parse(objJson);

//Ahora ya vemos como aparece en el log de la misma manera que cuando los creabamos nosotros
console.log(objJS);
//Ahora si tienen propiedades
console.log(objJS.nombre);

let arrayJS = JSON.parse(arrayJson);

//Ahora ya vemos como aparece en el log de la misma manera que cuando los creabamos nosotros
console.log(arrayJS);
//Ahora si podremos acceder a cada elemento del array
console.log(arrayJS[0]);
