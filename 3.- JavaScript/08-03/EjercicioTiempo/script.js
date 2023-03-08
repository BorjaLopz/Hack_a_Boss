"use strict";

//Ejercicio 1

//Crea un temporizador que muestre por consola "DING!" al cabe de 10 segundos

setTimeout(() => {console.log("DING!")
    
}, 10000);

//Ejercicio 2

//Crea un cronometro que avise cada vez que pasan 10 segundos

let intervalo = setInterval(() => {console.log("Han pasado ya 1 segundos");
    
}, 1000);


//Ejercicio 3

//Crea un temporizador que pare el cronometro anterior al cabo de 1 minuto

setTimeout(() => {clearInterval(intervalo)
    
}, 60000);