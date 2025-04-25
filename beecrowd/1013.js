var input = require('fs').readFileSync('1013.txt', 'utf8');
var lines = input.split('\r\n');

const valores = lines[0].split(" ");
const valorA = parseInt(valores[0]);
const valorB = parseInt(valores[1]);
const valorC = parseInt(valores[2]);

const maiorAB =(valorA + valorB + Math.abs(valorA - valorB)) / 2;
const maiorABC = (maiorAB + valorC + Math.abs(maiorAB - valorC)) / 2;
console.log(`${maiorABC} eh o maior`);
console