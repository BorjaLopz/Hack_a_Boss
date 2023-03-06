"use strict";

//Declaracion de funciones

/* 
    Sintaxis:
    
    //Declaracion de la funcion

    function nombreFuncion(parametro1, parametro2, parametro3)
    {
        //Instrucciones de la funciones
    }

    //Llamada de la función

    nombreFuncion(argumento1, argumento2, argumento3);
*/

/* Ejemplo */
function saludoGenerico()
{
    console.log(`Hola`);
}

saludoGenerico();

function saludoPersonalizado(_nombre)
{
    console.log(`Hola ${_nombre}`);
}


saludoPersonalizado("Borja");

/////////////////////////

/* Crear funciones con argumentos por defecto */

function hornearBizcocho(_sabor = "chocolate")
{
    console.log(`Vamos a hornear un bizcocho de ${_sabor}`);
}

/* Como le hemos pasado un argumento por defecto, aunque llamemos a la funcion sin ningun parametro, le pasara el que le hemos metido por defecto */
hornearBizcocho();

/* Tambien podremos sobreescribir ese valor pasandole un valor cuando llamemos a la funcion */

hornearBizcocho("fresa");


/////////////////////////

//Return

/* 
Palabra clave para definir qué devuelve la funcion. Por norma general todas las funciones tendrá return (excepto las de DOM)
*/

function suma(_num1, _num2)
{
    return _num1 + _num2;
}

console.log(suma(4, 5));


function llamarAlTimbre()
{
    let respuesta = confirm("DING DONG");

    if(!respuesta)
    {
        llamarAlTimbre();
    }
}

// llamarAlTimbre();
console.log("He terminado");

function bucle(_inicio)
{
    for(let i = _inicio; i <= _inicio + 5; i++)
    {
        console.log(`Valor de i: ${i}`);
        if(i === 5)
        {
            console.log("break");
            break;
        }

        if(i === 10)
        {
            console.log("return");
            return;
        }

    }

    console.log("Fin de la función");
}

/* Break detiene el bucle pero termina la funcion */
bucle(3);

/* Mientras que return directamente termina la función */
bucle(8);