"use strict";

//Objeto Evento

const boton = document.querySelector("button");
const lis = document.querySelectorAll("li");
const enlace = document.querySelectorAll('a[href^="http"');

function handleButtonClick(e)
{
    console.log(e);

    if(e.altKey)
    {
        console.log("Estabas pulsando alt");
    }

    if(e.shiftKey)
    {
        console.log("Estabas pulsando shift");
    }

    if(e.ctrlKey)
    {
        console.log("Estabas pulsando control");
    }
}

boton.addEventListener("click", handleButtonClick);


function handleLiClick(e)
{
    const li = e.target;

    li.style.color = randomRGB();
}

for(const li of lis)
{
    li.addEventListener("click", handleLiClick);
}

function randomRGB()
{
    return `rgb(${randomMax(255)},${randomMax(255)},${randomMax(255)})`;
}

function randomMax(_num)
{
    return Math.floor(Math.random() * (_num + 1));
}


//////////////////////////////

//Eventos de teclado

function handleKeyPress(e)
{
    //Se puede reutilizar, ya que es el mismo evento para todas las letras. 

    // console.log(e);
    // console.log(e.code, e.key, e.keyCode);  //Lo suyo es usar el code. Nos da igual si esta en mayusculas o no

    if(e.code === "KeyA")
    {
        console.log("Has pulsado la A mayuscula");
    }
}

document.addEventListener("keypress", handleKeyPress);


//////////////////////////////

//Cancelar comportamiento por defecto

function handleLinkClick(e)
{
    //Esto hace que el comportamiento por defecto que tiene dicho evento, se anule. Por ejemplo 
    e.preventDefault();

    const link = e.target;
    const linkURL  = link.getAttribute("href");

    let continuar = confirm(`Estas apunto de visitar ${linkURL}. ¿Desea continuar?`);

    if(continuar)
    {
        window.open(linkURL);
    }
}

for(const link of enlace)
{
    link.addEventListener("click", handleLinkClick);
}

function handleRigthClick(e)
{
    e.preventDefault();

    alert("NO COPIES");
}

document.addEventListener("contextmenu", handleRigthClick);