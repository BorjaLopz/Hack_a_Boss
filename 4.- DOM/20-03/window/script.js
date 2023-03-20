"use strict";

//OBJETO WINDOW

console.log(window);


/* PROPIEDADES */

console.log("Inner Height", window.innerHeight); //Alto del viewport en pixeles (del dispositivo)
//Solo cambia cuando lo miramos, aunque despues lo modifiquemos. Tendremos que asociarlo a eventos, que veremos mas tarde

console.log("Inner Width", window.innerWidth); //Ancho del viewport en pixeles (del dispositivo)
//Al igual que antes, solo cambiara cuando lo veamos, aunque lo modifiquemos mas tarde. 

console.log("Outer Height", window.outerHeight);    //Alto de la ventana. Por ejemplo para colocar algun elemento de manera absoluta en alguna posición segun las medidas de las páginas. Ya no solamente lo haremos con @media-querys, podremos hacerlo con estas propiedades. 

console.log("Outer Width", window.outerWidth);

console.log("Location", window.location);   //Informacion sobre el host, localName, pathName(ruta relative de nuestro index), protocolo(http://)

console.log("Navigator", window.navigator); //Informacion sobre el navegador

console.log("ScrollX", window.scrollX); //Nos servira para saber en que parte del scroll estamos ubicados

console.log("ScrollY", window.scrollY);

console.log("Console:", window.console);    //Una consola la cual tiene log, error, info, etc...

/* METODOS */

//Ademas de setTimeout, setInterval, clearTimeout, clearInterval...

//Alert

/* Muestra un mensaje y bloque la pagina hasta que se cierra el mensaje. Los estilos de estas alertas los decide el navegador. */

// window.alert("Esto es un alert");
// alert("Esto es un alert sin window delante");

//Confirm

/* Muestra un mensaje y dos opciones, cancel y ok y bloque la pagina esperando respuesta. Si se pulsa ok, devuelve true, sino false. */

// let confimacionUsuario = confirm("Esta usted de acuerdo?");
// console.log("confimacionUsuario", confimacionUsuario);

//Promp

/* Muestra un mensaje y una entrada de texto. Devuelve lo que se introduzca en el campo de texto*/

// let opcionPrompt = prompt("Introduzca su nombre, por favor: ");
// console.log("opcionPrompt", opcionPrompt);

//Open

/* Abre la pagina que se le pase como parametro*/ 
//Se podria meter en un if cuando el usuario haya confirmado, por ejemplo...
// window.open("https://www.google.es");

//Close

/* Cierra la pestaña en la que se ejecuta. Solo se pueden cerrar ventanas que ha abierto el propio script*/
// window.close();
//Solo vamos a poder cerrar ventanas que hayamos abierto nosotros a traves de un windows.open() y que se haya ejecutado el JS en dicha pagina. Nunca podremos cerrar una pagina directamente con el codigo de google. 

//Print

/* Abre el menu para imprimir la pagina actual */

// window.print();

//ScrollBy

setTimeout(() => 
    window.scrollBy(
        {
            top: 300, 
            behavior: "smooth",
        }
    ), 
    3000
);

//ScrollTo

setTimeout(() => 
{
    window.scrollTo(
        {
            top: 500,
            behavior: "smooth",
        }
    )
}, 4000);

