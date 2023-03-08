"use strict";

//Metodos de array

let frutas = ["fresa", "platano", "pera", "manzana", "limon", "pera"];

//Length (propiedad)
//Devuelve la cantidad de elementos del array

console.log("Length");
console.log(frutas);
console.log(frutas.length);
console.log(frutas[frutas.length -1]);  //último elemento del array
console.log("");

/////////////////////

//indexOf(el, start*)
//Devuelve el indice del elemento buscado la primera vez que aparece

console.log("Index of:");
console.log(frutas.indexOf("pera"));
console.log(frutas.indexOf("kiwi"));    //Si le pasamos algo que no esta, nos devuelve -1
console.log(frutas.indexOf("fresa", 10));    //Lo mismo pasa si le pasamos un indice muy grande
let miFruta = "platano";
console.log(frutas.indexOf(miFruta));
console.log(frutas.indexOf("pera", 3)); //Nos devuelve, si existe la cadena en el array apartir del indice que le pasemos
console.log("");

/////////////////////

//lastIndexOf(el, start*)
//Lo mismo que el anterior pero buscando desde el final

console.log("Last index of:");
console.log(frutas.lastIndexOf("pera"));
console.log(frutas.lastIndexOf("kiwi")); //Si le pasamos algo que no esta, nos devuelve -1
console.log(frutas.lastIndexOf("fresa", 10)); //Lo mismo pasa si le pasamos un indice muy grande
let miFruta2 = "platano";
console.log(frutas.lastIndexOf(miFruta2));
console.log(frutas.lastIndexOf("pera", 3)); //Nos devuelve, si existe la cadena en el array apartir del indice que le pasemos
console.log("");

/////////////////////

//Push(el, el, ...*)
//Añade al final del array el elemento (o elementos) que le pasemos

//MODIFICA EL ARRAY

console.log("Push");
frutas.push("naranja", "mandarina");    //Añadimos al final las dos frutas 
console.log(frutas);    //Comprobamos que se han añadido
//Si hacemos un console.log(frutas.push("piña")), veremos el nuevo length
console.log(frutas.push("piña"));
console.log(frutas);
console.log("");

/////////////////////

//pop();
//Elimina del array y devuelve el ultimo elemento

//Modifica el array original
console.log("Pop");
console.log(frutas);
//Borramos el ultimo elemento y en este caso lo guardamos
let ultimaFruta = frutas.pop();
//Mostramos el ultimo elemento del array
console.log(ultimaFruta);
console.log(frutas);
console.log("");

/////////////////////

//Unshift(el, el ... *);
//Añade al principio del array el elemento (o elementos) que le pasemos
//Devuelve el length actualizado
//Modifica el array

console.log("Unshift");

console.log(frutas.unshift("pomelo", "mango"));
console.log(frutas);
console.log("");

/////////////////////

//Shift
//Elimina del array y devuelve el primero elemento
//Modifica el original y todos los indices

console.log("Shift");
let primero = frutas.shift();
console.log(primero);
console.log(frutas);
console.log("");

/////////////////////
//Reverse();
//Invierte el orden del array

console.log("Reverse");
console.log(frutas);
console.log(frutas.reverse());
console.log("");

/////////////////////

//Join(separador)
//Devuelve un string formado por la union de todos los elementos intercalando con el separador

console.log("Join");

console.log(frutas.join(", ")); //Lo separamos con ", "
console.log(frutas.join("-"));  //Aparecera un - como separador
console.log(frutas.join());     //El separador por defecto es ",", pero sin espacio
console.log(frutas.join(""));   //Si quisieramos que los uniera todos en un sola palabra larga  
console.log("");

/////////////////////

//Slice(start, end*);
//Devuelve, al igual que con los strings, una copia de un fragmento del array empezando por el start[incluido] hasta el end[sin incluir]

console.log("Slice");
console.log(frutas);
console.log(frutas.slice(4));   //Si no le pasamos end ira hasta el final
console.log(frutas.slice(0, 3));
console.log("");

/////////////////////

//Splice(start, cantidad, newItems*);
//Elimina del array y devuelve la cantidad de elementos indicada empezando en el start. 
//Le podemos pasar elementos que introducira en el "hueco" que ha dejado.

console.log("Splice")

//Eliminando elementos del array
console.log(frutas);
let eliminados = frutas.splice(1, 2);
console.log(frutas);

//Mostramos los elementos eliminados
console.log(eliminados);

//Le podemos pasar elementos que introducira en el "hueco" que ha dejado.

console.log("");
frutas.splice(4, 1, "granada", "melon");    //Eliminamos "platano"[pos 4] y desde la posicion 4 comienza a agregar los elementos que le hemos pasado "granada" y "melon"
console.log(frutas);

//Si no quisieramos eliminar nada, solamente tendriamos que pasarle en "cantidad" 0
console.log("");
console.log(frutas);
frutas.splice(5, 0, "tomate");  //Introducira el dato en esa posicion, desplazando al resto hacia la derecha
console.log(frutas);

