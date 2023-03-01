"use strict";

//Scope

let variable = "hola"; //Scope global. Se puede acceder a ella desde cualquier parte del codigo

if(true)
{
    //scope local
    let prueba = 1;

    //Aqui podremos usar variables globales ya declaradas y las varibales locales de este if ya declaradas
}

// Fuera del scope del anterior if, no podremos usar las variables locales declaradas ahí. Por tanto la siguiente linea dará error.
// console.log(prueba);