import leia = require("readline-sync");

let numero1,numero2 :number; 

numero1 = leia.questionFloat("Digite o primeiro número: ");

numero2 = leia.questionFloat("Digite segundo número numero: ");

console.log(`${numero1} + ${numero2} = ${numero1+numero2}`);

