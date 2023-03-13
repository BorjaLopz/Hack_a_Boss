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
//El callback debe devolver un numero positivo, negativo o 0
//En cada vuelta el callback recibe 2 elementos del array (a y b)
//Si devuelve <0, A va delante de B
//Si devuelve 0, se quedan como están
//Si devuelve >0, B va delante de A

let menorAMayor = numeros.sort((a, b) => a - b);
console.log(menorAMayor);

let mayorAMenor = numeros.sort((a, b) => b - a);
console.log(mayorAMenor);

//Sino le pasamos callback, lo ordenara de manera alfabetica, como si fueran strings

console.log(numeros.sort());
console.log(["bellota", "botella", "arbol", "casa"].sort());


function ordenarNombres(userA, userB)
{
    // console.log(userA.nombre, userB.nombre);
    if(userA.nombre > userB.nombre)
    {
        return 1;
    }
    else if(userA.nombre === userB.nombre)
    {
        return -1;
    }
    else
    {
        return 0;
    }
}
    
// ordenarNombres();
let usuariosEdad = users.sort(ordenarNombres);
console.log(usuariosEdad);
