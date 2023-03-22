"use strict";

//Eventos de formulario

let campo = document.querySelector("input");

//FOCUS
//Esto nos servira cuando nos metemos dentro del input para escribir alguna cosa, es decir, seleccionamos dicho input. 

campo.addEventListener("focus", () =>
{
    console.log("Has puesto el foco en el campo!");
});


//BLUR
//Esto nos avisará cuando perdamos el foco del campo, es decir, cliquemos fuera del input. 

campo.addEventListener("blur", ()=>
{
    console.log("Has perdido el foco del campo!");
})

//INPUT
//Se lanza con cada cambio que tenga dentro del input, es decir, siempre que añadamos o quitemos letras aparecerá reflejado. En un checkbox aparecerá cheked true o false, en un radio en un select...
//En caso de no  tenerlo asignado con ningun botón, tendremos que tener toda la informacion en el frontend, por lo que si hay mucho contenido haremos que sea muy pesado. Si lo tuviesemos con un botón, podriamos preguntar directamente a backend y poder contrastar datos. 

campo.addEventListener("input", ()=>
{
    if(campo.value.length >= 5)
    {
        console.log(campo.value);
    }
})

//Change
//Se lanzara cuando ha habido un cambio y este ha cambiado el foco. Si solo seleccionamos el campo y luego lo quitamos, no pasa nada. Sin embargo si nos metemos en el campo, hacemos algun cambio (añadimos letras) y luego pierde el foco, sera llamado. 

//Util cuando queremos avisar de que el nombre tiene que tener minimo X caracteres. Cuando tenemos que repetir la contraseña etc. 
//El input de buscar cualquier cosa en google, a medida que vamos escribiendo van sugiriendo distintos resultados segun tecleemos. 



campo.addEventListener("change", ()=>
{
    console.log("Change!", campo.value);
})