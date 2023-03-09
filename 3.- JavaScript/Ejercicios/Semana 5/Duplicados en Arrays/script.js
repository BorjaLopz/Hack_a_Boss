"use strict";

/*
Edita el archivo index.js para crear una función que reciba un Array como parámetro y retorne otro Array con los contenidos del Array inicial pero eliminando los duplicados.

Ejecuta esa función pasándole como parámetro el Array names e imprime en la consola el resultado.

Debería imprimir esto:
[
    'A-Jay', 
    'Manuel',
    'Eddie', 
    'Su',
    'Reean', 
    'Zacharie',
    'Tyra',  
    'Rishi',
    'Arun',  
    'Kenton'
]

*/

const names = [
    "A-Jay",
    "Manuel",
    "Manuel",
    "Eddie",
    "A-Jay",
    "Su",
    "Reean",
    "Manuel",
    "A-Jay",
    "Zacharie",
    "Zacharie",
    "Tyra",
    "Rishi",
    "Arun",
    "Kenton",
];

function deleteDuplicatedItems(_array)
{
    //Array auxiliar vacia al que añadiremos los nombres sin repetir
    let aux = [];

    for(let i = 0; i < _array.length; i++)
    {
        
        if(!isStringInArray(_array[i], aux))
        {
            aux.push(_array[i]);
        }
    }

    //Devolvemos el array al que le hemos añadido los nombres sin repetir
    return aux;

}

//Comprobamos si el string que le pasamos [_string] esta en el array que le pasamos [_array]
function isStringInArray(_string, _array)
{
    for(let i = 0; i < _array.length; i++)
    {
        if(_array[i] === _string)
        {
            return true;
        }
    }
    return false;
}

console.log(deleteDuplicatedItems(names));