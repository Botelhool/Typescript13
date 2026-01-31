import leia = require("readline-sync");

const cores: Array <string> = new Array<string>(5);

for(let cor = 0;cor < cores.length ; cor++){
   //Usando o método push ele ja adiciona ao final cada cor que vai digitando 
   //o sort() já coloca na ordem alfabética
    cores[cor]=leia.question("Digite uma cor: "), cores.push(),cores.sort();
   
}


console.table(cores);