var input = require('fs').readFileSync('1038.txt', 'utf8');
var lines = input.split('\r\n');
const tabelaDepreço = {
    1: 4.00,
    2: 4.50,
    3: 5.00,
    4: 2.00,
    5: 1.50,
};
const tabela = lines[0].split(" ");
const codeProd = parseFloat(tabela[0]);
const qntd = parseFloat(tabela[1]);
const prod = parseFloat(tabelaDepreço[3]);


const valorPago = tabelaDepreço[codeProd]* qntd;
console.log(`Total: R$ ${valorPago.toFixed(2)}`);
//