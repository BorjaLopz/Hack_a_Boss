"use strict";

let nombre = "Marta";
let edad = 27;

if(edad < 0)
{
    console.log(`\"${edad}\" no es una edad valida.`)
} 
else if(edad < 12)
{
    console.log(`A ${nombre} le corresponde el descuento infantil (menos de 12 años)`);
}
else if(edad < 30)
{
    console.log(`A ${nombre} le corresponde el descuento infantil (menos de 30 años)`);
}
else
{
    console.log(`A ${nombre} no le corresponde ningun descuento`);
}