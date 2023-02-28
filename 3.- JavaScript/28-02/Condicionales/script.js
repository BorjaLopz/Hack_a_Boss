"use strict";

// CONDICIONALES

//if

/*
    Sintaxis
    if(condicion)
    {
        //Codigo que se ejecuta si es verdad
    }
*/

//Ejemplo

let edad = 20;

if(edad >= 18)
{
    console.log("Es mayor de edad");
}
else
{
    console.log("No es mayor de edad") ;
}


//SWITCH

/*
    Sintaxis
    switch(variable)
    {
        case valor1:
            //Trozo de cogido que se ejecuta si pasa esto
            break;
        case valor2: 
             //Trozo de cogido que se ejecuta si pasa esto
            break;

        default: 
            //Codigo que se ejecuta si ningun valor coincide
            break;
    }

*/

let animal = "gato"

switch(animal)
{
    case "perro":
        console.log("Guau");
        break;
    case "gato":
        console.log("Miau");
        break;
    default:
        console.log("No se que sonido hace");
        break;
}

switch (animal) {
    case "perro":
    case "gato":
        console.log("Tiene 4 patas");        
        break;
    case "periquito":
        console.log("Tiene 2 patas");        
        break;
    case "serpiente":
        console.log("Tiene 0 patas");        
        break;
    default:
        console.log("No se que animal es ese :/");
        break;
}

const foo = +prompt("Introduce un numero: ");

console.log(foo)