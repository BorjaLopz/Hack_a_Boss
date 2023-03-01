"use strict";

//Ejercicio 1

//Muestra por consola una cuenta atras de 20 a 0

console.log("EJERCICIO 1");
let countdownStart = 20;
let countdownEnd = 0;
console.log("Cuenta atra desde " + countdownStart + " hasta " + countdownEnd);

for(let i = countdownStart; i >= countdownEnd; i--)
{
    console.log(i);
}

console.log("");


//Ejercicio 2

//Muestra por consola un patrón como este: 0, 10, 20, 30, 40... El patrón finalizara al llegar a 100 incluida.

console.log("EJERCICIO 2");

console.log("Sacar todos los multiplos de 10 de 0 a 100");

for(let i = 0; i <= 100; i++)
{
    if(i % 10 === 0 && i !== 0)
    {
        console.log(i)
    }
}
