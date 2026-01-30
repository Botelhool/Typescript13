import leia = require("readline-sync");

const cores: Set <string> = new Set <string>(); 

cores.add("Azul");
cores.add("verde");
cores.add("vermelho");
cores.add("Amarelo");
cores.add("Roxo");
cores.add("Rosa");
cores.add("Laranja");

numeros.push(leia.questionInt("Digite um número: "));

//console.table(numeros);

for(let cor of cores){
    console.log(cor);
}

console.table(cores);
// verifica se exite na lista 
console.log("A verde existe : ", );