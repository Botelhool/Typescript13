import leia = require("readline-sync");

const setNumeros:Set<number> = new Set<number>();

for(let i =0; i < 10; i ++){
    const numero = leia.questionInt("Digite um número:",);
    setNumeros.add(numero)

}

console.table(setNumeros);


