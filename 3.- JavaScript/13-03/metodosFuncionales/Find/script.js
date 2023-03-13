"use strict";

let numeros = [1, 5, 8, 7, 14];

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
        nombre: "Pepe", 
        email: "pepe@pepe.com",
        edad: 17,
    }, 

    {
        nombre: "Pepe", 
        edad: 7,
    },
];


/* METODO FIND */

//Recibe un callback 
//Le pasa al callback cada elemento del array (y opcionalmente el indice)
//El callback debe devolver un booleano
//Deveuelve el primer elemento para el que el callback da true

let primerPar = numeros.find((num) => num % 2 === 0);
console.log(primerPar);

let userPepe = users.find((user) => user.nombre === "Pepe");
console.log(userPepe);

let userMaria = users.find((user) => user.nombre === "Maria" || user.nombre === "María"); /* Tenemos que ser estrictos a la  hora de evaluar los datos para no dar lugar a confusiones*/
console.log(userPepe);
