console.log("LOGICOS");

let num = 5;

/////IGUALDAD ESTRICTA (===)

console.log("Igualdad");

console.log(num === 5);
console.log(num === 4);
console.log(num === "5");

console.log("");

/////DESIGUALDAD ESTRICTA (!==)
console.log("Desigualdad");

console.log(num !== 5);
console.log(num !== 4);
console.log(num !== "5");

console.log("");

/////MAYOR QUE ESTRICTO (>)
console.log("Mayor Estricto");

console.log(num > 5);
console.log(num > 4);
console.log(num > "5");

console.log("");

/////MAYOR QUE ESTRICTO (<)
console.log("Mayor Estricto");

console.log(num < 5);
console.log(num < 4);
console.log(num < "5");

console.log("");

/////MAYOR O IGUAL QUE ESTRICTO (>=)
console.log("Mayor Estricto");

console.log(num >= 5);
console.log(num >= 4);
console.log(num >= "5");

console.log("");

/////MENOR O IGUAL QUE ESTRICTO (<=)
console.log("Menor Estricto");

console.log(num <= 5);
console.log(num <= 4);
console.log(num <= "5");

console.log("");

/////AND (Y) (&&)
/////Devuelve TRUE cuando todas las condiciones son TRUE
/////Devuelve FALSE cuando alguna de las condiciones es FALSE
console.log("AND");

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(num > 3 && num < 7);
console.log(num > 10 && num < 15);

console.log("");

/////OR (O) (||)
/////Devuelve TRUE cuando alguna de las condiciones es TRUE
/////Devuelve FALSE cuando todas las condiciones son FALSE
console.log("OR");

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(num % 5 === 0 || num % 2 === 0); //num = 5; 5 % 5 === 0 - true; 5 % 2 === 0 - false
console.log(num % 3 === 0 || num % 2 === 0); //num = 5; false | false

console.log("");

/////NEGACION (NO) (!)
/////devuelve el valor booleano contrario. Si tenemos TRUE, devolverá FALSE. Si tenemos FALSE, devolverá TRUE.
console.log("NEGACION");

console.log(!true);
console.log(!false);
console.log(!(num % 5 === 0 || num % 2 === 0)); //num = 5; 5 % 5 === 0 - true; 5 % 2 === 0 - false. Como dara true, negado nos dara false. 
console.log(!(num > 10 && num < 15)); //num = 5; false | false. Como nos da false, negado nos dara true

console.log("");

/////PRIORIDA: la misma que en matematicas
/////Parentesis, negación, potencia, multiplicación y división, suma y resta, comparación, and y or.
console.log("PRIORIDAD");

console.log(4 + 2 * 5); //14
console.log((4 + 2) * 5); //30




