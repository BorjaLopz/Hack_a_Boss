"use strict";

/////////////////////////

/* Prueba Enumeradores */

var config = {}
config.type = ["RED", "BLUE", "YELLOW"];

console.log(config.type[0]);


/////////////////////////

/* Clases */

class Rectangulo
{
    /*Constructor*/
    constructor(alto, ancho)
    {
        this.alto = alto;
        this.ancho = ancho;
    }

    //Metodos

    CalcularArea()
    {
        return this.alto * this.ancho;
    }
}

const rect1 = new Rectangulo(10, 5);
console.log(rect1.CalcularArea());

/////////////////////////

class Persona
{
    constructor(_nombre = "default", _profesion = "default", _dni = "default")
    {
        this._nombre = _nombre;
        this._profesion = _profesion;
        this._dni = _dni;
    }


    //Metodos
    MostrarPersona()
    {
        console.log(`${this._nombre} con DNI ${this._dni}, trabaja de ${this._profesion}.`);
    }

    //Setters
    setName(_nombre)
    {
        this._nombre = _nombre;
    }

    setDNI(_dni)
    {
        this._dni = _dni;
    }

    setProfesion(_profesion)
    {
        this._profesion = _profesion;
    }
}

const pers1 = new Persona();
pers1.MostrarPersona();

const pers2 = new Persona("Manolo", "carpintero", "51129885B");
pers2.MostrarPersona();

pers2.setName("Carlos");
pers2.setDNI("11111111J")
pers2.setProfesion("ebanista");
pers2.MostrarPersona();



