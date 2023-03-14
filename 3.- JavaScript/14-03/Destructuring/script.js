"use strict";

//Destructuring

//De array

let colores = ["rojo", "verde", "azul", "violeta", "naranja"];

// let primero = colores[0];
// let [primero] = colores; // === let primero = colores[0];
// console.log(primero);

//Si quisieramos asignar varias variables a la vez
// let [primero, segundo] = colores;
// console.log(primero, segundo);

//Si quisieramos saltarnos algun elemento
// let [primero, , tercero] = colores;
// console.log(primero, tercero);

/* ...resto */
// let [, segundo, tercero, ...loDemas] = colores;

// console.log(segundo, tercero, loDemas);


//De objeto

/* 
    En objetos tambien podremos meter nuevas propiedades que ya tenemos definidas, podemos direcamente ponerle el nombre de la variable de esta manera JS lo entendera para poner el nombre de la variable como nombre de la propiedad y el valor de la variable como valor de la propiedad. 
*/

let prueba = "prueba"
let dni = "51129885B";
let user =
{
    nombre: "Borja", 
    apellido: "López",
    email: "borja.lpzdz5@gmail.com",
    edad: 26,
    prueba, 
    dni, 
    ciudad: "Madrid"
};

// let nombre = user.nombre;
// let apellido = user.apellido;
// let edad = user.edad;

// console.log(nombre, apellido, edad);

let { nombre, email} = user;
console.log(nombre, email);

console.log("");

let {edad, ciudad, ...otrosDatos} = user;
console.log(edad, ciudad, otrosDatos)

////////////////////////////////

//Directamente en los parametros

function saludar(user)
{
    let nombre = user.nombre;
    let apellido = user.apellido;
    console.log(`Hola ${nombre } ${apellido}`);
}

function saludarDestructuring({nombre, apellido})
{
    console.log(`Hola ${nombre } ${apellido}`);
}

saludar(user);
saludarDestructuring(user);

////////////////////////////////

