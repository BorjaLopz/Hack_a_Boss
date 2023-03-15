"use strict";

// Empezamos a trabajar en un empresa de ITV (Inspección Técnica de Vehículos) y nos piden que mostremos en consola un listado de un array de objetos con información sobre los coches listados en "matriculas.js" de cúales deben pasar este año la revisión para mandarles un aviso, para ello sabemos que la matrícula limite máxima para pasar la revisión este año es 'LDR' (todas las matrículas inferiores deben de listarse).
// Para cumplir con nuestra tarea debemos seguir los siguientes pasos:

// En este archivo, donde debes escribir tu código, necesitas importar el contenido del array de objetos de "matriculas.js".

// Crear una función que recorra todo el array de objetos, y que, aquellos que tengan las 3 letras inferiores a la matrícula límite se muestren en la consola del navegador.

// No debes modificar nada en el archivo "matriculas.js"
// Recuerda que para utilizar import y export en JavaScript debes modificar la línea de <script src...> en index.html a tipo "module", como aprendiste en la sección "8. Módulos: import y export" . Si sale un error en consola que diga "Uncaught SyntaxError: Cannot use import statement outside a module", ya sabes por donde va.
// NOTA: Este ejercicio debes iniciarlo como servidor local con la extensión "Live Server" o extensión similar.

import matriculasArray from "./matriculas.js";

const matriculaAComparar = "LDR";

//Obtenemos todas las matriculas del array
function getAllMatriculasFromArray(_arrayMatriculas)
{
    return _arrayMatriculas.map((matri) => matri.matricula);
}

function getAllLettersFromMatricula(_matriculas)
{
    let letrasMatriculas_ = [];
    
    //Recorremos todas las matriculas
    for(const matricula in _matriculas)
    {
        let separarLetrasMatriculas = "";

        //Recorremos cada matricula en toda su longitud
        for(let i = 0; i < _matriculas[matricula].length; i++)
        {
            //Conseguimos unicamente las letras de las matriculas
            if(!(_matriculas[matricula][i] >= "0" && _matriculas[matricula][i] <= "9"))
            {  
                //Si no son digitos, añadimos el caracter a nuestra frase vacia
                separarLetrasMatriculas += _matriculas[matricula][i];
            }
        }
            //Cuando terminamos cada elemento, lo añadimos al array para poder compararlo mas tarde
            letrasMatriculas_.push(separarLetrasMatriculas);
    }

    return letrasMatriculas_;
}

function getOlderMatriculas(_matriculas, _matriculaAComparar = "LDR")
{
    //Array vacio donde añadiremos todas las matriculas cuyas letras sean inferiores a _matriculaAComparar
    let matriculasAntiguas_ = [];
    //Recorremos todo el listado de las matriculas
    for(const matricula in _matriculas)
    {
        //Comprobamos que la matricula actual es menor o igual a la matricula limite
        if(_matriculas[matricula] <= _matriculaAComparar)
        {
            // console.log(`${_matriculas[matricula]} es mas antigua que ${_matriculaAComparar}`);
            //Añadimos al array inicial dicha matricula
            matriculasAntiguas_.push(_matriculas[matricula]);
        }
    }

    return matriculasAntiguas_;
}

function getOwnerByMatricula(_matriculasAntiguas, _matriculasArray = matriculasArray)
{
    //Array vacio donde añadiremos todos los datos de los coches que tengan que pasar laITV
    let ownerByMatricula_ = [];

    //Recorremos las matriculas que sabemos que tienen que pasar la ITV
    for(let i = 0; i < _matriculasAntiguas.length; i++)
    {
        //Iteramos sobre el array inicial para comparar datos
        for(let matricula in _matriculasArray)
        {
            //Si incluye la matricula de los datos iniciales las letras de las matriculas que tienen que pasar la ITV, añadiremos los datos en el array
            if(_matriculasArray[matricula].matricula.includes(_matriculasAntiguas[i]))
            {
                ownerByMatricula_.push(_matriculasArray[matricula])
            }
        }
    }
    //Devolvemos el array
    return ownerByMatricula_;
}

function logOwner(_propietario)
{
    if(_propietario.length > 0)
    {

        //Iteramos del array de todos los propietarios
        for(const owner in _propietario)
        {
            //Sacamos por consola el texto con el nombre de propietario, marca, modelo y matricula
            console.log(`${+owner + 1}.- ${_propietario[owner].propietario} tiene que pasar la ITV de su ${_propietario[owner].marca} ${_propietario[owner].modelo} con matricula ${_propietario[owner].matricula}`);
            console.log("");
        }
    }
    else
    {
        console.log("No coinciden ningun dato con nuestros clientes.");
    }
}

function getOwnersITV(_matriculasArray = matriculasArray)
{
    let matriculas = getAllMatriculasFromArray(_matriculasArray);
    let letterMatriculas = getAllLettersFromMatricula(matriculas);
    let matriculasAntiguas = getOlderMatriculas(letterMatriculas /*,"LDR"*/);
    let propietarios = getOwnerByMatricula(matriculasAntiguas);
    logOwner(propietarios);
}

getOwnersITV();