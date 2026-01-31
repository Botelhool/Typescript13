import leia = require("readline-sync");

const numeros: Array <number> = new Array<number>(2,5,1,3,4,9,7,8,10,6);

const procurandoNumero: number = leia.questionInt("Digite um número: ");
const encontrado: Number = numeros.indexOf(procurandoNumero);

if(procurandoNumero === -1){
    console.log(`O ${procurandoNumero} não foi encontrado`);
}else{
    console.log(`O  número ${encontrado} foi encontrado`);
}





