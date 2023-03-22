"use strict";

/*
    1. Haz que al hacer click en el boton se muestre un alert que diga "Has hecho click en el botón".

    2. Cuando esto funcione, haz que sea imposible hacerle click. Cuando te acerques a él, el botón se movera de sitio. Nunca debe salirse del viewport. Además de moverse, cambiara su color de fondo, por uno aleatorio. 

    3. No se saldrá independientemente de su tamaño. https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect 

    4. No podrá acabar debajo del ratón por casualidad. 
*/

const boton = document.querySelector("button");
// console.log(boton);


function handleButtonClick()
{
    alert("Has hecho click en el botón!");
}

boton.addEventListener("click", handleButtonClick);

function handleButtonMouseOver(e)
{
    let {height, width} = boton.getBoundingClientRect();
    console.log(height, width);
    
    let topMax = window.innerHeight - height;
    let leftMax= window.innerWidth - width;

    boton.style.top = randomMax(topMax) + "px";
    boton.style.left = randomMax(leftMax) + "px";

    let {x, y} = boton.getBoundingClientRect();
    let {x: mouseX, y : mouseY} = e;
    let mouseYMax = y + height;
    let mouseXMax = x + width;

    if((mouseY > y && mouseY < mouseYMax) || (mouseX > x && mouseX < mouseXMax))
    {
        handleButtonMouseOver(e);
    }

    
    boton.style.background = randomRGB();
}

function randomMax(_max)
{
    return Math.floor(Math.random() * (_max + 1));
}

function randomRGB()
{
    return `rgb(${randomMax(255)}, ${randomMax(255)}, ${randomMax(255)})`
}

boton.addEventListener("mouseover", handleButtonMouseOver);

