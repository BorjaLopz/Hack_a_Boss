"use strict";

//Objeto form Data

//Hacemos el JS para copiar mas tarde el HTML
let [form] = document.forms;    //Son cosas equivalentes. // let form = document.forms[0];

function submitForm(e)
{
    //Evitamos que recargue el formulario. SIEMPRE hay que hacerlo
    e.preventDefault();

    //Objeto formData

    let formData = new FormData(form);  //Le tenemos que pasar el formulario. Le podemos pasar directamente el formulario que ya tenemos preseleccionado, o le podemos pasar el e.target

    // console.log(formData);

    //Añadir campos con su valor (añadir cosas antes de mandarlas)
    formData.append("nuevoCampo", "nuevoValor");
    //En caso de que le metamos un nuevoCampo ya existente, tambien lo añadira. Hay que tener cuidado ya que podria existir duplicidad de entries. 

    //Cambien el valor de un campo. Si no existe, lo crea. POCO UTIL. En caso de que el nombre venga vacio, lo podemos consultar (previamente con un if) para ponerle un nombre por defecto "desconocido"
    formData.set("talla", "m");
    //En este caso si no seleccionamos ninguna talla, con el set "preseleccionamos" la talla "m" y no toma en cuenta lo introducido por el usuario. Si por el contrario SI seleccionamos alguna talla, modificará su valor por el que tenga aqui hardcodeado. 

    //Borrar un campo
    formData.delete("provincia");
    //Lo elimina, independientemente de si esta o no

    //leer el valor de un campo (solo el primero). Para poder leer todos los campos con el mismo nombre, tendremos que usar getAll

    //leemos solamente uno, el primero de todos
    console.log(formData.get("name"));

    //Leemos todos los campos que haya con dicho value;
    console.log(formData.getAll("name"));   //Nos devolverá un array

    
    //Comprobar si tiene un campo. No si lo tiene o no el formulario, sino si le llega al formData
    console.log(formData.has("terminos"));


    for(const entry of formData)
    {
        console.log(entry);
    }

    console.log(JSON.stringify(formData));  //Nos da un valor, vacio "{}". De esta manera no podremos mandar nada al backend. Se podria solucionar haciendo push a un array vacio y mandarlo directamente, pero seria un array de arrays. NO hace falta. 

}

// form.addEventListener("submit", submitForm);


//////////////////////////////
//Forma optima de usar form Data

function submitFacil(e)
{
    e.preventDefault();

    let formData = new FormData(form);

    //Lo convertimos a objeto. Por lo que podremos utilizarlo como un objeto normal, iterable, accesible, modificable, etc...
    let formObj = Object.fromEntries(formData);

    //Añadir. NO podremos poner dos claves con el mismo valor, no sera necesario para nada
    formObj.nueva = "nuevoValor";

    //Modificar. Ponemos la clave que queramos y el valor que queramos que tenga
    formObj.nueva = "";

    //Eliminar. Borramos directamente el campo. 
    delete formObj.provincia;

    console.log(formObj);

    console.log(JSON.stringify(formObj));
}

form.addEventListener("submit", submitFacil);