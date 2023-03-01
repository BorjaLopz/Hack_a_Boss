"use strict";

function truthyOrFalsy(_valor)
{
    if (_valor) {
        console.log(`\"${_valor}\" es truthy`);
    } else {
        console.log(`\"${_valor}\" es falsy`);
    }
}

// Truthy & Falsy

//Falsy

//Parece false (en un condicional, cuenta como false). Convierte casi todo a booleano. 

//Cosas que son falsy, lo convertira a false en este booleano

//undefined, 0, null, "", NaN
//Lo que no tiene valor

console.log("Casos de truthy o falsy")
console.log("");


truthyOrFalsy(0);
truthyOrFalsy("");
truthyOrFalsy([]);
truthyOrFalsy({})



//Truthy

//Parece true (en un condicional, cuenta como true). Convierte casi todo a booleano.

//Cosas que son truthy, lo convertira a true en este booleano

//Strings con texto, numeros que no sean 0, arrays y objetos (incluso vacios)
//Todo lo que no sea falsy

truthyOrFalsy(1);
truthyOrFalsy("hola");
truthyOrFalsy([1, 2]);
truthyOrFalsy({})

