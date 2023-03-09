"use strict";

/*
### Ejercicio 3

A partir de la siguiente cadena de texto "Hola Mundo!":

- Reemplaza todas las letras 'a' por 'i' y muestralo.

- Muestra solamente la palabra "Mundo" por consola.
*/

let frase = "Hola Mundo!";

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

function guessIsInSentence(_char, _frase)
{
    let arrayLetras = _frase.split("");
    console.log("frase " + arrayLetras);
    let fraseEntera = arrayLetras.join("");
    console.log(fraseEntera);

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

function replaceLettersInSentence(_sentence)
{
    let char = askLetter();
    if(guessIsInSentence(char, _sentence))
    {
        console.log("Esta en la frase");
        return true;
    }

    console.log("No esta en la frase!");
    return false;
    
}

replaceLettersInSentence(frase);