"use strict";

//Event Delegation

let listaCompra = ["pan", "huevos", "tomates", "fruta"];

function marcar(e)
{
    console.log(e.target);  //elemento que lanza el evento
    console.log(e.currentTarget);   //elemento con el event listener

    let elemento = e.target;
    
    if(elemento.matches("li"))
    {
        elemento.classList.toggle("hecho");
    }
    // console.log(elemento.matches("li")) //Le pasamos un selector de CSS, todo lo concreto que queramos [body > header > nav > menu > ol > li]


}

let lista = document.querySelector("ul");
lista.addEventListener("click", marcar);


/*VERSION POCO EFICIENTE*/
// let lis = document.querySelectorAll("li");

// for (let li of lis)
// {
//     li.addEventListener("click", marcar);
// }