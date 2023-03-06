"use strict";

//Ejercicio 1
//Crea una funcion que reciba un numero y devuelva TRUE si es par y FALSE si es impar

function IsOdd(_number)
{
    if(_number % 2 === 0)
    {
        console.log("true");
        return true;
    }
    console.log("false");
    return false;

    /*
        Resolvemos esto en una linea:
        return !(_number%2);
    */
}

// IsOdd(8);
// IsOdd(5);
// IsOdd(1827872);
// IsOdd(182787);

/////////////////////////

//Ejercicio 2
//Crea una funcion que reciba dos numeros y devuelva TRUE si el primero es divisible (el resto es igual a 0) entre el segundo y FALSE si no lo es

function firstNumberIsDivisibleBySecond(_num1, _num2)
{
    if(_num2 === 0)
    {
        console.log("No se puede dividir por 0");
        return false;
    }

    if(_num1 >= _num2)
    {
        if(_num1 % _num2 === 0)
        {
            console.log(_num1 % _num2);
            console.log(`${_num1} es divisible por ${_num2}.`);
            return true;
        }
    }
    else
    {
        console.log(`${_num1} NO se puede dividir entre ${_num2} ya que es mas grande.`);
        return false;
    }

    // else
    // {
    //     /* Intercambiamos las posiciones para que salga*/
    //     let aux = _num1;
    //     _num1 = num2;
    //     _num2 = aux;
    // }
}

// firstNumberIsDivisibleBySecond(5, 0);
// firstNumberIsDivisibleBySecond(10, 2);
// firstNumberIsDivisibleBySecond(10, 12);

/////////////////////////

//Ejercicio 3
//Crea una funcion que reciba un numero y devuelva TRUE si es primo y FALSE si no.
/*Un numero primo solo se puede dividir entre el mismo y el 1 */

function isPrime(_num)
{
    if(_num > 0)
    {
        if(_num === 1)
        {
            // console.log(`El numero ${_num} no es primo ya que solo tiene un divisor`)
            return false;
        }
        else
        {
            for(let i = 2; i < _num; i++)
            {
                if(_num % i === 0)
                {
                    // console.log(`El numero ${_num} no es primo`)
                    return false;
                }
            }
            // console.log(`El numero ${_num} es primo`);
            return true;
        }
    }
    else
    {
        // console.log(`Los numeros negativos no pueden ser primos`);
        return false;
    }
}

// isPrime(1);
// isPrime(-5);
// isPrime(6);
// isPrime(11);
// isPrime(4079);
// isPrime(23603);
// isPrime(23602);

/////////////////////////

//Ejercicio 4
//Crea una funcion que reciba un numero y saque por consola todos los primos hasta ese numero (si es primo)

function showListOfPrimeNumbers(_num)
{
    let listOfPrimeNumbers = "";

    for(let i = 2; i <= _num; i++)
    {
        if(isPrime(i))
        {
            listOfPrimeNumbers += i + " ";
        }
    }

    console.log(`Listado de numeros primos entre el 2 y el ${_num}: ${listOfPrimeNumbers}`);

}

showListOfPrimeNumbers(11);
showListOfPrimeNumbers(14);
showListOfPrimeNumbers(5);
showListOfPrimeNumbers(100);
showListOfPrimeNumbers(97);

/////////////////////////

