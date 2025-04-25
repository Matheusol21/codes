var input = require('fs').readFileSync('1071.txt', 'utf8');
var lines = input.split('\r\n');
let soma = 0;
const  X = parseInt(lines[0]);
const  Y = parseInt(lines[1]);
let maior;
let menor;
if(X<Y){
     menor = X
     maior = Y
}else{
     menor = Y
     maior = X
}
for(let i= menor+1; i < maior;i++){
if(i %2 !==0){
    soma= soma+i
}
}
console.log(`${soma}`);









//