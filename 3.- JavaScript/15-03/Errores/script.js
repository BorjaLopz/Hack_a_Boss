"use strict";

//TRY
/*
    Sintaxis:
    try
    {
        //Codigo que queremos que ejecute si existe 
    } catch(nombreError)
    {
        //Codigo que se ejecutara cuando no exista
    } finally
    {
        //Codigo que se ejecutara siempre al final. No se suele poner
    }

*/

//Saldrá el error por el catch
// let user;

//Ejecutarael try sin problemas
// let user = 
// {
//     name:"Borja",
// }

// try
// {
//     console.log(user.name);
// } catch(error)
// {
//     console.error("Error:", error.message);
// } finally
// {
//     console.log("Se ejecuta siempre");
// }


///////////////////////////

//TRY...CATCH...FINALLY

// try
// {
//     console.log("Abrir conexion");

//     console.log("Pedir datos");
//     let user = 
//     {
//         nombre: "Borja",
//     }
    
//     console.log(user.nombre);
// }
// catch(e)
// {
//     console.error("Error en la conexion");
// }
// finally
// {
//     //Cerramos la conexion siempre, no podemos dejarlas abiertas ya que llegara un punto en el cual no podamos establecer mas conexiones
//     console.log("Finalizamos la conexión");
// }

///////////////////////////
//TRY ANIDADO

//Si el interno no tiene catch, 

// try
// {
//     console.log("Inicio del TRY externo");

//     let user = {};

//     try
//     {
//         leerDatos(user);
//     } finally 
//     {
//         console.log("Finalizamos conexion")
//     }

//     console.log("cerramos conexion");
//     console.log(user.nombre);

//     console.log("Fin del try externo")
// }
// catch(e)
// {
//     console.error(e.message);
// }


// function leerDatos(_obj)
// {
//     console.log("Conexion");
//     // console.log(objeto);
//     _obj.nombre = "Borja"
// }



///////////////////////////
//Throw: lanzar errores

// function repetir()
// {
//     try
//     {
//         let num = prompt("Introduce un numero");
//         if(isNaN(num))
//         {
//             //Lanzamos un error si el usuario no ha metido un numero lanzamos un error
//             throw new Error(num + " no es un numero!");
//         }
//         console.log("patata ".repeat(num));
//     }catch(e)
//     {
//         console.error(e);
//         alert(e.message);
//         repetir();
//     }
// }

// repetir();

///////////////////////////
//Lanzar errores personalizados

try
{
    console.log("Inicio del TRY externo");

    // let user = {};

    try
    {
        leerDatos(user);
    } catch(e)
    {
        throw new Error("error en la conexion", {cause: e});
    }

    console.log("cerramos conexion");
    console.log(user.nombre);

    console.log("Fin del try externo")
}
catch(e)
{
    console.error("Error: " + e.message);
}


function leerDatos(_obj)
{
    console.log("Conexion");
    _obj.nombre = "Borja"
}
