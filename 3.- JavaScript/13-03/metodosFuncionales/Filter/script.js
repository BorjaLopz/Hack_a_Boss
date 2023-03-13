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

/* Metodo Filter */

//Recibe un callback 
//Le pasa al callback  cada elemento del array (y opcionalmente el indice)
//El callback debe devolver un booleano
//Devuelve una copia del array original pero en el que solo estaran los elementos para los que el callback devuelva true

// let pares = numeros.filter((num) => num % 2 === 0);
// console.log(pares);

// let mayores6 = numeros.filter((num) => num > 6);
// console.log(mayores6);

// let adultos = users.filter((users) => users.edad > 18) ;
// console.log(adultos);

let menores = users.filter((usuario) => usuario.edad < 18);
console.log(menores);