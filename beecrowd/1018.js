var input = require('fs').readFileSync('1018.txt', 'utf8');
var lines = input.split('\r\n');

let notasGeral = parseInt(lines[0]);
//const cedulas = lines[1].split(" ")
//const nota100 = parseInt(cedulas[0]);
//const nota50 = parseInt(cedulas[1]);
//const nota20 = parseInt(cedulas[2]);
//const nota10 = parseInt(cedulas[3]);
//const nota5 = parseInt(cedulas[4]);
//const nota2 = parseInt(cedulas[5]);
//const nota1 = parseInt(cedulas[6]);
const nota100 = 100
const nota50 = 50
const nota20 = 20
const nota10 = 10
const nota5 = 5
const nota2 = 2
const nota1 = 1

const qntd100 = Math.trunc(notasGeral / nota100);
notasGeral %=nota100
const qntd50 = Math.trunc(notasGeral / nota50);
notasGeral %=nota50
const qntd20 = Math.trunc(notasGeral / nota20);
notasGeral %=nota20
const qntd10 = Math.trunc(notasGeral / nota10);
notasGeral %=nota10
const qntd5 = Math.trunc(notasGeral / nota5);
notasGeral %=nota5
const qntd2 = Math.trunc(notasGeral / nota2);
notasGeral %=nota2
const qntd1 = Math.trunc(notasGeral / nota1);
notasGeral %=nota1

console.log(`${qntd100} nota(s) de R$ 100,00`);
console.log(`${qntd50} nota(s) de R$ 50,00`);
console.log(`${qntd20} nota(s) de R$ 20,00`);
console.log(`${qntd10} nota(s) de R$ 10,00`);
console.log(`${qntd5} nota(s) de R$ 5,00`);
console.log(`${qntd2} nota(s) de R$ 2,00`);
console.log(`${qntd1} nota(s) de R$ 1,00`);

console