"use strict";

/*
    1. Haz que al hacer click en el boton se muestre un alert que diga "Has hecho click en el botón".

    2. Cuando esto funcione, haz que sea imposible hacerle click. Cuando te acerques a él, el botón se movera de sitio. Nunca debe salirse del viewport. Además de moverse, cambiara su color de fondo, por uno aleatorio. 

    3. No se saldrá independientemente de su tamaño. https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect 

    4. No podrá acabar debajo del ratón por casualidad. 
*/

const trollButton = document.querySelector("button");
// console.log(trollButton);

const main = document.querySelector("main");
// console.log(main);

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

function moveTrollButton(e)
{   
    //Distancia maxima del viewport obtenida por window
    let maxWidth = window.innerWidth;
    let maxHeight = window.innerHeight;

    //Dimension del botón. 
    let buttonWidth = parseInt(trollButton.offsetHeight);
    let buttonHeight = parseInt(trollButton.offsetHeight);
    
    //Lo ubicamos de manera aleatoria entre el tamaño del viewport menos el tamaño del boton para evitar que salga fuera de la pantalla
    let x = Math.floor(Math.random() * (maxWidth - buttonWidth + 1) );
    let y = Math.floor(Math.random() * (maxHeight - buttonHeight + 1));
    
    //Le asignamos el valor tanto para top como left en px
    trollButton.style.left = x + "px";
    trollButton.style.top = y + "px";

    //Obtenemos la ubicacion actual del mouse, tanto en X como en Y. 
    let {x : mouseX, y : mouseY} = e; 
    let mouseYMax = y + buttonHeight;
    let mouseXMax = x + buttonWidth;

    //Comprobamos si la nueva posicion del boton esta entre los margenes que queremos
    if((mouseY > y && mouseY < mouseYMax) || (mouseX > x && mouseX < mouseXMax))
    {
        //Llamamos de nuevo a la funcion
        moveTrollButton(e);
    }

    //Cambiamos el color del background.
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