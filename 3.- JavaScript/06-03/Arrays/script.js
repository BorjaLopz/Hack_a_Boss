"use strict";

/* Dentro de un array puede haber cualquier tipo de elementos, booleanos, variables, numeros, undefined, null, objetos, arrays, funciones. Incluso varios tipos dentro de un mismo array. Se pueden mezclar entre ellos */

/* Creamos un array vacio */

let arrayVacio = new Array();
console.log(arrayVacio);

let arrayVacio2 = [];
console.log(arrayVacio2);

/* Creamos un array con elementos */ 

let colores = new Array("azul", "rojo", "verde", "amarillo");

console.log(colores);

/* SON PUNTEROS!!! */

/* Duplicar bien arrays */

let miArray = ["rojo", "verde"];

console.log(...miArray)

function echo(msg1, msg2)
{
    console.log(msg1);
    console.log(msg2);
}

echo(...miArray);

//Creamos un array nuevo con corchetes, metiendo dentro el contenido del array en lugar de meter dentro el array. Estamos usando el operador spread [...]
let clon = [...miArray];

console.log(clon);

clon[0] = "amarillo";
console.log(clon);
console.log(miArray);


/////////////////////////


/* Como recorrer arrays*/

//Con bucle for

let marcasCoches = ["ford", "citroën", "toyota"];

console.log(marcasCoches.length);

for(let i = 0; i < marcasCoches.length; i++)
{
    console.log(marcasCoches[i]);
}


/* Ejemplo */

let tartas = ["fresa", "chocolate", "queso"];
let personas = ["borja", "darynka", "alberto", "merche", "gonzalo"];

for(let i = 0; i < tartas.length; i++)
{
    console.log(tartas[i])
    for(let j = 0; j < personas.length; j++)
    {
        console.log(`Reparte un trozo de la tarta de ${tartas[i]} para ${personas[j]}`);
    }
}