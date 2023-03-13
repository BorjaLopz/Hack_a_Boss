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
        nombre: "Zoe", 
        email: "zoe@zoe.com",
        edad: 17,
    }, 

    {
        nombre: "borja", 
        email: "borja@borja.com",
        edad: 35,
    }, 

    {
        nombre: "juan", 
        email: "juan@juan.com",
        edad: 27,
    }, 

    {
        nombre: "ana", 
        email: "pepe@pepe.com",
        edad: 17,
    }, 

    {
        nombre: "Pepe", 
        edad: 7,
    },
];


/* METODO SORT */

//Recibe un callback 
//El callback debe devolver un booleano
//El callback (cb) recibe en cada vuelta un elemento del array
//En cuanto el CB devuelve true, el metodo devuelve true
//Es decir, dice si el callback es true para algun elemento

let algunMayorQue8 = numeros.some((num) => num > 8);
console.log(algunMayorQue8);

let algunMayorQue4 = numeros.some((num) => num < 4);
console.log(algunMayorQue4);

let algunPepe = users.some((user) => user.nombre === "Pepe");
console.log(algunPepe);

let algunBerto = users.some((user) => user.nombre === "Berto");
console.log(algunBerto);