"use strict";

//Fetch
//Es un metodo que recibe una URL y devuelve la informacion de la URL. Muy util con APIs y con JSON

async function mostrarPersonas()
{
    let respuestaBruta = await fetch("https://rickandmortyapi.com/api/character");

    let personajes =  await respuestaBruta.json();

    console.log(personajes);
}

/* CON ESTA FUNCION PODEMOS CONSEGUIR LOS DATOS EN FORMATO ARARY DESDE UNA API EXTERNA Y LA PODREMOS LEER COMODAMENTE */
async function getData(url)
{
    
    try
    {
        let res = await fetch(url);
        let data = await res.json();

        return data;
    }
    catch(e)
    {
        //Lanzamos el error para que el resto de funciones sepan de donde viene el error
        throw new Error("LA URL ESTA MAL", { cause: e });

        //Esto esta bien para capturar el error, pero lo oculta
        // console.error("LA URL ESTA MAL");
        // return null;
    }
}

async function mostrarGOT()
{
    let got = await getData("https://thronesapi.com/api/v2/Characters");
    
    console.log(got);
    return got;
}
async function mostrarPersonajes()
{
    let respuestaBruta = await fetch("https://anapioficeandfire.com/api/characters");

    let personajes = await respuestaBruta.json();

    let personaje = personajes[0];

    let libroURL = personaje.books[0];

    let libroDataBruto = await fetch(libroURL);

    let libroData = await libroDataBruto.json();

    console.log(libroData)

    console.log(libroURL);
}

async function mostrarCasas()
{
    //URL BUENA
    // let casas = await getData("https://anapioficeandfire.com/api/houses");

    //URL MALA para ver el error en el live server
    let casas = await getData("https://anapioficeandfire.com/api/housess");

    // console.log(casas);

    let [casa] = casas;

    let overlordURL = casa.overlord;

    let overlodData = await getData(overlordURL);

    console.log(overlodData);
        
}

// mostrarPersonas();
// mostrarGOT();
// mostrarPersonajes();
mostrarCasas();