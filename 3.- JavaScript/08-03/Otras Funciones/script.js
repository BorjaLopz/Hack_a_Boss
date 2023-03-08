"use strict";

//Declaracion de función

/* Podemos llamar a la función incluso antes de crearla */
saludar();

function saludar()
{
    console.log("buenos dias!");
}

saludar();

//Expresion de función

/* Aqui no podremos llamarla antes de crearla */
//arr[0]();

let arr = 
[
    function ()
    {
        console.log("Esto es una funcion anonima en un array");
    },
];

arr[0]();

/* Aqui no podremos llamarla antes de crearla */
//func();

let func = function ()
{
    console.log("Esto es una expresion de función");
};

func();


////////////////////////

// Arrow Function

/*
    Sintaxis: con return explicito:

    (parametros*) => 
    //codigo
    return resultado;

*/

/*
    Sintaxis: con return implicito:

    (parametros*) => resultado
    //Como no tiene llaves, directamente devolverá resultado
*/

/* EJEMPLOS */

//Con return explicito

let saludarArrow = () => 
{
    console.log("hola desde saludarArrow");

    return true;
}

saludarArrow()

//Con return implicito

let sumar = (a, b) => a + b;

let sumarExplicito = (a, b) => 
{
    console.log(`estamos sumando ${a} + ${b}`);
    return a + b;
}

console.log(sumar(4, 5));

console.log(sumarExplicito(4, 5));