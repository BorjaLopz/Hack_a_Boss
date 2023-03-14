"use strict";

//Escribe una función que, dados una especie (perro, gato...) y dos arrays con la forma de los ejemplos a continuación, cuente la puntuación total que obtienes al sumar las puntuaciones de los animales de dicha especie.

/*
 ** Ejemplo input: ** "cat".
 ** Ejemplo output: ** 47
 */

const animalScores = [
    {
        animal: "Frank",
        score: 5,
    },
    {
        animal: "Romeo",
        score: 13,
    },
    {
        animal: "Olivia",
        score: 3,
    },
    {
        animal: "Cooper",
        score: 4,
    },
    {
        animal: "Max",
        score: 5,
    },
    {
        animal: "Oscar",
        score: 27,
    },
    {
        animal: "Lola",
        score: 14,
    },
    {
        animal: "Jax",
        score: 7,
    },
    {
        animal: "Millie",
        score: 16,
    },
];

const animals = [
    {
        name: "Frank",
        species: "dog",
    },
    {
        name: "Romeo",
        species: "cat",
    },
    {
        name: "Olivia",
        species: "chicken",
    },
    {
        name: "Cooper",
        species: "cat",
    },
    {
        name: "Max",
        species: "dog",
    },
    {
        name: "Oscar",
        species: "dog",
    },
    {
        name: "Lola",
        species: "cat",
    },
    {
        name: "Jax",
        species: "snake",
    },
    {
        name: "Millie",
        species: "cat",
    },
];

function countScores(animal, animalsArr, scoresArr) {
    //lógica
    
    let animalsOfType = getAllAnimalsOfType(animal, animalsArr);

    if(animalsOfType.length === 0)
    {
        // console.log(`No hay ningun ${animal}`);
        return;
    }
    else
    {
        // let namesOfAnimals = getAllNamesOfSpecie(animalsOfType);
        // let scoresByNames = getAllScoresByName(namesOfAnimals, scoresArr);
        // let totalScore = getTotalScores(scoresByNames);
        // return totalScore;

        return getTotalScores(getAllScoresByName(getAllNamesOfSpecie(animalsOfType), scoresArr));
    }
}

//Obtenemos un array con el nombre del animal y la especie que la hayamos especificado
function getAllAnimalsOfType(_animalSpecies, _animalsArray)
{
    //Usamos .filter para sacar todos los animales de dicha especie del array
    let animalsOfType_ = _animalsArray.filter((animal) => animal.species === _animalSpecies);
    return animalsOfType_;
}

//Obtenemos un array de todos los nombres de los animales
function getAllNamesOfSpecie(_animalsArray)
{
    //Usamos .map para crear un array con todos los nombres del animal especificado
    let animalsNames_ = _animalsArray.map((animal) => animal.name);
    return animalsNames_;
}

//Obtenemos un array con las puntuaciones correspondiente a los nombres de los animales que le pasamos
function getAllScoresByName(_animalsName, _animalsScore)
{
    let scores_ = []; 

    for(const animalName in _animalsName)
    {
        //Añadimos al array scores toda la informacion de puntuacion con los nombres de los animales
        scores_.push(_animalsScore.find((animalToFind) => animalToFind.animal === _animalsName[animalName]));
    }
    return scores_;

}

//Conseguimos la puntuacion total de todos los animales 
function getTotalScores(_animalsScores)
{
    let total = _animalsScores.reduce(reducerScore, 0);
    return total;
}

//Creamos un acumulador custom para poder sumar las puntuaciones de los animales
function reducerScore(acc, animal)
{
    return acc + animal.score;
}

// countScores("snake", animals, animalScores); // Returns -> 7
console.log("Cat: " + countScores("cat", animals, animalScores)); // Returns -> 47
console.log("Dog: " + countScores("dog", animals, animalScores)); // Returns -> 37
console.log("Snake: " + countScores("snake", animals, animalScores)); // Returns -> 7
console.log("Chicken: " + countScores("chicken", animals, animalScores)); // Returns -> 3
console.log("Hamster: " + countScores("hamster", animals, animalScores)); // Returns -> 0