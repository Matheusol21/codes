var input = require('fs').readFileSync('1070.txt', 'utf8');
var lines = input.split('\r\n');

let num = parseInt(lines[0]);
let i = 0;
if(num %2 == 0){
    num += 1
}

for(let i = 0;i<6;i++){
    console.log(`${num}`)
    num+=2
}





//