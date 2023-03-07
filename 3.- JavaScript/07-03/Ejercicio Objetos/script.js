"use strict";

//Ejercicio

//Crea una funcion que reciba 2 objetos y devuelva sin son iguales o no
//En los ejemplos    


const obj1 = 
{
    key1: "a",
    key2: "b",
};

const obj6 = 
{
    key1: "a",
    key2: "c",
};

const obj2 = {
    key2: "b",
    key1: "a",
};


const obj3 = {
    key1: "a",
    key2: "c",
};

const obj4 = 
{ 
    key1: "a", 
    key2: "b", 
    key3: "c" 
};

const obj5 = 
{ 
    key1: "a", 
    key3: "b" 
};



function sonIguales(obj1, obj2)
{

    //Tienen que tener la misma cantidad de entradas (length). Lo podriamos haber mirado como quisieramos, ya que las claves o los valores van a tener la misma cantidad
    if (Object.keys(obj1).length === Object.keys(obj2).length)
    {

        //Comparamos por claves solamente del primer objeto y extrapolamos al resto de objetos que le pasemos
        for(const key in obj1)
        {
            //En caso de que uno de ellos no sea igual, directamente salimos de la función con False
            if(obj1[key] !== obj2[key])
            {
                return false;
            }
        }
        return true;
    }
    else
    {
        return false;
    }

}

console.log(sonIguales(obj1, obj2)); //true
console.log(sonIguales(obj1, obj3)); //false
console.log(sonIguales(obj1, obj4)); //false
console.log(sonIguales(obj1, obj5)); //false
console.log(sonIguales(obj1, obj6)); //false