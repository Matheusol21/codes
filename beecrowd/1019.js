var input = require('fs').readFileSync('1019.txt', 'utf8');
var lines = input.split('\r\n');

// let tempoTotal = parseInt(lines[0]);

// // 60*60 =3600
// const horas = Math.floor(tempoTotal / 3600);
// tempoTotal %= 3600;

// const minuto = Math.floor(tempoTotal / 60);
// tempoTotal %= tempoTotal% 60
// const segundos = tempoTotal % 60;

// //console.log(`${horas}:${minuto}:${segundos}`);
// console.log(`${horas}:${minuto}:${segundos}`);
// //0:9:16

let tempoTotal = parseInt(lines[0]);

const horas = Math.floor(tempoTotal / 3600);
tempoTotal %= 3600;

const minutos = Math.floor(tempoTotal / 60);
const segundos = tempoTotal % 60;

console.log(`${horas}:${minutos}:${segundos}`);

console