"use strict";

//Fragment

let listaCompra = ["pan", "huevos", "tomates", "fruta"];

//Tenemos una lista y queremos crear un li por cada elemento que hay en el array 


        /*  OPCION 1    */
let main = document.querySelector("main");
console.log(main);

//creamos un elemento ul
let lista = document.createElement("ul");

//Recorremos cada elemento de listaCompra creando por cada elemento un li
for(const el of listaCompra)
{
    let li = document.createElement("li");

    //Cambiamos su contenido por el del elemento del array
    li.textContent = el;

    lista.append(li);
}

main.append(lista);


        /*  OPCION 2    */
        
//Seleccionamos al padre (normalmente ya creado en el HTML)

let ol = document.querySelector("ol");

//Creamos un fragment

let fragment = document.createDocumentFragment();
console.log(fragment);

//Rellenamos el fragment
for(const el of listaCompra)
{
    let li = document.createElement("li");

    li.textContent = li;

    fragment.append(li);
}

//Añadir el fragment al padre
ol.append(fragment);