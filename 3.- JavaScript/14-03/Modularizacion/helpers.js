"use strict";

function randomNum(min, max)
{
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function randomRGB()
{
    return `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`;
}

let palabraClave = "palabra";

function saludar(_nombre)
{
    console.log(`Hola ${_nombre}`);
}

/*
    Sintaxis:

    export 
    {
        nombreCosaQueQueramosExportar1, 
        nombreCosaQueQueramosExportar2, 
        nombreCosaQueQueramosExportar3, 
        nombreCosaQueQueramosExportar4, 
        nombreCosaQueQueramosExportar5, 
        
    }
*/
export 
{
    randomNum, 
    randomRGB, 
    palabraClave, 
    saludar
}