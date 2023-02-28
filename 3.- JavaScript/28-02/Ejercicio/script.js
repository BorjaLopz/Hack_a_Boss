"use strict";

// EJERCICIO 1
// Crea una variable con tu nombre y otra con tu edad
// Sacar por consola la frase "Me llamo XXX y tengo XX años." Usando variables

const miNombre = "Borja";
const miEdad = 26;
console.log("Ejercicio 1");
console.log("Me llamo " + miNombre + " y tengo " + miEdad + " años.")

// EJERCICIO 2

console.log("Ejercicio 2");
let horaDia = 24;
let horaRealOrdenador = new Date().getHours();

// console.log(horaRealOrdenador);

console.log("Hora del dia: " + horaRealOrdenador);

if(horaRealOrdenador < 8 || horaRealOrdenador >= 20)
{
    console.log("Buenas noches")
}
else if(horaRealOrdenador >= 8 && horaRealOrdenador < 15)
{
    console.log("Buenos dias")
}
else
{
    console.log("Buenas tardes")
}