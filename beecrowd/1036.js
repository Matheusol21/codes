var input = require('fs').readFileSync('1036.txt', 'utf8');
var lines = input.split('\r\n');


const valores = lines[0].split(" ")

const A = parseFloat(valores[0]);
const B = parseFloat(valores[1]);
const C = parseFloat(valores[2]);

let delta = B * B - 4 * A * C;
if(A !== 0 && delta > -1){
    let R1 = (-B + Math.sqrt(delta))/ (2*A);
    let R2 = (-B - Math.sqrt(delta))/ (2*A);
console.log(`R1 = ${R1.toFixed(5)}`);
console.log(`R2 = ${R2.toFixed(5)}`);
}else{
    console.log(`Impossivel calcular`);
}

console