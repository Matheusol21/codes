var input = require('fs').readFileSync('1021.txt', 'utf8');
var lines = input.split('\r\n');

// const dinheiro = lines[0].split(".");
// let cedulas = parseInt(dinheiro[0]);
// let moedas = parseInt(dinheiro[1]);
// //cedulas
// const nota100 = 100;
// const nota50 = 50;
// const nota20 = 20;
// const nota10 = 10;
// const nota5 = 5;
// const nota2 = 2;
// //moedas
// let centavos1 = 100;
// let centavos50 = 50;
// let centavos25 = 25;
// let centavos10 = 10;
// let centavos5 = 5;
// let centavos01 = 1;
// //qnd de notas
// const qntd100 = Math.trunc(cedulas / nota100);
// cedulas %=nota100;
// const qntd50 = Math.trunc(cedulas / nota50);
// cedulas %=nota50;
// const qntd20 = Math.trunc(cedulas / nota20);
// cedulas %=nota20;
// const qntd10 = Math.trunc(cedulas / nota10);
// cedulas %=nota10;
// const qntd5 = Math.trunc(cedulas / nota5);
// cedulas %=nota5;
// const qntd2 = Math.trunc(cedulas / nota2);
// cedulas %=nota2;

// moedas *= 100;
// //qntd de moedas
// const cents1 = Math.trunc(moedas / centavos1);
// moedas %= centavos1;
// const cents50 = Math.trunc(moedas / centavos50);
// moedas %= centavos50;
// const cents25 = Math.trunc(moedas / centavos25);
// moedas %= centavos25
// const cents10 = Math.trunc(moedas / centavos10);
// moedas %= centavos10;
// const cents5 = Math.trunc(moedas / centavos5);
// moedas %= centavos5
// const cents01 = Math.trunc(moedas / centavos01);
// moedas %= centavos01;


// console.log(`	
// NOTAS:`)
// console.log(`${qntd100} nota(s) de R$ 100.00`);
// console.log(`${qntd50} nota(s) de R$ 50.00`);
// console.log(`${qntd20} nota(s) de R$ 20.00`);
// console.log(`${qntd10} nota(s) de R$ 10.00`);
// console.log(`${qntd5} nota(s) de R$ 5.00`);
// console.log(`${qntd2} nota(s) de R$ 2.00`);

// console.log(`MOEDAS:`);
// console.log(`${cents01} moeda(s) de R$ 1.00`);
// console.log(`${cents50} moeda(s) de R$ 0.50`);
// console.log(`${cents25} moeda(s) de R$ 0.25`);
// console.log(`${cents10} moeda(s) de R$ 0.10`);
// console.log(`${cents5} moeda(s) de R$ 0.05`);
// console.log(`${cents1} moeda(s) de R$ 0.01`);
const dinheiro = lines[0].split(".");
let cedulas = parseInt(dinheiro[0]);
let moedas = dinheiro[1] ? parseInt(dinheiro[1].padEnd(2, '0')) : 0;

// Notas em reais
const nota100 = 100;
const nota50 = 50;
const nota20 = 20;
const nota10 = 10;
const nota5 = 5;
const nota2 = 2;

// Centavos em inteiros
const centavos1 = 100;  // 1 real é 100 centavos
const centavos50 = 50;
const centavos25 = 25;
const centavos10 = 10;
const centavos5 = 5;
const centavos01 = 1;

// Quantidade de notas
const qntd100 = Math.trunc(cedulas / nota100);
cedulas %= nota100;
const qntd50 = Math.trunc(cedulas / nota50);
cedulas %= nota50;
const qntd20 = Math.trunc(cedulas / nota20);
cedulas %= nota20;
const qntd10 = Math.trunc(cedulas / nota10);
cedulas %= nota10;
const qntd5 = Math.trunc(cedulas / nota5);
cedulas %= nota5;
const qntd2 = Math.trunc(cedulas / nota2);
cedulas %= nota2;

// Quantidade de moedas
const cents1 = Math.trunc(cedulas);
const cents50 = Math.trunc(moedas / centavos50);
moedas %= centavos50;
const cents25 = Math.trunc(moedas / centavos25);
moedas %= centavos25;
const cents10 = Math.trunc(moedas / centavos10);
moedas %= centavos10;
const cents5 = Math.trunc(moedas / centavos5);
moedas %= centavos5;
const cents01 = Math.trunc(moedas / centavos01);

console.log(`NOTAS:`);
console.log(`${qntd100} nota(s) de R$ 100.00`);
console.log(`${qntd50} nota(s) de R$ 50.00`);
console.log(`${qntd20} nota(s) de R$ 20.00`);
console.log(`${qntd10} nota(s) de R$ 10.00`);
console.log(`${qntd5} nota(s) de R$ 5.00`);
console.log(`${qntd2} nota(s) de R$ 2.00`);

console.log(`MOEDAS:`);
console.log(`${cents1} moeda(s) de R$ 1.00`);
console.log(`${cents50} moeda(s) de R$ 0.50`);
console.log(`${cents25} moeda(s) de R$ 0.25`);
console.log(`${cents10} moeda(s) de R$ 0.10`);
console.log(`${cents5} moeda(s) de R$ 0.05`);
console.log(`${cents01} moeda(s) de R$ 0.01`);
