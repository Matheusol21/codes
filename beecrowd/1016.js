var input = require('fs').readFileSync('1016.txt', 'utf8');
var lines = input.split('\r\n');

const carroYkm = parseInt(lines[0]);
const horas = 60;
const minutos = 2;
const distancia = (carroYkm * minutos);

console.log(`${distancia} minutos`);


console