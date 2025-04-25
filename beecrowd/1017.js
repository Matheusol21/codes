var input = require('fs').readFileSync('1017.txt', 'utf8');
var lines = input.split('\r\n');  

const tempo = parseInt(lines[0]);
const velocidade = parseInt(lines[1]);
const qntdLitros = (tempo * velocidade / 12);
console.log(`${qntdLitros.toFixed(3)}`);