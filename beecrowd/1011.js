var input = require('fs').readFileSync('1011.txt', 'utf8');
var lines = input.split('\r\n');

const raio = parseInt(lines[0]);
const pi =3.14159;

const volume = (4 / 3) * pi * Math.pow(raio,3);
console.log(`VOLUME = ${volume.toFixed(3)}`);

