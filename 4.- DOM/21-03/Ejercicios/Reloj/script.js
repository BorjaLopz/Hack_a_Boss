"use strict";

/*
    1. Sin modificar el index.html, añadir un elemento que muestre la hora en tiempo real. 

    2. Debe tener formato HH:MM:SS (24H). Debe actualizarse cada segundo

    3. Los puntos de entre las horas y los minutos parpadean. 
*/

// let today = new Date();

// /* HACEMOS QUE SEAN SPAN PARA QUE SEAN ELEMENTOS DE LINEA*/

// let newHour = document.createElement("span");
// newHour.innerHTML = ("0" + today.getHours()).slice(-2);
        
// let newMinute = document.createElement("span");
// newMinute.innerHTML = ("0" + today.getMinutes()).slice(-2);

// let newSeconds = document.createElement("span");
// newSeconds.innerHTML = ("0" + today.getSeconds()).slice(-2);

// let newSeparator1 = document.createElement("span");
// newSeparator1.textContent = " : ";

// //Lo duplicamos ya que sino luego al colocarlo solo aparecerá uno
// let newSeparator2 = document.createElement("span");
// newSeparator2.textContent = " : ";


// //Seleccionamos el padre

// let body = document.querySelector("body");
// console.log(body);

// function getRealTime(_timeRefresh = 1000)
// {
//     setInterval(() => {

//         console.log(today.getSeconds());
//         newHour.innerHTML = ("0" + today.getHours()).slice(-2);
//         newMinute.innerHTML = ("0" + today.getMinutes()).slice(-2);
//         newSeconds.innerHTML = ("0" + today.getSeconds()).slice(-2);
        
//     }, _timeRefresh);

// }

// setInterval(() => {
//         console.log(today.getSeconds());

//         newHour.innerHTML = ("0" + today.getHours()).slice(-2);
//         newMinute.innerHTML = ("0" + today.getMinutes()).slice(-2);
//         newSeconds.innerHTML = ("0" + today.getSeconds()).slice(-2);
//         console.log(newHour, newMinute, newSeconds);
        
// }, 1000);

// body.append(newHour, newSeparator1, newMinute, newSeparator2, newSeconds);

let clock = document.createElement("p");
let separator = document.createElement("span");
separator.innerHTML = ":";

function displayTime()
{
    let date = new Date();
    let hour = ("0" + date.getHours()).slice(-2);
    let minutes = ("0" + date.getMinutes()).slice(-2);
    let seconds = ("0" + date.getSeconds()).slice(-2);


    //Siempre se hace cada segundo, por lo que cada tick de los puntos son 2 segundos en total. MEJORAR
    // toggleTransparency();
    makeAnimation();

    clock.innerHTML = hour;
    clock.append(separator);
    clock.innerHTML += minutes;
    clock.append(separator)
    clock.innerHTML += seconds;

    // console.log(clock);
}


function toggleTransparency()
{
    separator.classList.toggle("separator");
}

function makeAnimation()
{
    setInterval(toggleTransparency, 500);
}

setInterval(displayTime, 1000);

let body = document.querySelector("body");
// console.log(body);

clock.classList.add("clock");

body.append(clock);
