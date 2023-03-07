"use strict";

////////////////////

/* Otra forma de recorrer los arrays. [FOR...OF]*/

/* 
    Sintaxis

    // El que ya sabemos
    for(let i = 0; i < variable; i++)
    {
        //codigo
    }

    //NUEVO

    for(let variable of nombreArray)
    {
        //codigo
    }
*/

let arrB = [1, 2, 3, 4]

function recorrerArray(_arr)
{
    for(let i = 0; i < _arr.length; i++)
    {
        console.log(_arr[i]);
    }
}

function recorrerArrayForOf(_arr)
{
    //Bucles de cosas que sean arrays o que se parezcan a los arrays
    for(let numero of _arr)
    {
        console.log(numero);
    }
}

// recorrerArray(arrB);
recorrerArrayForOf(arrB);
