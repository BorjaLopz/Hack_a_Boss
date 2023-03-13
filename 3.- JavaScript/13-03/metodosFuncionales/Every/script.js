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
        nombre: "fulanito", 
        edad: 7,
    },
];


/* METODO SORT */

//Recibe un callback 
//El callback debe devolver un booleano
//El cb recibe en cada vuelta un elemento del array
//En cuanto el cb devuelve FALSE, el metodo devuelve FALSE
//Es decir, dice si el callback es true para todos los elementos

let todoPositivos = numeros.every((num) => num>0);
console.log(todoPositivos)

let todosPares = numeros.every((num) => num % 2=== 0);
console.log(todosPares);

let todosAdultos = users.every((user) => user.edad >= 18);
console.log(todosAdultos);

let todosTienenNombre = users.every((user) => user.nombre);
console.log(todosTienenNombre);

let todosTienenEmail = users.every((user) => user.email);
console.log(todosTienenEmail);
