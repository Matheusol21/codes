var input = require('fs').readFileSync('1059.txt', 'utf8');
var lines = input.split('\r\n');

let i= 1
for(i; i<=100;i++){
    if(i%2 == 0){
        console.log(`${i}`);
    }
}