"use strict";

//Ejercicio 1

//Crea una funcion que reciba un numero y muestre por consola si es un numero par o un numero impar

console.log("Ejercicio 1");

function esPar(_numero)
{
    if(!isNaN(_numero))
    {
        if (_numero % 2 === 0) {
        console.log(`El número ${_numero} es par.`);
        } else {
        console.log(`El número ${_numero} es impar.`);
        }
    }
    else
    {
        console.log(`\"${_numero}\" no es un número!`);
    }
    
}

esPar(3);
esPar(128712);
esPar("j");

// Si directamente introducimos prompt, podremos teclear por pantalla el numero que queramos
// esPar(prompt());