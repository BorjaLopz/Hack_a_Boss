"use strict";

//Modularizacion
//Para hacerlo primero tendremos que añadir esta linea en el HTML 
//    <script src="main.js" type="module"></script>

//Importo por defecto
/*
    Sintaxis:
    import nombreQueQueramos from "archivoOrigen.extension"
*/

import aleatorio from "./aleatorio.js"

console.log(aleatorio());

/* Importamos todo el archivo */
// import helpers from "./helpers.js"

// console.log(helpers.randomNum(0, 10));

/* 
    Pero de esta manera tenemos que estar haciendo todo el rato helpers.nombreQueNecesitemos 
    Para poder mejorarlo, podremos hacer un destructuring a la hora de importar el fichero, quedaria tal que asi:

    import {cosa1, cosa2, cosa3} from "fichero.js"
*/

import { saludar, randomRGB, palabraClave } from "./helpers.js";

console.log(palabraClave);

saludar("Borja");

console.log(randomRGB());