"use strict";

//Crear y Añadir cosas al HTML

//document.createElement("etiqueta");

let newP = document.createElement("p"); //Creamos el elemento vacio, sin ningun tipo de contenido
console.log(newP);

let newImage = document.createElement("img");
console.log(newImage);

let newLi = document.createElement("li");
console.log(newLi);

//Añadir contenido


newP.textContent = "Parrafo generado con JS";

newImage.setAttribute("src", "https://images.unsplash.com/photo-1531131141161-ecdfb1858dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");

newImage.setAttribute("alt", "Flores que parecen abejas");

newLi.textContent = "Entre el 3 y el 4";

//Añadir elementos al DOM

//Hay que seleccionar al padre

let main = document.querySelector("main");

let lista = document.querySelector("ul");

/*  Añadimos al final del padre */

//main.appendChild(newP); //Metodo antiguo, solamente podemos meter un elemento por cada llamada. Puede ser elemento o un nodo, pero solo uno

// main.append(newP, "Esto es un nodo de texto");  //Si metemos un nodo directamente, luego no podremos seleccionarlo con los metodos actuales, tendriamos que usar un selector de nodos. Poco optimo

main.append(newP, newImage);

/*  Añadimos al principio   */

main.prepend(newP); //En caso de que el elemento ya existiera en otra posicion, este modificará su posición segun se lee el script de arriba hacia abajo. 

main.prepend(newP, newImage);


/*  Meter algo entremedias de varios elementos  */

//padre.insertBefore("nuevoElemento", "elementoSiguiente");
//Ademas de seleccionar al padre, tendremos que seleccionar el elemento que queremos que quede despues del que vamos a introducir

let li4 = document.querySelector("li:nth-child(4)");

lista.insertBefore(newLi, li4);

let elementoBorrar = document.querySelector("#borrar");

console.log(elementoBorrar);

//Modo antiguo: 
//Metodo del padre, le pasamos el elemento que queremos borrar.
//padre.removeChild("elemento")
// elementoBorrar.parentElement.removeChild(elementoBorrar);

//Modo moderno:
elementoBorrar.remove();