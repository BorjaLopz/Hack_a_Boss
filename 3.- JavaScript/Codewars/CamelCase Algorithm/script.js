"use strict";

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

function camelCase(_string)
{
    //En caso de que metamos una cadena vacia o un undefined saltara directamente 
    if(_string === undefined || _string.length === 0 )
    {
        console.log("No hay nada escrito");
        return;
    }
    else
    {
        //Pasamos a minusculas
        _string = _string.toLowerCase();
        let contadorEspacios = 0;
        //Aqui guardaremos la frase final
        let fraseFinal_ = "";

        //Recorremos el string por toda su longitud
        for(let i = 0; i < _string.length; i++)
        {
            if(contadorEspacios === 0)
            {
                //Cuando sea la primera letra de la frase o despues de un espacios [setteamos contadosEspacios a 0] añadimos a fraseFinal_ la letra correspondiente en UpperCase()
                fraseFinal_ += _string[i].toUpperCase();
                contadorEspacios++;
            }
            else if(_string[i] === " ")
            {
                //Cuando encontremos un espacio setteamos el contador de espacios a 0 para poner la siguiente letra en mayusculas
                contadorEspacios = 0;
            }
            else
            {
                //Cuando no sea la primera letra de la palabra ni sea espacio, añadimos la letra en lowerCase() a la fraseFinal_; Además aumentamos en una unidad el contador de espacios.
                fraseFinal_ += _string[i];
                contadorEspacios++;
            }
            
        }
        //Imprimimos la fraseFinal_
        console.log(fraseFinal_);
        return fraseFinal_;
    }
}

camelCase("hola que tal");
console.log("")
camelCase("hola");
console.log("");
camelCase("");
console.log("")
camelCase("HOLA");