"use strict";

let articles = document.querySelectorAll("article");

let bubblesButton = document.querySelector("#bubbles button");
let noBubblesButton = document.querySelector("#no-bubbles button");

function handleAdClick()
{
    window.open("https://www.google.es");
}


for(const article of articles)
{
    article.addEventListener("click", handleAdClick);
}

//En este caso la funcion nos permite cerrar el "anuncio" pero nos abrira la pagina automaticamente ya que no esta el e.stopPropagation();
function handleBubblesClick(e)
{
    let ad = e.target.parentElement;

    ad.remove();
}

bubblesButton.addEventListener("click", handleBubblesClick);


//En este caso la function lo que hace es cerrar el "anuncio" pero no nos abre la pagina web asociada. 
function noHandleBubblesClick(e)
{
    e.stopPropagation();
    let ad = e.target.parentElement;

    ad.remove();
}

noBubblesButton.addEventListener("click", noHandleBubblesClick);