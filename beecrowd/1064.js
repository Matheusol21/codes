var input = require('fs').readFileSync('1064.txt', 'utf8');
var lines = input.split('\r\n');

let soma = 0;
let positivos = 0;
let i = 0;

for(let i = 0; i< lines.length;i++){
    if( parseFloat(lines[i]) > 0){
       positivos++;
       soma = soma + parseFloat(lines[i])
             
    }
}
let media = soma / positivos 

console.log(`${positivos} valores positivos`);
console.log(`${media.toFixed(1)}`);

// console.log(`${i}`);

//c