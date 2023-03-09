"use strict";

/*
Comprueba si la letra que indica el usuario se encuentra en alguna de las siguientes palabras:

"sandia", "platano", "melon"

La aplicación no debe distinguir entre mayúsculas y minúsculas para encontrar la letra.
*/

let Frutas = ["sandia", "platano", "melon"];
console.log(Frutas);

function guessIsInSentence(_char, _frase)
{
    let fraseEntera = _frase.join("");

    console.log(`Vamos a buscar el caracter \"${_char}\" en la frase \"${fraseEntera}\"`);

    for(let i = 0; i < fraseEntera.length - 1; i++)
    {
        if(_char === fraseEntera[i])
        {
            return true;
        }
    }

    return false;
}

function askLetter()
{   
    let char_;

    //Repetimos el pedir el caracter por si el caracter que nos pasa esta vacio
    do
    {
        char_ = prompt("Introduce un caracter: ");
        console.log("Char: " + char_)

    }while(char_ === "")

    return char_;
}

// console.log(getSentence(Frutas));

// let userChar = askLetter();

// console.log(guessIsInSentence(userChar, Frutas));


/////////////////////////////

/* SOLUCION DE ZOE */

function letraPalabra(palabra, letra)
{
    return palabra.indexOf(letra) !== -1;

    //Nos devuelve -1 en caso de que no este
    // return palabra.includes(letra);
}

function letraArrayPalabras(array)
{
    let letra = prompt("Introduce una letra: ");

    for(let fruta of Frutas)
    {
        console.log(letraPalabra(fruta, letra));
        if(letraPalabra(fruta, letra))
        {
            return true;
        }
    }
    return false;
}

console.log(letraArrayPalabras(Frutas))