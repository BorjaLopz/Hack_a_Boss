"use strict";

//Usa JS para pintar el fondo de las celdas de la tabla de notas que hay en index.html
//Si la asignatura está aprobada (5 o más) tendrá el fondo verde
//Si está suspensa (menos de 5), tendrá el fondo rojo

const colorPass = "green";
const colorFail = "red";

//Obtenemos la table
let table = document.querySelector("table");
// console.log(table);

//Obtenemos todos los td dentro de table. Aqui es donde aparecen las notas
let td = table.querySelectorAll("td");
// console.log(td)

function assignColor(_itemToCheck, _colorPass = "green", _colorFail = "red")
{

    for(let i = 0; i < _itemToCheck.length; i++)
    {
        if(_itemToCheck[i].textContent >= 5)
        {
            _itemToCheck[i].style.backgroundColor = _colorPass;
        }
        else
        {
            _itemToCheck[i].style.backgroundColor = _colorFail;
        }
        
    }
}

assignColor(td, colorPass, colorFail);