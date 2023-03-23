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

function printBestWorst(teamsArr)
{
    let arrTotales = teamsArr.map((team) => 
    ({
        team: team.team, 
        total: team.scores.reduce((acc, current) =>
        acc + current),
    }));

    arrTotales.sort((teamA, teamB) => teamB.total - teamA.total);

    let bestTeam = arrTotales[0];
    let worstTeam = arrTotales[arrTotales.length-1];

    console.log(`El mejor equipo es ${bestTeam.team} con un total de ${bestTeam.total}\nEl peor equipo es ${worstTeam.team} con un total de ${worstTeam.total}`);;
}

printBestWorst(firstRound);