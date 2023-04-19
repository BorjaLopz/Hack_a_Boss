const fs = require('fs');
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

fs.readFile('names.csv', (err, data) =>
{
    if(err)
    {
        console.error(err);
    }
    const decodeText = decoder.write(data);
    const lines = decodeText.split('\r\n');
    const keys = lines[0].split(",");

    for(let i = 1; i < lines.length; i++)
    {
        const [nombre, apellido] = lines[i].split(",");
        console.log(`${keys[0].toUpperCase()}, ${nombre}\t${keys[1].toUpperCase()}, ${apellido}`)
    }
})

/*
const names = ["Juan", "Pedro", "Marcos", "Rafa"];

fs.writeFile('names.txt', names.toString(), err =>
{
    if(err)
    {
        console.error(err);
    }
})*/