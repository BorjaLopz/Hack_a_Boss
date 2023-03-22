"use strict";

//Evento Bubbling

let h1 = document.querySelector("h1");
console.log(h1);
let header = document.querySelector("header");
console.log(header);
let body = document.querySelector("body");
console.log(body);

function handleH1Click()
{
    console.log("H1");
}

function handleHeaderClick()
{
    console.log("header");
}

function handleBodyClick()
{
    console.log("Body");
}

h1.addEventListener("click", handleH1Click);
header.addEventListener("click", handleHeaderClick);
body.addEventListener("click", handleBodyClick);


//Evitar el bubbling

function handleHeaderClick(e)
{
    e.stopPropagation();
    console.log("header");
}