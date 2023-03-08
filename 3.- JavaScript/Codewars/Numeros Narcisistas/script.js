"use strict";

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

function isNarcissisticNumber(_num)
{
    const numberOfDigits = countingNumbers(_num);
    let result_ = 0;
    for(let i = 0; i < numberOfDigits; i++)
    {
        result_ += customPow(_num.toString()[i], numberOfDigits);
    }

    if(_num === result_)
    {
        console.log(`El numero ${_num} es un numero narcisista`);
        return true;
    }
    else
    {
        console.log(`El numero ${_num} no es un numero narcisista`);
        return false;
    }

}

function customPow(_number, _pow)
{
    let contador = 1;
    let result_ = Number(_number);

    do
    {
        result_ *= _number;
        contador++;
    }while(contador < _pow);

    return result_;
}

function countingNumbers(_num)
{
    return _num.toString().length;
}

console.log(isNarcissisticNumber(50));  //false
console.log("");
console.log(isNarcissisticNumber(371)); //true
console.log("");
console.log(isNarcissisticNumber(1634));    //true
console.log("");
console.log(isNarcissisticNumber(1635));    //false
console.log("");
console.log(isNarcissisticNumber(1636));    //false
