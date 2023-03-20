"use strict";

//OBJETO WINDOW

console.log(window);

//////////////////////

/* PROPIEDADES */


console.log("Inner Height", window.innerHeight); //Alto del viewport en pixeles (del dispositivo)
//Solo cambia cuando lo miramos, aunque despues lo modifiquemos. Tendremos que asociarlo a eventos, que veremos mas tarde

console.log("Inner Width", window.innerWidth); //Ancho del viewport en pixeles (del dispositivo)
//Al igual que antes, solo cambiara cuando lo veamos, aunque lo modifiquemos mas tarde. 

console.log("Outer Height", window.outerHeight);    //Alto de la ventana. Por ejemplo para colocar algun elemento de manera absoluta en alguna posición segun las medidas de las páginas. Ya no solamente lo haremos con @media-querys, podremos hacerlo con estas propiedades. 

console.log("Outer Width", window.outerWidth);