"use strict";

// puntuaciones primera ronda

/*

Edita el archivo index.js para crear el código necesario para que partiendo del array de puntuaciones propuesto se imprima por la consola el mejor y peor equipo con su total de puntos respectivo.

El resultado que tiene que aparecer en la consola al ejecutarlo debe ser exactamente igual a este:

El mejor equipo es Toros Negros con un total de 28 puntos
El peor equipo es Ciervos Celestes con un total de 10 puntos

*/

const firstRound = [
    { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },          //28
    { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },      //26  
    { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },      //22
    { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },        //18
    { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },             //14
    { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },             //10
    { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },     //15
    { team: "Orcas Moradas", scores: [2, 3, 3, 4] },                //12
];


//Obtenemos un array con el nombre del equipo y las puntuaciones totales del equipo
function getScoreByTeam(_arr = firstRound)
{
    //Declaramos el array vacio al que vamos a añadir elementos
    let arrayScores_ = [];

    for(const it in _arr)
    {
        //Destructuring del objeto
        let {team, scores} = _arr[it];

        let puntuacion = totalAmount(scores);

        arrayScores_.push({team: team, scores:puntuacion});
    }

    return arrayScores_;
}

//Sumamos las puntuaciones
function totalAmount(_arr)
{
    return _arr.reduce((acc, current) => acc + current);
}

//Usando el metodo .sort() ordenamos los equipos por su puntacion de mayor a menor
function sortByScore(_arr)
{
    return _arr.sort((a, b) => b.scores - a.scores);
}

//Sacamos por pantalla el texto que necesitamos
function logTeamAndScores(_arr)
{
    console.log(`El mejor equipo es ${_arr[0].team} con un total de ${_arr[0].scores}`)
    console.log(`El peor equipo es ${_arr[_arr.length -1].team} con un total de ${_arr[_arr.length -1].scores}`)
}

let teamAndTotalScore = getScoreByTeam(firstRound);

let teamsSortedByScore = sortByScore(teamAndTotalScore);


logTeamAndScores(teamsSortedByScore);