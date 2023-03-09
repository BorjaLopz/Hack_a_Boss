"use strict";

/*

Edita el archivo index.js para crear un código que recorra (usando un bucle) cada una de las parejas de propiedad/valor del objeto people e imprima en la consola esto:

1. Maria es mayor de edad
2. Ana es menor de edad
3. Luis es menor de edad
4. Pepe es mayor de edad
5. Manuel es mayor de edad
6. Teresa es menor de edad
7. Daniel es mayor de edad
8. Irene es mayor de edad
9. Alex es menor de edad


Para hacer esto crea una función externa al bucle que en cada iteración reciba dos valores name, age y que se encarge de imprimir en la consola la cadena de texto solicitada para cada persona del objeto people.

*/

const people = 
{
    Maria: 20,
    Ana: 14,
    Luis: 16,
    Pepe: 35,
    Manuel: 50,
    Teresa: 12,
    Daniel: 27,
    Irene: 23,
    Alex: 10,
};


const mayoriaEdad = 18;

function LoopOverObjects(_obj)
{
    for(const person in _obj)
    {
        externFunction(person, _obj[person]);
    }
}

function externFunction(_name, _age)
{
    if(_age >= mayoriaEdad)
    {
        console.log(`${_name} es mayor de edad`);
    }
    else
    {
        console.log(`${_name} es menor de edad`);
    }
}

LoopOverObjects(people);

