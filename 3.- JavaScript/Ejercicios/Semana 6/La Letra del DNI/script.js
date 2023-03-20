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
const DNIBorja = "51129885-B";
const DNIDarinka = "51129886-n";

function validateDNI(_dni) {
    // escribe aquí tu código

    try
    {
        if(_dni.length < 10)
        {
            throw new Error("Hacen falta mas caracteres");
        }
        else if(_dni.length > 10)
        {
            throw new Error("Sobran caracteres");
        }

        const DNI_numbers_letter = divideSentenceBySeparator(_dni, "-");

        checkDNIAndLetter(DNI_numbers_letter);

    }catch(e)
    {
        console.error("Ha habido un error:", e.message);
    }

}

function divideSentenceBySeparator(_string, _separator)
{
    return _string.split(_separator);
}

function checkDNIAndLetter(_dni)
{
    //Separamos numeros de letras.
    /* @TODO Destructuring con numeros y letras */
    let numbers = +_dni[0];
    let letters = _dni[1].toUpperCase();

    //Pasamos la letra que hemos obtenido previamente a mayusculas, en caso de que el usuario la haya introducido en minusculas. 
    _dni[1] = letters;
    
    try
    {   

        //Comprobamos que todos los caracteres sean numeros
        if(isNaN(numbers))
        {
            throw new Error("Hacen falta 8 números");
        }

        //Comprobamos si el ultimo caracter es una letra
        if(!isCharacter(letters))
        {
            throw new Error("Falta letra final.");
        }

        //Comparamos la letra resultante segun el modulo y la letra introducida. Si no es igual, lanzamos un error. 
        if(getLetterOfModule(getModuleOfDNI(numbers)) !== letters.toUpperCase())
        {
            throw Error("La letra no coincide. DNI no valido")
        }

        console.log(`El DNI ${_dni.join("-")} es valido. `);
        
    }catch(e)
    {
        console.error(e.message);
    }
}

//Devolvemos la letra según el array de referencia y la posicion[_module]
function getLetterOfModule(_module, _letters = letras)
{
    return _letters[_module];
}

//Devolvemos el modulo de los números
function getModuleOfDNI(_dniNumbers)
{
    return _dniNumbers % 23;
}

function isCharacter(_char)
{
    return (/[a-zA-Z]/).test(_char);
}



// Nota: probaremos con varios números de DNI tanto válidos como no válidos
validateDNI('0000000-T');     //Hacen falta mas caracteres
validateDNI('000000000-T');   //Sobran caracteres
validateDNI("00000000-j");      //La letra no coincide. DNI invalido
validateDNI("00000000-t");      //La letra coincide. DNI valido
validateDNI(DNIBorja);          //La letra coincide. DNI valido
validateDNI(DNIDarinka);          //La letra  coincide. DNI valido