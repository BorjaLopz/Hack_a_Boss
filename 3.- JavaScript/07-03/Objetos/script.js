"use strict";

///////////////////

/*
    Son estructuras de datos compuestos por entradas
    A su vez, las entradas son pares clave valor  
    Son DICCIONARIOS
*/

//Crear objetos vacias
let objetoVacio = {};

console.log(objetoVacio);

//Crear objeto con contenido

let Camiseta = {
    color: "azul", 
    talla: "M", 
    precio: 9.99, 
};

console.log(Camiseta);

let objFrutas = 
{
    1: "manzana", 
    2: "platano", 
    3: "pera",
    0: "fresa",
};

console.log(objFrutas);

let user = 
{
    nombre: "Borja", 
    email: "borja.lpzdz5@gmail.com",

    mascota: 
    {
        nombre: "Tortu",
        especie: "tortuga",
    },

    saludar: () => 
    {
        console.log(`Bienvenido ${user.nombre}!`);
    },
};

//Acceder a los valores de un objeto
//Sintaxis de punto (obj.clave)

console.log(user.nombre);
console.log();

console.log(Camiseta.precio);


//Llamar a un metodo 
user.saludar();

//Sintaxis de corchetes
console.log(objFrutas[2]);
console.log(Camiseta["talla"]);

///////////////////////
//Añadir un valor a un objeto

user.ciudad = "Rivas - Vaciamadrid";
console.log(user);


//Modificar un valor de un objeto
user.nombre = "Gonzalo";
console.log(user);

/* Esto da problemas ya que la forma de modificar y de añadir es la misma; Por lo tanto podremos modificar algo que ya esté y sea importante*/

//////////////////////
//Borrar valor de un objeto

delete user.email;
console.log(user);

////////////////////
//Objetos dentro de objetos
console.log(user.mascota.nombre);
console.log(user.mascota.especie);

