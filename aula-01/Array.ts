import leia = require("readline-sync");

const numeros: Array <number> = new Array <number>(); 

numeros.push(5);
numeros.push(1,5,7,9);

numeros.push(leia.questionInt("Digite um número: "));

//console.table(numeros);

for(let numero of numeros){
    console.log(numero);
}

// verifica se o elemento existe na lista 
console.log("O número 5 existe ?", numeros.includes(5));