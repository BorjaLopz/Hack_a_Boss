"use strict";

/*

Crea una funcón que reciba un DNI y lo valide.

El Documento Nacional de Identidad de España (DNI) es el documento de identidad que se expide en España, cada DNI tiene un identificador único compuesto por un número de 8 cifras y una letra, por ejemplo: 99999999-R

¿Sabías que la letra del DNI es un sistema de validación, ya que se obtiene a partir del número mediante un sencillo algoritmo?

Para obtener la letra correspondiente a un número de DNI hay que obtener el resto (en la documentación de JavaScript puedes buscar el operador aritmético para calcular el resto)** **de la división del número entre 23. Ese resto será un número entre 0 y 22. Si usamos ese número como índice en el siguiente Array la letra será la correspondiente a ese índice:

const letras = [ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

Por ejemplo si el resto de dividir el número entre 23 es 4 la letra será G.

Tienes que crear una función en el archivo index.js de la derecha que reciba un DNI completo con este formato: 00000000-T (la letra puede ser mayúscula o minúscula) y debe hacer las siguientes comprobaciones:

Lo que se ha introducido es un String con 10 caracteres (los 8 números, el guión y la letra).

Si separamos el String por el guión tendremos dos partes:

La primera parte (antes del guion) debe tener 8 números.

La segunda parte (después del guion) debe ser un único caracter y no un número.

La letra (segunda parte) debe ser la correcta según el algoritmo explicado anteriormente.

Si se cumplen todas las comprobaciones, se mostrará un mensaje en consola indicando que es un DNI válido.

Si alguna de las comprobaciones falla, lanzará un Error de JavaScript  que diga "Se ha producido un error:" y el mensaje correspondiente. Para esto tienes que usar throw y el objeto Error de JavaScript.

*/

const letras = [ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

const DNI = "00000000-T";

function validateDNI(_dni) {
    // escribe aquí tu código

    try
    {
        if(typeof _dni !== "string" || _dni.length !== 10)
        {
            throw new Error("Debes introducir un texto de 10 caracteres");
        }

        let [numeros, letra] = _dni.split("-");

        if(isNaN(numeros) || numeros.length !== 8)
        {
            throw new Error("La primera parte tiene que ser de 8 numeros");
        }

        if(!isNaN(letra) || letra.length !== 1)
        {
            throw new Error("La segunda parte debe ser una letra");
        }

        let letraResultante = numeros % 23;

        if(letra !== letras[letraResultante].toUpperCase())
        {
            throw new Error("La letra no coincide. DNI invalido");
        }

        console.log("DNI VALIDO");
    }catch(e)
    {
        console.error("Se ha producido un error: " + e.message);
    }

}

validateDNI('00000000-t');     //Hacen falta mas caracteres
