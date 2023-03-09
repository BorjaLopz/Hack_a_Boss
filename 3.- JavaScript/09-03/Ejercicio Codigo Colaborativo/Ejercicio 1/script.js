"use strict";

/* Dada la siguiente cadena de texto.

"Vendo Opel Corsa"

Corta la cadena de texto por las posiciones que indique el usuario por prompt y muestralo por consola.

*/

let frase = "Vendo Opel Corsa";
let frase2 = "Vendo Toyota 2";

function askNumberToSlice(_startNumber, _finishNumber, _frase)
{   
    // console.log(_frase.length -1 );

    if(_finishNumber === 0)
    {
        _finishNumber = _frase.length;
    }

    let cortarFrase = _frase.slice(_startNumber, _finishNumber);

    console.log(cortarFrase);

    return cortarFrase;
}

console.log(frase);

// let posicionInicial = Number(prompt(`Introduce por donde quieres cortar la cadena inicial \"${frase}\"`));

// let posicionFinal = Number(prompt(`Introduce por donde quieres cortar la cadena final \"${frase}\"`));

// console.log(posicionInicial);
// console.log(posicionFinal);

// askNumberToSlice(posicionInicial, posicionFinal, frase);


/////////////////////////////

/* SOLUCION DE ZOE */

let string = "Vendo Opel Corsa";

function contarString(string)
{
    let start = prompt(`Introduce un numero del 0 al ${string.length}`);

    let end = prompt(`Introduce un numero del 0 al ${string.length}`);

    let trozo = string.slice(start, end);

    console.log(trozo);
}

contarString(string);

