"use strict";

/* Método MAP */
//Recibe un callback
//El callback recibe cada elemento del array (y opcionalmente el index)
//Devuelve un nuevo array igual de largo que el original con el resultado del callback en cada posicion

let numeros = [4, 5, 8, 7, 14];

function cb (num, i)
{
    console.log(i);
    return num * 2;
}

let duplicados = numeros.map(cb);
console.log(duplicados);

let masIndice = numeros.map((num, i) => num + i);
console.log(masIndice);


//Un map solo hace un array de la misma longitud que el array original

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

console.log(users);

let email = users.map((usuario) => usuario.email);
console.log(email);
