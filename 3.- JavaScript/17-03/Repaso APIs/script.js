"use strict";

const URL = "https://api.sampleapis.com/simpsons/characters/"

async function getDataFromURL(_url)
{
    console.log("Vamos a buscar informacion de la URL: ", _url)
    try
    {
        let dataFetch = await fetch(_url);

        let dataJSON = await dataFetch.json();

        return dataJSON;
    }
    catch(e)
    {
        throw new Error ("Hay un error con la URL.");
    }
}

//Obtenemos informacion por la ID + la URL
async function getCharacterByID(_id, _url = URL)
{
    try
    {
        if(isNaN(_id) || _id === null)
        {
            throw new Error (`Solo se admiten numeros. \n${_id} no es un caracter valido!`);
        }

        let informacionBruto;

        try
        {
            informacionBruto = await getDataFromURL(_url + _id);
        }
        catch(e)
        {
            throw new Error ("El personaje no existe o el servidor esta caido", {cause: e});
        }

        console.log(informacionBruto.name);


    }catch(e)
    {
        console.error("Ha habido un error. ", e.message);
    }
}

async function getCharacterByName(_name, _url = URL)
{
    try
    {
        if(_name === "")
        {
            throw new Error("Nombre no valido");
        }
        
        let informacionBruto = await getDataFromURL(_url);

        let personaje = informacionBruto.filter((res) => (res.name).toLowerCase().includes(_name.toLowerCase()));

        return personaje;

    }catch(e)
    {
        console.error("Ha habido un error. ", e.message);
    }
}

async function getCharacterByGender(_gender, _url = URL)
{
    try
    {   
        if(_gender.toLowerCase() !== "f" && _gender.toLowerCase() !== "m" && _gender.toLowerCase() !== "")
        {
            throw new Error("Genero no valido");
        }
        let informacionBruto = await getDataFromURL(_url);

        let gender = informacionBruto.filter((res) => res.gender.toLowerCase() === _gender.toLowerCase());

        console.log(gender);

    }catch(e)
    {
        console.error("Ha habido un error. ", e.message);
    }
}

// getCharacterByID(71); //Marge Simpson

// getCharacterByName("simpson"); //[Array con los datos de Marge]

// getCharacterByName(""); //Nombre no valido

// getCharacterByID("Homer simpson").then((res) => console.log(res)); //Solo se admiten numeros

// getCharacterByName("Homer simpson").then((res) => console.log(res)); //Informacion de los Homer simpson que tenga la API

// getCharacterByGender("a"); //Genero no valido
// getCharacterByGender("f"); //71
// getCharacterByGender("m"); //251
// getCharacterByGender(""); //6390