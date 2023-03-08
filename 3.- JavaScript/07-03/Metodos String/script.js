"use strict";

//MÉTODOS DE STRING

let miString = "Hola mundo!";

//length (en realidad es una propiedad)
//Devuelve la longitud del string

console.log(miString.length);

console.log("hola".length > miString.length); //¿Qué string es más largo?

//toLowerCase()
//Devuelve el string en minusculas
//No modifica el original

console.log(miString.toLowerCase());

//toUpperCase()
//Devuelve el string en mayúsculas
//No modifica el original

console.log(miString.toUpperCase());

////TIP: para comparar strings sin que importen las mayúsculas, nos aseguramos de que estén igual con alguno de estos dos métodos

console.log(miString.toLowerCase() === "hola mundo!");

console.log("");

//indexOf(substr, start*)
//Devuelve el indice del primer caracter del substr la primera vez que aparece el substring en el string
//Si no aparece, devuelve -1
//Si le ponemos start, empezará a buscar a partir de ese índice
console.log("INDEX OF:");

console.log(miString.indexOf("mun"));
console.log(miString.indexOf("o"));
console.log(miString.indexOf("f"));

console.log(miString.indexOf("o", 2)); //se salta la primera O que está en el indice 1

console.log("");

//lastIndexOf(substr, start*)
//Exactamente lo mismo que indexOf pero empezando a buscar por el final
//Aun así lo que devuelve es la posición del primer caracter
console.log("LAST INDEX OF:");

console.log(miString.lastIndexOf("mun"));
console.log(miString.lastIndexOf("o"));
console.log(miString.lastIndexOf("f"));
console.log(miString.lastIndexOf("o", 8)); //se salta la última O que está en el indice 9
console.log("");

/////////////////////

//repeat(num)
//Devuelve un nuevo string formado por el original repetido el numero de veces indicado 

console.log("Repeat")
console.log(miString.repeat(3));
console.log("");

/////////////////////

//replace(substr, newSubstr)
//Devuelve un nuevo string sustituyendo el substr por el newSubstr la primera vez que aparece

console.log("Replace")
console.log(miString.replace("a", "o"));
console.log(miString.replace("mundo", "gente"));
//Tambien podremos usarlo para borrar cualquier cadena de texto, le pasamos como newSubstr una cadena vacia la intercambiara por ella. Solamente lo hara para la primera aparición de la cadena de texto que le pasemos como substr
console.log(miString.replace("mundo",""));
//No modifica el string original
console.log(miString);
console.log("");


/////////////////////

//replaceAll(substr, newSubstr)
//Devuelve un nuevo string sustituyendo el substr por el newSubstr todas las veces que aparece

console.log("Replace All")
console.log(miString.replaceAll("mundo", "gente"));
console.log(miString.replaceAll("o", "a")); //Ahora si modifica todas las veces que aparece la letra "o"

//Tambien podremos usarlo para borrar cualquier cadena de texto, le pasamos como newSubstr una cadena vacia la intercambiara por ella
console.log(miString.replaceAll("o",""));
console.log("");


/////////////////////
//split(separador[opcional]);
//Divide el string por el separador y devuelve un array con los fragmentos de la frase. [El separador lo elimina]

console.log("Split")
console.log(miString.split(" "));
console.log(miString.split("o"));
console.log(miString.split());  //Array de un elemento que es el string entero. Sin pasarle separador

//Si le pasamos como separador un string vacio, nos devolvera un array con todas los caracteres por separado de la frase. 
console.log(miString.split(""));
console.log("");


/////////////////////
//slice(start, end*)
//Devuelve el fragmento del string que va del indice start[incluido] al end[no incluido].

console.log("Slice")
//Si no le ponemos end, va desde el start hasta el final de la frase. 
console.log(miString.slice(3));
console.log(miString.slice(3, 8));

