var input = require('fs').readFileSync('1072.txt', 'utf8');
var lines = input.split('\r\n');

const N = parseInt(lines[0]);

let dentro = 0;
let fora = 0;

for(let i =1;i<=N;i++){
    const valor = parseInt(lines[i]);
    if(valor>=10&&valor<=20){
        dentro++;
    }else{
        fora++;
    }
}
console.log(`${dentro} in`);
console.log(`${fora} out`);


//