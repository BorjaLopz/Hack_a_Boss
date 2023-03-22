"use strict";

//Usa JS para pintar el fondo de las celdas de la tabla de notas que hay en index.html
//Si la asignatura está aprobada (5 o más) tendrá el fondo verde
//Si está suspensa (menos de 5), tendrá el fondo rojo

/* const de los colores*/ 
const colorPass = "green";
const colorFail = "red";

//Obtenemos todos los td dentro de table. Aqui es donde aparecen las notas
let celdas = document.querySelectorAll("td");

//Opcion 1

// for(const celda of celdas)
// {
//     let color = colorPass;
//     if(celda.textContent < 5)
//     {
//         color = colorFail;
//     }

//     celda.style.backgroundColor = color;
// }

//Opcion 2

for(const celda of celdas)
{
    celda.style.backgroundColor = (celda.textContent < 5 ? colorFail : colorPass);
}