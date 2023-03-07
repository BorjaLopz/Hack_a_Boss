"use strict";

//Los objetos son PUNTEROS
//Tiene las mismas implicaciones que los arrays

//Duplicar un objeto

//Con SPREAD

let camiseta = 
{
    color: "azul", 
    talla: "M", 
    precio: 9.99, 
}

let camiseta2 = {... camiseta};

console.log(camiseta2);

let camiseta3 = 
{
    temporada: "invierno", 
    talla: "L", 
    ... camiseta, 
}

console.log(camiseta3)


let camiseta4 = 
{
    ... camiseta,
    temporada: "invierno",
    talla: "L",
};

console.log(camiseta4);



//////////////////

//Copia profunda

let user = 
{
    nombre: "Borja", 
    email: "borja.lpzdz5@gmail.com", 
    coloresFavoritos: ["azul", "negro", "gris"],

    mascota: 
    {
        nombre: "Tortu", 
        especie: "Tortuga",
    }, 

    // saludar: () => 
    // {
    //     console.log(`Bienvenido ${user.nombre}!`)
    // }
}

let user2 = {...user, nombre:"Borja López"};
user2.ciudad = "Rivas - Vaciamadrid";

user2.mascota.nombre = "Buffy";

console.log(user);
console.log(user2);


let copiaProfundaUsuario = structuredClone(user);

copiaProfundaUsuario.mascota.especie = "perro";

console.log(copiaProfundaUsuario);
console.log(user);