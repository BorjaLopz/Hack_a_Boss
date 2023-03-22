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

let body = document.createElement("body");
console.log(body);

let h1 = document.createElement("h1");
body.append(h1);

function updateClock()
{
    let now = new Date();

    let hours = format(now.getHours());
    let minutes = format(now.getMinutes());
    let seconds = format(now.getSeconds());

    h1.textContent = `${hours}:${minutes}:${seconds}`;

    console.log(hours, minutes, seconds);

}

function format(_num)
{
    if(_num < 10)
    {
        return "0" + _num;
    }
}

updateClock();