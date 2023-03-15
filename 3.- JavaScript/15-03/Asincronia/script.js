"use strict";

//Asincronia

// function main()
// {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//     });

//     setTimeout(() => {
//         console.log(3)
//     }, 0);

//     console.log(4);
// }

// main();


////////////////////
//Promesas
/*
    Las promesas tienen 3 estados posibles: pending, fullfilled, rejected

    Pending: La promesa sigue trabajando en resolverse

    Fulfilled: La promesa ha terminado y devuelve un valor

    Rejected: La promesa falla con un error
*/

function main()
{
    let test;

    setTimeout(() => {
        test = "patata";
        setTimeout(() => {
            test += "a";
            setTimeout(() => {
                test+="b";   
                setTimeout(() => {
                    test += "c"  ;
                })
            })
        })
    }, 0);
}

// console.log(main)
main();

let numPromise = new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve(Math.floor(Math.random()  * 11));
    }, 1000));

console.log(numPromise);

//THEN
//Recibe un callback que se ejecuta cuando la promesa pasa a fulfilled

/*
    Esto sirve para que cuando la promesa termine, el resultado que nos devuelve lo utilizaremos para lo que queramos. En este caso esperamos a que la promesa termine en 1 segundo y le añadiremos al resultado [4] una unidad. Resultado = 5
*/

numPromise.then((num) => {
    console.log(num);
    let newNum = numPromise;
    newNum.then((newNum) => {
        console.log(newNum);
        num += newNum;
        console.log("num: " + num);
    });
});


//CATCH
//Recibe un callback cuando la promesa pasa a estado rejected [la promesa falla con error]

/* Esta promesa tiene un 50% de probabilidades de sacar un error [reject] */
let promesa2 = new Promise((resolve, reject) =>
{
    if(Math.random() < 0.5)
    {
        resolve("Todo bien");
    }
    else
    {
        reject("Hubo un problema");
    }
});

// console.log(promesa2);
// promesa2.then((res) => console.log(res)).catch((res) => console.error(res));

/*
    Si la promesa se resuelve bien, podremos utilizar su valor en el .then; En caso de que no se resuelva bien, podremos utilizar su valor en el .catch [normalmente error]

    Es como si tuvieramos un pagaré: si alguien te debe 5€ no puedes pagar con ese debe, ya que no tienes nada. Si te los da, guay, sino te toca pegarle
*/

//FINALLY
//Recibe un callback que se ejecuta siempre despues del then o del catch 
//El callback no recibe nada

console.log(promesa2)
promesa2
    .then((res) => console.log(res))
    .catch((res) => console.error(res))
    .finally(() => console.log("Esto se ejecutara siempre"));
