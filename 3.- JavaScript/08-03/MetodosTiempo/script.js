"use strict";

//Timing Events

//setTimeout

/*
    Sintaxis:

    setTimeout(callback, tiempo)
*/

//Ejecuta el callback cuando pasa el tiempo que la hayamos indicado. Son milisegundos [ms]

function saludar()
{
    console.log("Buenas noches");
}

setTimeout(saludar, 2000);  //Tardará 2 segundos en ejecutarse

//Funcion con parametros que se ejecute en X segundos

function echo(msg)
{
    console.log(msg);
}

//setTimeout(echo("hola"), 3000); //Si lo dejamos asi, JS lee una llamada y lo hace de manera instantanea. NO estariamos haciendo un callback!

//Esta hace de callback
function intermediario()
{  
    echo("Adios!");
}
setTimeout(intermediario, 3000);
//Esto no tiene mucho sentido, asique vamos a mejorarlo


let intermedio = () =>{echo("Adios");}

//Por tanto esto lo podriamos dejar asi
setTimeout(() => {echo("Adioooos");}, 5000);
setTimeout(() => {echo("");
    
}, 6000);

//Por lo que cuando queramos usar callbacks lo mas facil va a ser emplear arrowFunctions


///////////////////////

/* COMO PARAR UN TIMEOUT */

//Para cancelar un timeOut este tendrá que tener un nombre
let timeout = setTimeout(() => {echo("Esto nunca se llega a ejecutar")
    
}, 2000);

//Cancelarlo
clearTimeout(timeout);


///////////////////////

//setInterval

/*
    Sintaxis:

    setInterval(callback, tiempo)
*/

//Ejecuta el callback cada vez que pasa el tiempo. Es un loop

let intervalo = setInterval(() => {echo("Loop");
    
}, 1000);

//Para parar un setInterval tambien tendra que tener nombre

setTimeout(() => {clearInterval(intervalo)
    
}, 3000);