"use strict";

//Callbacks

//Son funciones que pasamos como argumento a otra, para que esa otra la llame. No la llamamos nosotros de manera directa.

//Ejemplo

function sumar(a, b)
{
    return a + b;
}

function restar(a, b)
{
    return a - b;
}

function calcular(a, b, _operacion) //En este caso operacion va a ser una funcion
{
    return _operacion(a, b);

}

console.log(calcular(3, 5, sumar));     //8
console.log(calcular(3, 5, restar));    //-2

//con arrow function una multiplicacion quedaria asi:

console.log(calcular(3, 8, (a, b) => a * b)); //24