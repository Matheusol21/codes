var input = require('fs').readFileSync('1094.txt', 'utf8');
var lines = input.split('\r\n');

const n = parseInt(lines[0]); // Número de casos de teste
let c = 0; // Total de coelhos
let r = 0; // Total de ratos
let s = 0; // Total de sapos

for (let i = 1; i <= n; i++) {
    const [quantidade, tipo] = lines[i].split(' '); // Divide a linha em quantidade e tipo
    const q = parseInt(quantidade);

    if (tipo === 'C') {
        c += q;
    } else if (tipo === 'R') {
        r += q;
    } else if (tipo === 'S') {
        s += q;
    }
}

const animal = c + r + s; // Total de cobaias
const porcentagemC = (c / animal) * 100;
const porcentagemR = (r / animal) * 100;
const porcentagemS = (s / animal) * 100;

// Saída formatada
console.log(`Total: ${animal} cobaias`);
console.log(`Total de coelhos: ${c}`);
console.log(`Total de ratos: ${r}`);
console.log(`Total de sapos: ${s}`);
console.log(`Percentual de coelhos: ${porcentagemC.toFixed(2)} %`);
console.log(`Percentual de ratos: ${porcentagemR.toFixed(2)} %`);
console.log(`Percentual de sapos: ${porcentagemS.toFixed(2)} %`);
// const c = (10+5+9+5);
// const r = (6+14+6+14);
// const s = (15+8);
// const animal = c+r+s;
// const porcentagemC = (c/animal)*100;
// const porcentagemR= (r/animal)*100;
// const porcentagemS = (s/animal)*100;

// console.log(`Total: ${animal} cobaias`);
// console.log(`Total de coelhos: ${c}`);
// console.log(`Total de ratos: ${r}`);
// console.log(`Total de sapos: ${s}`);
// console.log(`Percentual de coelhos: ${porcentagemC.toFixed(2)} %`);
// console.log(`Percentual de ratos: ${porcentagemR.toFixed(2)} %`);
// console.log(`Percentual de sapos: ${porcentagemS.toFixed(2)} %`);
//