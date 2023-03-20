"use strict";

/* Promesa */
let por2Promesa = function(num)
{
    return new Promise((resolve) => 
    {
        resolve(num * 2)
    });
}


async function functionAsincrona1()
{
    let numero = await por2Promesa(2);

    console.log(numero);

    return numero;
}

async function functionAsincrona2(_numero)
{
    console.log(_numero + " function asincrona 2")
}

functionAsincrona1().then((res) => console.log("Numero: ", res));

let numeroAsincrono = functionAsincrona1().then((respuesta) => respuesta);

functionAsincrona2(numeroAsincrono);


async function getCharName() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character/1");
        let character = await response.json();
        return character;
    } catch (error) {
        return `Hubo un error: ${error}`;
    }
}

//Almacenamos el valor de la función en una variable
const result = getCharName().then();

// Lo mostramos en consola
console.log(result);

