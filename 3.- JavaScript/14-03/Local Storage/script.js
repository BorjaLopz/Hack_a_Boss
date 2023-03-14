"use strict";

//Dentro del Live Server -> F12 -> Aplicación -> Almacenamiento Local -> http://107.0.0.1:5501/
//Cada pagina web tendrá su propio almacenamiento local
//Por ejemplo google aparecé: https://www.google.es/ y https://ogs.google.es/

//Guardamos datos primitivo [NO 🚫OBJETOS🚫 - NO 🚫ARRAYS🚫]
/* 
    Sintaxis:

    localStorage.setItem("nombre", valor);
        "nombre"-> Tiene que estar siempre entrecomillado

    //Si usamos setItem y ya existe, sobreescribirá el valor de dicha variable

*/

//GUARDAR DATOS PRIMITIVOS

localStorage.setItem("numeroPrueba", 5);
localStorage.setItem("stringPrueba", "Hola Mundo!");

function setNum(num)
{
    localStorage.setItem("num", num);
}


//LEER DATOS PRIMITIVOS

/*
    Sintaxis:

    localStorage.getItem("nombre");
*/

console.log("numeroPrueba: " + localStorage.getItem("numeroPrueba"));
console.log("stringPrueba: " + localStorage.getItem("stringPrueba"));
console.log("num: " + localStorage.getItem("num"));

//Si no existe dicha variable nos devolverá null
console.log("null:" + localStorage.getItem("num2"));


/* 
    Si probamos con datos que no son primitivos [arrays y objetos]
*/

let colores = ["azul", "rojo", "verde"]

let user = 
{
    nombre: "Borja", 
    edad: 26
};

localStorage.setItem("arrayColores", colores);
localStorage.setItem("usuario", user);

let array = localStorage.getItem("arrayColores");
let usuario = localStorage.getItem("usuario");

//De primeras parece que el array funciona, ya que nos saca por pantalla toda la información que hay en el array original
console.log("arrayColores: " + array);

//Sin embargo si queremos sacar determinada posición [en nuestro caso la primera [0]] solamente nos devuelve el primer caracter, ya que lo que ha hecho ha sido convertir todo el array a string
console.log("arrayColores: " + array[0]);


//Ya vemos que con objetos no funciona ya que nos devuelve [object object]
console.log("Usuario: " + usuario);

//➡Si queremos guardar objetos y arrays tenemos que usar JSON


                    /* GUARDAR */
//En 2 pasos
let coloresJSON = JSON.stringify(colores);
localStorage.setItem("arrayColores", coloresJSON);

//En 1 paso
localStorage.setItem("objeto", JSON.stringify(user));


                    /* LEER */

//En 2 pasos
let arrStorage = localStorage.getItem("arrayColores");
let parsedArr = JSON.parse(arrStorage);

console.log(parsedArr)

//En 1 paso

let parsedObj = JSON.parse(localStorage.getItem("objeto"));

console.log(parsedObj);

/* 
    ESTO ES UTIL PARA PODER GUARDAR PEQUEÑOS DATOS DEL USUARIO EN EL NAVEGADOR 

    Por ejemplo preguntar el nombre de usuario la primera vez que se mete en la web para guardarlo y asi poder saludarle cuando vuelva a iniciar sesion y demas cositas
*/

