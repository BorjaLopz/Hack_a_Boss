"use strict";

//Ejercicio 1

//Crea una funcion que reciba un string y devuelva true si es palindromo y false si no lo es

let frase1 = "Arriba la birra";
let frase2 = "Dabale arroz a la zorra el abad";
let frase3 = "Esto no va a ser un palindromo";

function convertString(_string)
{
    //Pasamos a minusculas
    let fraseMinusculas = _string.toLowerCase();

    //Separamos la frase y la convertimos en un array con sus elementos separados por sus espacios
    let arraySinEspacios = fraseMinusculas.split(" ");

    //Unimos la frase con los elementos del array
    let fraseSinEspacios_ = arraySinEspacios.join("");

    return fraseSinEspacios_;
}

function reverseString(_string_)
{

    //Separamos el string por letras y lo convertimos en un array
    _string_ = _string_ .split("");

    //Le damos la vuelta al array
    _string_ = _string_.reverse();

    //Unimos todo el array en un solo string sin ningun espacio
    _string_ = _string_.join("");

    /*
        Es equivalente a:
        return _string_.split("").reverse().join("");
    */

    return _string_;
}

function isPalindrome(_string)
{
    //Convertimos la frase a minusculas y sin espacios
    let frasePalindromo = convertString(_string);

    //Creamos una variable y guardamos la frase al reves
    let reverse = reverseString(frasePalindromo);

    //Comprobamos si ambas frases son iguales o no
    if(frasePalindromo === reverse)
    {
        return true;
    }

    return false;
}

console.log(isPalindrome(frase1));  //true
console.log(isPalindrome(frase2));  //true
console.log(isPalindrome(frase3));  //false