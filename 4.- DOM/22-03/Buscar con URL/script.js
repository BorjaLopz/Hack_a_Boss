"use strict";

//URL search params

let params = new URLSearchParams();

console.log(params);

let paramsCosas = new URLSearchParams("color=rojo&estado=nuevo");

for(const param of paramsCosas)
{
    console.log(param);
}

//Leer los parametros actuales

console.log(window.location);