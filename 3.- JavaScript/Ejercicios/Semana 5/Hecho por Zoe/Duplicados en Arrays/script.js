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

//Opcion 1
function eliminarDuplicados(arr)
{
    let newArray = [];

    for(let el of arr)
    {
        if(!newArray.includes(el))
        {
            newArray.push(el);
        }
    }
    return newArray;
}

//Opcion 2 Con Filter
function eliminarDuplicadosFilter(arr)
{
    // for(let i = 0; i < arr.length; i++)
    // {
    //     console.log(arr[i]);
    //     console.log(arr.indexOf(arr[i]), i);
    // }

    return arr.filter((el, i) => arr.indexOf(el) === i);
}

//Opcion 3 con set
function eliminarDuplicadosSet(arr)
{
    //el set eliminará los duplicados del array
    let set = new Set(arr);

    //con el operador spread [...] creamos un nuevo array
    return [...set];
}


// console.log(eliminarDuplicados(names));

// console.log(eliminarDuplicadosFilter(names));

console.log(eliminarDuplicadosSet(names));