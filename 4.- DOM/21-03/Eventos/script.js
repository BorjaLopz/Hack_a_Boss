"use strict";

let titulo = document.querySelector("h1");
console.log(titulo);

let button = document.querySelector("button");
console.log(button);

let buttonMode = document.querySelector("#mode");
console.log(buttonMode);

let html = document.querySelector("html");

//Gestion antigua. Solo podemos adjudicar una funcion por cada llamada, lo que hace que si queremos volver a hacer algo similar cuando se pulse en una zona, tendremos que "sobreescribir". La manera para hacer que no tenga ningun evento, será igualandolo a null;
titulo.onclick = function() 
{
    console.log("Has hecho click en el h1");
};

titulo.onclick = null;

//Metodo moderno
//addEventListener

titulo.addEventListener("mouseover", () =>
{
    console.log("has pasado el raton por encima");
});

button.addEventListener("click", () =>
{
    console.log("has pulsado el boton");
})

//Podremos asociar distintas funciones en el mismo evento

function buttonClickHandler()
{
    console.log("otra funcion en el click");
}

button.addEventListener("click", buttonClickHandler);
button.addEventListener("dblclick", buttonClickHandler);

/*  La mejor ventaja es que luego podremos quitarle el evento que queramos por nombre */

button.removeEventListener("click", buttonClickHandler);

titulo.addEventListener("contextmenu", () =>
{
    console.log("Click derecho");
});


function toggleMode()
{
    html.classList.toggle("dark");

    if(html.classList.contains("dark"))
    {
        buttonMode.textContent = "🌞"
    }
    else
    {
        buttonMode.textContent = "🌙"
    }
}

buttonMode.addEventListener("click", toggleMode);