"use strict";

/*
Edita el fichero script.js y modifica la funcion quizpara cuando se ejecute que haga lo siguiente:

Genere un número aleatorio entre 0 y 100 y lo guarde en una variable, este número será el que el usuario deba adivinar.

Muestre una ventana de diálogo tipo prompt que pida al usuario que introduzca un número entre 0 y 100

Si el número introducido es igual al generado en el punto 1, aparecerá en pantalla una ventana de diálogo tipo alert que informará al usuario que ha ganado; si no, el alert indicará si el número introducido es mayor o menor al que tiene que adivinar y dará una nueva oportunidad.

El usuario tendrá 5 oportunidades para acertar, si no lo consigue, aparecerá un alert indicando que ha perdido.

*/


const numeroMaximo = 100;
const numeroMaximoVidas = 5;
let numeroActualDeVidas = numeroMaximoVidas;

let userGuesses = [];

function generateRandomNumber(_numMax)
{
    //Devolvemos un numero aleatorio pasandole un numeroMaximo [100]. Math floor redondeara el numero
    return (Math.floor(Math.random() * _numMax));
}

function quiz() 
{
  // Escribe aquí tu código
    let numeroAdivinar = generateRandomNumber(numeroMaximo);

    console.log(numeroAdivinar);

    let userNumber;
    let fraseLog = "";

    
        
    do
    {
        
        //Pedimos al usuario que meta siempre numeros del 0 al numeroMaximo, ya que ahi no contara ni como vida ni como fallo ya que no entra dentro de nuestro rango de numeros.
        do
        {
            userNumber = Number(prompt(`Introduce un numero: [0 - ${numeroMaximo}]\nNumero de vidas actual: ${numeroActualDeVidas}\n${fraseLog}`));
            
        }while(userNumber < 0 || userNumber > numeroMaximo);
        
        
        if(checkWin(numeroAdivinar, userNumber))
        {
            alert(`Enhorabuena, ha acertado con el número ${numeroAdivinar}`);
            return;
        }
        else
        {
            higherOrLower(numeroAdivinar, userNumber);
        }

        //TODO No es optimo vaciar cadena para evitar duplicidad en las frases
        fraseLog = "";

        //Actualizamos variables
        fraseLog += "\n" + showGuess(userGuesses);
        numeroActualDeVidas--;

    }while(numeroActualDeVidas > 0)

    loseScreen(numeroAdivinar, userGuesses);    
    
}

function checkWin(_numberToGuess, _userNumber)
{
    if(_numberToGuess === _userNumber)
    {
        return true;
    }
    return false;
}

function higherOrLower(_numberToGuess, _userNumber)
{
    //true -> higher
    //false -> lower

    if(_userNumber > _numberToGuess)
    {
        alert(`El numero a adivinar es más pequeño que ${_userNumber}`);
        userGuesses.push(`El numero a adivinar es más pequeño que ${_userNumber}`);
        return false;
    }
    else
    {
        alert(`El numero a adivinar es más grande que ${_userNumber}`);
        userGuesses.push(`El numero a adivinar es más grande que ${_userNumber}`);
        return true;
    }

}

function loseScreen(_numberToGuess, _array)
{
    alert(`Usted ha perdido. El numero era el ${_numberToGuess}`);
    showGuess(_array);
}

function showGuess(_array)
{
    let fraseAux_ = "";
    
    if(_array.length > 0)
    {
        for(let i = 0; i < _array.length; i++)
        {
            fraseAux_ += `${i+1}.- ` + _array[i] + "\n"; 
        }

        return fraseAux_;
    }
}

quiz();