var input = require('fs').readFileSync('1014.txt', 'utf8');
var lines = input.split('\r\n');

const distanciakm = parseInt(lines[0]);
const totalGasolina = parseFloat(lines[1])


const consumoMed = (distanciakm / totalGasolina);
console.log(`${consumoMed.toFixed(3)} km/l`);
a