"use strict";

/*Crea un programa que imprima en la consola cada 5 segundos el tiempo que ha pasado desde la ejecución del mismo. Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días desde la ejecución.

Ejemplo de lo que debería imprimir en la consola:

...
Han pasado 0 días, 0 horas, 1 minuto y 20 segundos desde la ejecución del programa
Han pasado 0 días, 0 horas, 1 minuto y 25 segundos desde la ejecución del programa
...

Haz que el texto que imprima respete los singulares y plurales (ej: 1 minuto, 30 segundos).

Cuando tengas eso hecho crea una función que se encargue de parar el temporizador anterior después de un tiempo arbitrario.

Esta función recibirá 2 parámetros: un número y una letra: D, H, M o S (correspondiente a Días, Horas, Minutos o Segundos). Estos parámetros determinarán el tiempo que tardará la función en parar el temporizador inicial (ej. los parámetros 2, "M" harán que el temporizador se pare a los 2 minutos).

Cuando pare el temporizador debe mostrar un mensaje en la consola indicando que se paró.


*/

let totalSeconds = 0;

function updateTime()
{
    totalSeconds++;
}

function printTime()
{
    let seconds = totalSeconds % 60;
    let totalMinutes = totalSeconds / 60;

    let minutes = Math.floor(totalMinutes % 60);
    let totalHours = totalMinutes / 60;

    let hours = Math.floor(totalHours % 24);
    let days = Math.floor(totalHours / 24);

    console.log(`Han pasado ${days} dia${plural(days)}, ${hours} hora${plural(hours)}, ${minutes} minuto${plural(minutes)}, ${seconds} segundo${plural(seconds)}.`);
}

function plural(_num)
{
    return _num === 1 ? "" : "s";
}

let updateTimeInterval = setInterval(updateTime, 1000);

let prinTimeInterval = setInterval(printTime, 5000);


function stop(_num, _letter)
{
    switch(_letter)
    {
        case "D":
            _num *= 24;
        case "H":
            _num*=60;
        case "M":
            _num*=60;   
        case "S":
            _num*=1000; //Lo pasamos a milisegundos
    }

    setTimeout(stopIntervals, _num);
}

function stopIntervals()
{
    clearInterval(updateTimeInterval);
    clearInterval(prinTimeInterval);

    console.log("Terminamos los intervalos!");
}


stop(20, "S");