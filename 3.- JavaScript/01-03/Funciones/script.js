"use strict";

//Funciones

function Hola(_nombre)
{
    if(_nombre === undefined)
    {
        console.log("Hola desconocido");
    }
    else
    {
        console.log(`Hola ${_nombre}`);
    }
}

Hola("Borja");
Hola();

function makeCakeFlavourSize(_sabor, _size)
{
    
    switch (_size) 
    {
        case 1:
            _size = "pequeño";
            break;
        default:
            _size = "mediano";
            break;
        case 3:
            _size = "grande";
            break;            
    }
    console.log(`Vamos a hacer un bizcocho de ${_sabor} tamaño ${_size}`)
}

makeCakeFlavourSize("fresa", 3);


console.log("");

/////////////////////////////////

function presentacion(_nombre, _ciudad)
{
    console.log(`Soy ${_nombre} de ${_ciudad}`);
}

presentacion("Pueblo Paleta", "Ash");