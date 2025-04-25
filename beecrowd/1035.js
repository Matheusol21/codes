var input = require('fs').readFileSync('1035.txt', 'utf8');
var lines = input.split('\r\n');

const dados =lines[0].split(" ")

const valorA = parseInt(dados[0]);
const valorB = parseInt(dados[1]);
const valorC = parseInt(dados[2]);
const valorD = parseInt(dados[3]);
const somaCcmD = (valorC + valorD);
const somaAcmB = (valorA + valorB)
// if (B > C && D > A && somaCcmD > somaA&B && valorc > 0 && valordD > 0 && valorA % 2 ===0)
if (valorB > valorC && valorD > valorA && somaCcmD> somaAcmB && valorC > 0 && valorD > 0 && valorA % 2 === 0){
    console.log(`Valores aceitos`);
}else{
    console.log(`Valores nao aceitos`);
}





console