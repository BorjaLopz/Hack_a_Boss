"use script";

let camiseta = 
{
    colores: ["azul", "negro", "rojo"], 
    talla: "M", 
    precio: 9.99,
}

//Con FOR

/* 
    Primero tendremos que pasar el objeto a array
        1. Array de claves
        2. Array de valores
        3. Array de entradas

*/

//Array de claves
let claves = Object.keys(camiseta);
// console.log(claves);

//Array de valores
let valores = Object.values(camiseta);
// console.log(valores);

//Array de entradas
//Dentro de cada array se divide como [0]property [1]keys
let entradas = Object.entries(camiseta);
// console.log(entradas);

for(let i = 0; i < claves.length; i++)
{
    let clave = claves[i];

    console.log(clave);

    console.log(camiseta[clave]);
}
console.log("");
console.log("CLAVE");
console.log("");

for(const clave of claves)
{
    console.log(clave);
    console.log(camiseta[clave]);
}

console.log("");

//Si no nos interesan las claves, solo los valores

for(const valor of valores)
{
    console.log(valor + " :valor");
}

console.log("");

///////////////////////////

/*
    FOR ... IN ...

    for(const key in objeto)
    {

    }
*/

for(const key in camiseta)
{
    console.log(key + " prueba");
}

function pruebaFunction(obj1)
{
    for(const key in obj1)
    {
        console.log(key + " aaa");
    }
}

console.log("");

pruebaFunction(camiseta);




