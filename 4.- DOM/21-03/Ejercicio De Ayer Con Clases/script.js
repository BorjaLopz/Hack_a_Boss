"use strict";

//Usa JS para pintar el fondo de las celdas de la tabla de notas que hay en index.html
//Si la asignatura está aprobada (5 o más) tendrá el fondo verde
//Si está suspensa (menos de 5), tendrá el fondo rojo

//Obtenemos todos los td dentro de table. Aqui es donde aparecen las notas
let celdas = document.querySelectorAll("td");
// console.log(td)

for(const celda of celdas)
{
    celda.classList.add(celda.textContent < 5 ? "suspenso" : "aprobado");
}
