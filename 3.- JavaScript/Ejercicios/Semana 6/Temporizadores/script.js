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

//Temporizador cada ${timer} segundos
const timer = 5000;

//Letras validas
const validLetters = ["D", "H", "M", "S"];

//Class Timer
class CTimer
{

    constructor(dias, horas, minutos, segundos, resetHoras = 24, resetMinutos = 60, resetSegundos = 60)
    {
        this.dias = dias;
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
        this.resetHoras = resetHoras;
        this.resetMinutos = resetMinutos;
        this.resetSegundos = resetSegundos;
    }

    /* Setters */
    setDias(_value)
    {
        this.dias = _value;
    }

    setHoras(_value)
    {
        this.horas = _value;
    }

    setMinutos(_value)
    {
        this.minutos = _value;
    }

    setSegundos(_value)
    {
        this.segundos = _value;
    }

    /* Getters */
    getDias()
    {
        return this.dias;
    }

    getHoras()
    {
        return this.horas;
    }

    getMinutos()
    {
        return this.minutos;
    }

    getSegundos()
    {
        return this.segundos;
    }

    getResetHoras()
    {
        return this.resetHoras;
    }

    getResetMinutos()
    {
        return this.resetMinutos;
    }

    getResetSegundos()
    {
        return this.resetSegundos;
    }

    //Devolvemos el reset de cada unidad segun su ID
    getResetByID(_id)
    {
        switch(_id)
        {
            case 0: 
                return 1;
                // break;
            case 1: 
                return this.getResetHoras();
                // break;
            case 2: 
                return this.getResetMinutos();
                // break;
            case 3: 
                return this.getResetSegundos();
                // break;
        }
    }

    //Funcion que añade tiempo en cada tick
    addTimer(_timer)
    {
        this.segundos += (_timer / 1000);
        this.setSegundos(this.segundos);
        return this.segundos;
    }

    //Comprobamos los reset para ajustar tiempo
    checkLimits()
    {
        if(this.segundos === this.resetSegundos)
        {
            this.segundos = 0;
            this.setSegundos(this.minutos)
            this.minutos += 1
            this.setMinutos(this.minutos);
        }

        if(this.minutos === this.resetMinutos)
        {
            this.minutos = 0;
            this.setMinutos(this.minutos);
            this.horas += 1
            this.setHoras(this.horas);
        }

        if(this.horas === this.resetHoras)
        {
            this.horas = 0;
            this.setHoras(this.horas);
            this.dias += 1
        }

    }

    //Log del tiempo que ha pasado formateado
    logTimer()
    {
        console.log(`Han pasado ${this.dias} ${this.dias === 1 ? "día" : "días"}, ${this.horas} ${this.horas === 1 ? "hora" : "horas"}, ${this.minutos} ${this.minutos === 1 ? "minuto" : "minutos"}, ${this.segundos} ${this.segundos === 1 ? "segundo" : "segundos"} desde la ejecución del programa.`)

    }   

    //Paramos el tiempo con su intervalo, y el tiempo en segundos
    stopTimer(_intervaloName, _time)
    {
        // console.log(_time);
        setTimeout(() => 
    {
        clearInterval(_intervaloName);
        console.log(`El temporizador se ha parado correctamente. `)
    }, _time * 1000);
    }

}

/* STOP TIMER */

function getInformationToStop(_num, _char)
{
    try
    {   
        //Comprobamos si es un numero o no
        if(isNaN(_num))
        {
            throw new Error(`\"${_num}\" No es un numero`);
        }

        //Comprobamos si es un caracter valido. 
        if(isCharacterValid(_char))
        {
            throw new Error(`\"${_char}\" No es una letra valida`);
        }

        return convertToSeconds({ valor: _num, unidad: _char.toUpperCase() });

    }catch(e)
    {
        console.error("Error: " + e.message);
    }
}

function isCharacterValid(_char, _validLetters = validLetters)
{   
    try
    {
        //Comprobamos si es un numero
        if(!isNaN(_char))
        {
            throw new Error("Es un numero");
        }
        //Comprobamos si la letra esta incluida en el array
        if(!_validLetters.includes(_char.toUpperCase()))
        {
            throw new Error(`Letra no valida.\n  [${_validLetters}]`)
        }
    }
    catch(e)
    {
        console.error(e.message);
    }
}

function convertToSeconds(_arrTime, _ctimer = myTimer, _arrLetter = validLetters)
{

    //Destructuring de _arrTime { valor: , unidad: }
    let {valor, unidad} = _arrTime;

    //Lo usaremos para calcular el tiempo total en segundos
    let totalTimeInSeconds = valor;
    
    //Obtenemos el current index de la letra
    let indexOfUnit = _arrLetter.indexOf(unidad);

    //Recorremos el array de las letras hasta llegar al final
    for(let i = indexOfUnit + 1; i < _arrLetter.length; i++)
    {
        //Obtenemos el valor del resetTime por cada letra
        let valorID = _ctimer.getResetByID(i);
        totalTimeInSeconds  *= valorID;
    }

    //Devolvemos el tiempo en segundos
    return totalTimeInSeconds;
}


            /* TIMER */

let myTimer = new CTimer(0, 0, 0, 0);

let intervalo = setInterval(() =>
{
    myTimer.addTimer(timer);
    myTimer.checkLimits();
    myTimer.logTimer();

}, timer);

// myTimer.stopTimer(intervalo, getInformationToStop(2, "m")); //Se parara a los 120 segundos
// myTimer.stopTimer(intervalo, getInformationToStop(20, "s")); //Se parara a los 20 segundos
// myTimer.stopTimer(intervalo, getInformationToStop(20, "j")); //Letra no valida
// myTimer.stopTimer(intervalo, getInformationToStop("a", "s")); //"a" no es un numero
// myTimer.stopTimer(intervalo, getInformationToStop(50, "h")); //Se parara a los 180000 segundos
myTimer.stopTimer(intervalo, getInformationToStop(10, "s")); //Se parara a los 10 segundos
