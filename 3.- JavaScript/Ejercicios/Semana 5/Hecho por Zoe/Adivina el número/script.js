"use strict";

/*
Edita el fichero script.js y modifica la funcion quizpara cuando se ejecute que haga lo siguiente:

Genere un número aleatorio entre 0 y 100 y lo guarde en una variable, este número será el que el usuario deba adivinar.

Muestre una ventana de diálogo tipo prompt que pida al usuario que introduzca un número entre 0 y 100

Si el número introducido es igual al generado en el punto 1, aparecerá en pantalla una ventana de diálogo tipo alert que informará al usuario que ha ganado; si no, el alert indicará si el número introducido es mayor o menor al que tiene que adivinar y dará una nueva oportunidad.

El usuario tendrá 5 oportunidades para acertar, si no lo consigue, aparecerá un alert indicando que ha perdido.

*/


function quiz(min, max, tries)
{
    let pass = random(min, max);
    console.log(pass);

    for(let i = 0; i < tries; i++)
    {

        let userName = +prompt(`Introduce un numero entre el ${min} y ${max}: \nTienes ${tries - i} para adivinarlo!`)
        
        if(userName === pass)
        {
            alert(`Corecto! El numero era ${pass}. Enhorabuena!`)
            return;
        }
        else
        {
            alert(`El numero buscado es ${pass > userName ? "mayor" : "menor"} que ${userName}`)
        }

    }

    alert(`El numero era ${pass}. Has perdido`);
}

quiz(0, 100, 5);

function random(min, max)
{
    return Math.floor(Math.random() * (max + 1 - min) + min);
}