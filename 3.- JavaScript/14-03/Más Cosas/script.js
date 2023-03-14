"use strict";

//Operador ternario (condicional ternario)

/*
    Sintaxis:
    condicion ? "valor true" : "valor false";
*/


let edad = 15;

function esAdulto(_num)
{
    if(_num >= 18)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(esAdulto(edad));

function esAdultoTernario(_num)
{
    return _num >= 18 ? true : false;
}

console.log(esAdultoTernario(edad));

console.log(`La persona es ${edad >= 18 ? "mayor" : "menor"} de edad`);

function saludar(_nombre)
{
    console.log(`Hola ${_nombre}`);
}

let user = 
{
    // nombre: "Borja", 
    nombre: "", 
    // edad: 0,
    mascota:
    {   
        nombre: "Tortu",
    },
};

let user2 = 
{
    nombre: "Borja", 
    edad: 26,
    // mascota:
    // {
    //     // juguete: 
    //     // {
    //     //     // color: "rosa"
    //     // },
    // },

};

user.nombre ? saludar(user.nombre) : console.log("El usuario no tiene nombre");


//////////////////////////

//OR en asignacion

//Asigna el valor de la izquierda siempre que sea truthy. Si el falsy, asigna el de la derecha

let nombre = user.nombre || "desconocido";

console.log(nombre);


//////////////////////////
//Nullish coalescing (??)
//Asigna el valor de la izquierda siempre que no sea null ni undefined. Si es null o undefined, asignara el de la derecha

let edadUsuario = user.edad ?? "edad desconocida";
console.log(edadUsuario);

//////////////////////////
//Encadenamiento condicional (?.)
//si el valor de la izquierda del operador es undefined, devuelve el valor de la izquierda, es decir, undefined. Si no, devuelve el de la derecha. Podria darse el caso de que tambien sea undefined el de la derecha, podria sacar undefined de nuevo

// console.log(user.mascota.nombre);

/* No existe mascota, por tanto devuelve undefined*/
console.log(user2.mascota?.nombre);

//Si tiene todo, nos devuelve el color 
console.log(user2.mascota?.juguete?.color);


//Si no tiene color nos devuelve undefined del color
console.log(user2.mascota?.juguete?.color);


//Si no tiene juguete nos dara undefined del juguete
console.log(user2.mascota?.juguete?.color);


//Si no tiene mascota nos dara undefined de la masqueta
console.log(user2.mascota?.juguete?.color);

//Si se nos olvida un condicional (?.) nos dara un error ya que no tiene la propiedad mascota ni dentro tiene la propiedad juguete. 
// console.log(user2.mascota.juguete?.color);

/* De la manera antigua se haria de esta manera */

//Comprobamos uno a uno que exista cada propiedad para evitar errores de que sean undefined
if(user2 && user2.mascota && user2.mascota.juguete && user2.mascota.juguete.color)
{
    //Imprimiria algo, pero no existe mascota. Por lo tanto nunca se ejecutara
    console.log(user2.mascota.juguete.color);
}
else
{   
    //Para que nos salga como en los ejemplos del operador, tendriamos que entrar en el "else" poniendo un console.log(undefined) para saber que nos ha saltado algun error
    console.log(undefined);
}


/* Esto nos da fallo ya que el primer valor que le pasamos siempre tiene que existir. Si no nos da error de que no esta definido*/
// console.log(user3.mascota?.nombre);

//Antes se hacia asi; Comprobamos que exista cada cosa antes de sacarlo por pantalla antes de que nos devuelva undefined
// if(user && user.mascota)
// {
//     console.log(user.mascota.nombre);
// }