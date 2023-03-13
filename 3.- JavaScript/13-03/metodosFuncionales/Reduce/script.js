"use strict";

let numeros = [4, 5, 8, 7, 14];

function cb (num, i)
{
    console.log(i);
    return num * 2;
}

let users = 
[   
    {
        usuario: "Zoe", 
        email: "zoe@zoe.com",
        edad: 17,
    }, 

    {
        usuario: "borja", 
        email: "borja@borja.com",
        edad: 35,
    }, 

    {
        usuario: "juan", 
        email: "juan@juan.com",
        edad: 27,
    }, 

    {
        usuario: "pepe", 
        email: "pepe@pepe.com",
        edad: 17,
    }, 

    {
        usuario: "pepe", 
        edad: 7,
    },
];


/* Metodo REDUCE */ 

//Recibe un callback y opcionalmente un inicializador
//El callback recibe el acumulador y cada elemento del array
//Devuelve un unico elemento: lo que quede en el acumulador al final

//En cada vuelta, guarda en el acumulador lo que devuelva el callback

function reducer(acc, current)
{
    console.log(acc);
    return acc + current;
}

let total = numeros.reduce(reducer);

console.log(total);
