"use strict";

//Funciones Asincronas (ASYNC... AWAIT...)

/*
    Simplemente tendremos que añadir la palabra reservada async delante de la funcion

    async function nombreFunction() 
    {
        //codigo
    }
*/
let por2Promesa = function(num)
{
    return new Promise((resolve) => 
    {
        resolve(num * 2)
    });
}

/* TIENE QUE ESTAR EL HTML CON type="module" */
let test = await por2Promesa(5);
console.log(test);

async function asincrona()
{
    // let total = 0;

    // let num1 = 4;

    // total += num1;

    // console.log(total);

    // let num2 = 5;

    // total += num2;

    // console.log(total);

    //Con la function promesa y la ventaja de las async function

    let num = 2;

    //Lo que hara es esperar a tener ese numero con la palabra reservada await para luego poder continuar con el resto del codigo
    num = await por2Promesa(num);
    console.log(num);

    num = await por2Promesa(num);
    console.log(num);

    num = await por2Promesa(num);
    console.log(num);

    num = await por2Promesa(num);
    console.log(num);

    num = await por2Promesa(num);
    console.log(num);

    num = await por2Promesa(num);
    console.log(num);

    num = await por2Promesa(num);
    console.log(num);

    return num;

}

// asincrona();

/* CON THEN QUEDARIA ASI */

// por2Promesa(2).then((num) => {
//     console.log(num);
//     por2Promesa(num).then((num) => {
//         console.log(num);
//         por2Promesa(num).then((num) => {
//             console.log(num);
//             por2Promesa(num).then((num) => {
//                 console.log(num);
//                 por2Promesa(num).then((num) => {
//                     console.log(num);
//                     por2Promesa(num).then((num) => {
//                         console.log(num);
//                         por2Promesa(num).then((num) => {
//                             console.log(num);
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });


//Podemos tambien llamar funciones asincronas dentro de otras

async function asincrona2()
{
    let numero = await asincrona();
    console.log("El numero es: ", numero);

    return "esto es lo que devuelve asincrona 2";
}

// asincrona2();


//Si queremos usar el return de una funcion asincrona fuera de una funcion asincrona, tendremos que usar .then obligatoriamente

asincrona2().then((res) => console.log(res));

/*
    TODO LO QUE TENGAMOS EN LAS FUNCIONES ASINCRONAS TENEMOS METERLO DENTRO DE UN TRY YA QUE COMO SON PROMESAS, PUEDEN FALLAR Y ASI PODEMOS DETENER EL ERROR
*/