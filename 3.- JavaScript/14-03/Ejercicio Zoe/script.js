"use strict";

// Empezamos a trabajar en un empresa de ITV (Inspección Técnica de Vehículos) y nos piden que mostremos en consola un listado de un array de objetos con información sobre los coches listados en "matriculas.js" de cúales deben pasar este año la revisión para mandarles un aviso, para ello sabemos que la matrícula limite máxima para pasar la revisión este año es 'LDR' (todas las matrículas inferiores deben de listarse).
// Para cumplir con nuestra tarea debemos seguir los siguientes pasos:

// En este archivo, donde debes escribir tu código, necesitas importar el contenido del array de objetos de "matriculas.js".

// Crear una función que recorra todo el array de objetos, y que, aquellos que tengan las 3 letras inferiores a la matrícula límite se muestren en la consola del navegador.

// No debes modificar nada en el archivo "matriculas.js"
// Recuerda que para utilizar import y export en JavaScript debes modificar la línea de <script src...> en index.html a tipo "module", como aprendiste en la sección "8. Módulos: import y export" . Si sale un error en consola que diga "Uncaught SyntaxError: Cannot use import statement outside a module", ya sabes por donde va.
// NOTA: Este ejercicio debes iniciarlo como servidor local con la extensión "Live Server" o extensión similar.

import matriculasArray from "./matriculas.js";

function comprobarMatriculas(_limite, _array)
{
    let newArr = [];

    for(let matricula of _array)
    {
        let letras = matricula.matricula.slice(-3);

        if(letras <= _limite)
        {
            newArr.push(matricula);
        }
    }
    console.log(newArr);
}

//Con Filter
function comprobarMatriculasFilter(_limite, _array)
{
    let newArr = _array.filter((matricula) => 
        {
            let letras = matricula.matricula.slice(-3);
            return letras < _limite;
        }
    );

    console.log(newArr);
    return newArr.map((objMatricula) => objMatricula.propietario);
}

//Opcion 3
function comprobarMatriculasFilterOpcion3(_limite, _array)
{
    console.log(_array.filter((matricula) => matricula.matricula.slice(-3) < _limite));

}

// comprobarMatriculas("LDR", matriculasArray);
console.log(comprobarMatriculasFilter("LDR", matriculasArray));
// comprobarMatriculasFilterOpcion3("LDR", matriculasArray);