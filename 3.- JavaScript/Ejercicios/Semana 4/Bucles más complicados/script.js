"use strict";

function howManytTimesDoesItRepeat(_num)
{   
    /*
        Averiguamos cuantas veces tendremos que repetir la palabra según la hora. 
        Cuando llamemos a la funcion ya hemos comprobado que pase el filtro [>= 8 && <= 22], por lo tanto no lo repetimos aqui. 
    */
    
    if(_num > 12)
    {
        return (_num - 12);
    }
    return _num;
}

function addStringXTimes(_num, _word)
{
    /*
        Según las veces que tengamos que repetir la palabra, iteramos sobre ese numero [_num] y añadimos a una variable "fraseVacia_" la palabra que le pasemos [_word]. Finalmente nos devuelve la frase con la palabra repetida. 
    */
    
    let fraseVacia_ = "";
    let iterator = _num;
    while(iterator > 0)
    {
        iterator--;
        fraseVacia_ += _word + " ";
    }

    return fraseVacia_;
}

/* Bucle Principal */
for(let i = 0; i < 24; i++)
{
    /* Comprobamos que sea la hora que nos piden */
    if(i >= 8 && i <= 22)
    {
        /* Mostramos por pantalla con console.log y llamando directamente a las funciones */
        console.log(
            `Son las ${i}:00. ${addStringXTimes(
            howManytTimesDoesItRepeat(i),
            "CUCÚ!"
            )}`
        );
    }
    else
    {
        console.log(`Son las ${i}:00.`);
    }
}
