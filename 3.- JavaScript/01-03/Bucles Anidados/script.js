"use strict";

//Bucles anidados

for(let i = 0; i <3; i++)
{
    console.log(`Reparte la tarta ${i + 1}`);

    for(let j = 0; j < 3; j++)
    {
        console.log(`Reparte la tarta ${i + 1}\n - a la persona ${j +1}`);
    }
}