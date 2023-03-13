"use strict";

//Math

//Propiedades


/* PI */

console.log("PI: " + Math.PI);
console.log("");

/* RAIZ CUADRADA */

console.log("Raiz cuadrada: " + Math.sqrt(9));
console.log("");

/* REDONDEO */

//Redondea hacia el entero que mas se acerca. Si se acerca a los dos por igual, redondea hacia arriba

console.log("Round [4.51]: " + Math.round(4.51));
console.log("Round [4.49999999999999]: " + Math.round(4.49999999999999));
console.log("Round [4.5]: " + Math.round(4.5));
console.log("");

/* FLOOR */

//Redondea siempre hacia abajo

console.log("Floor [4.99999]: " + Math.floor(4.99999));
console.log("Floor [5]: " + Math.floor(5));
console.log("Floor [5.1]: " + Math.floor(5.1));
console.log("");

/* CEIL */

//Redondea siempre hacia arriba

console.log("Ceil [4.0000000000001]: " + Math.ceil(4.0000000000001));
console.log("Ceil [4]: " + Math.ceil(4));
console.log("");

/* REDONDEAR DECIMALES */


console.log("Redondear numero decimales");
let numBruto = 4.253687;
console.log(numBruto);
//1. Multiplicamos segun la cantidad de decimales que queramos redondear 
//[Por ejemplo queremos hacer un redondeo hasta las centesimas, por tanto tendremos que multiplicar 1 * 1 seguido de tantos ceros comos número de decimales que queramos. 1 * 100 en nuestro caso]

let numMultiplicado = numBruto * 100;
console.log(numMultiplicado);

let numMultiplicadoRedondeado = Math.round(numMultiplicado);
console.log(numMultiplicadoRedondeado);

let redondeado = numMultiplicadoRedondeado / 100;
console.log(redondeado);
console.log("");

/* NUMEROS ALEATORIOS */

//Generador de aleatorios de 0 a un maximo
function aleatorioMax(max)
{
    return Math.random() * max;
}

//De 0 a 1
let numeroRandom = Math.random();
console.log(numeroRandom);

//Para conseguir numeros aleatorios de 0 a cierto rango, tendremos que multiplicar el numero aleatorio por la cantidad que queramos (por ejemplo 100);

let numeroRandom100 = Math.floor(numeroRandom * 100);
console.log("NumeroRandom de 0 a 100: " + numeroRandom100);


let numeroRandom20 = Math.floor(numeroRandom * 20);
console.log("NumeroRandom de 0 a 20: " + numeroRandom20);

//Generador de numeros aleatorios de un minimo a un maximo
function aleatorioMinMax(min, max)
{
    return (Math.random() * (max - min)) + min;
}

console.log("Aleatorio entre 5 y 10: " + aleatorioMinMax(5, 10));
console.log("Aleatorio entre 16 y 517: " + aleatorioMinMax(16, 517));