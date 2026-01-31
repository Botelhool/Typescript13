import leia = require("readline-sync");

const setNumeros:Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

 const buscarValor : number = leia.questionInt("Digite um número: ");

for(const numero of setNumeros){
    if(!setNumeros.has(buscarValor)){
        console.log(`O ${buscarValor} não foi encontrado`);
        break;
    }
    
}

