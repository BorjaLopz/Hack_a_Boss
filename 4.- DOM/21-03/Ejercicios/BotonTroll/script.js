"use strict";

/*
    1. Haz que al hacer click en el boton se muestre un alert que diga "Has hecho click en el botón".

    2. Cuando esto funcione, haz que sea imposible hacerle click. Cuando te acerques a él, el botón se movera de sitio. Nunca debe salirse del viewport. Además de moverse, cambiara su color de fondo, por uno aleatorio. 

    3. No se saldrá independientemente de su tamaño. https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect 

    4. No podrá acabar debajo del ratón por casualidad. 
*/

const trollButton = document.querySelector("button");
console.log(trollButton);

const main = document.querySelector("main");
console.log(main);

//Funcion que mostrara un alert cuando pulsamos en el boton
function showAlert()
{
    //Mostramos alert
    alert("Has hecho click en el botón. ");

    //Borramos la funcion actual del eventListener
    trollButton.removeEventListener("click", showAlert);

    //Añadimos la nueva funcionalidad
    trollButton.addEventListener("mouseover", moveTrollButton);
}

//Añadimos un eventListener que llamará a la función que queramos. 
trollButton.addEventListener("click", showAlert);

let buttonX = trollButton.offsetLeft;
let buttonY = trollButton.offsetTop;
let mouseX;
let mouseY;


function moveTrollButton()
{   
    let maxWidth = window.innerWidth;
    let maxHeight = window.innerHeight;
    let buttonWidth = parseInt(trollButton.offsetHeight);
    let buttonHeight = parseInt(trollButton.offsetHeight);
    
    let x = Math.floor(Math.random() * (maxWidth - buttonWidth + 1) );
    let y = Math.floor(Math.random() * (maxHeight - buttonHeight + 1));
    
    trollButton.style.left = x + "px";
    trollButton.style.top = y + "px";

    buttonX = trollButton.offsetLeft;
    buttonY = trollButton.offsetTop;

    // console.log("buttonX:", buttonX);
    // console.log("buttonY:", buttonY);
    // console.log("mouseX:", mouseX);
    // console.log("mouseY:", mouseY);
    calculateDistance(buttonX, buttonY, mouseX, mouseY);
    
    trollButton.style.background = randomRGB();
}


function randomRGB()
{
    return `rgb(${randomMax(255)},${randomMax(255)},${randomMax(255)})`;
}

function randomMax(_num)
{
    return Math.floor(Math.random() * (_num + 1));
}

function calculateDistance(_btnX, _btnY, _mseX, _mseY)
{
    let y = _mseY - _btnY;
    let x = _btnX + _mseX;

    let ysquared = y * y;
    let xsquared = x * x;


    console.log("y:", y);
    console.log("ysquared:", ysquared);
    console.log("x:", x);
    console.log("xsquared:", xsquared);

    let distance = Math.sqrt(ysquared + xsquared);

    console.log("distance: ", distance)

    console.log("");
}

function logMousePos()
{
    mouseX = event.clientX;
    mouseY = event.clientY;
    calculateDistance(buttonY, buttonX, mouseX, mouseY);
    // console.log("Y", event.clientY);
    // console.log("X",event.clientX);
    // console.log("");
    // console.log("X: ", buttonX);
    // console.log("Y: ", buttonY);
    // console.log("");
}

document.addEventListener("mousemove",logMousePos)