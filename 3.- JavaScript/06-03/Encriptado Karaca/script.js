"use strict";

/*
* Enunciado: Crea una función que sea capaz de encriptar y desencriptar texto
* utilizando el algoritmo de encriptación de Karaca 
* (debes buscar información sobre él).
*/

/*
Input: "apple"

Step 1: Reverse the input: "elppa"

Step 2: Replace all vowels using the following chart:

a => 0
e => 1
i => 2
o => 2
u => 3

// "1lpp0"
Step 3: Add "aca" to the end of the word: "1lpp0aca"

Output: "1lpp0aca"

Example
Encrypt("banana") ➞ "0n0n0baca"

*/

/* Creamos nuestro diccionario con los valores que queramos*/ 

let dictionary = {
    "a": 0,
    "e": 1,
    "i": 2,
    "o": 3,
    "u": 4
}

// let palabra = prompt("Por favor, introduce una palabra");
let palabra = "apple";

// console.log(palabra)

function reverseString(_word)
{
    // let splitWord = _word.split("");

    // let reverseArray = splitWord.reverse();

    // let joinArray = reverseArray.join("");

    ////////////

    return _word.split("").reverse().join("");
}

// console.log(reverseString("hello"));


function changeVowels(_word)
{
    for(let i = 0; i < _word.length; i++)
    {
        for(let key in dictionary)
        {
            if(_word[i] === key)
            {
                // console.log(`${_word[i]} ahora tendra el valor de ${dictionary[key]}.`);
                let palabra = _word.replace(_word[i], dictionary[key]);
                _word = palabra;
            }
        }

    }
    return _word;
}

function addAca(_word)
{
    return _word + "aca";
}

function Karaca(_word)
{
    return (addAca(changeVowels(reverseString(_word))));
}

console.log(Karaca("vamos a probar si lo hace con frases"));
console.log(Karaca("banana"));
console.log(Karaca("karaca"));
console.log(Karaca("burak"));
console.log(Karaca("alpaca"));


