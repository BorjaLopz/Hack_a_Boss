"use strict";

//Clases
//Propiedad ClassList

//Seleccionamos todos los parrafos
let [p1, p2] = document.querySelectorAll("p");

//Sacamos por pantalla para ver si hemos seleccionado lo que queriamos
//console.log(p1, p2);

//Mostramos todas las clases que tenga cada atributo
console.log(p1.classList);
console.log(p2.classList);

//Añadir clases a un atributo
//atributo.classList.add(clase); /* Tambien podemos pasarle una variable que tenga un string con el nombre de la clase que queramos añadir */

p1.classList.add("importante");
p1.classList.add("prueba"); //Si le metemos una clase que no tenemos, o una que ya tiene no pasa nada. No la duplica ni nada por el estilo
p2.classList.add("destacado");

//Quitar una clase
//atributo.classList.remove(clase);

p1.classList.remove("destacado");
p1.classList.remove("destacado");   //Si ya se la hemos quitado, no pasa nada. No la quita dos veces ni nada por el estilo
p1.classList.remove("clasePrueba"); //Al igual que antes, si le queremos quitar una clase que no tiene, no pasa nada. Esto es muy util para un ul que tenga li y algunos tengan alguna clase y otros no. NO tenemos que comprobar si tiene la clase X un elemento para quitarselo. 

//Cambiar atributo
//Modo noche, o cambiar de colores

let html = document.querySelector("html");

html.classList.toggle("dark");  //Si no la tiene puesta, la pondra. En caso de que la tenga la quita. Funciona como un interruptor (toggle de toda la vida baia).
html.classList.toggle("dark");  //Si no la tiene puesta, la pondra. En caso de que la tenga la quita. Funciona como un interruptor (toggle de toda la vida baia).
html.classList.toggle("dark");

//Cambiar una clase por otra. 
//atributo.classList.replace("claseActual", "claseNueva");

// p2.classList.replace("destacado", "importante");    //Cambia una clase "destacado" en este caso, por "importante". 
p2.classList.replace("destacado", "clasePrueba2");  //Si le quitamos la clase y la reemplazamos por otra que no existe, simplemente quitara la que le hayamos puesto. 

console.log(p1.classList.contains("destacado"));    //Comprobamos si X elemento tiene una clase. Nos devuelve un booleano con la información. 
console.log(p1.classList.contains("importante"));

/////////////////////////

let titulo = document.querySelector("h1");

titulo.className = "importante destacado";  //Con el atributo .className sobreescribiremos toda la informacion que tenga dicho elemento. Podremos añadirle nuevas clase, haciendo que lo que hayamos escrito en CSS no nos sirva. Es muy util para borrar todas las clases pasandole un string vacio. A diferencia del remove que tendremos que quitar una a una pero conociendo que clases tiene y cuales son sus nombres. 

titulo.className = "";