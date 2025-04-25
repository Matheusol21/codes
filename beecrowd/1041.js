var input = require('fs').readFileSync('1041.txt', 'utf8');
var lines = input.split('\r\n');

const info = lines[0].split(" ");
const X = parseFloat(info[0]);
const Y = parseFloat(info[1]);
if(X=== 0 && Y===0){
    console.log(`${"Origem"}`);
}else if(X===0){
    console.log(`${"Eixo Y"}`);
}else if(Y===0){
    console.log(`${"Eixo X"}`);
}else if(X>0 && Y>0){
    console.log(`${"Q1"}`);
}else if (X<0&&Y>0){
    console.log(`${"Q2"}`);
}else if(X>0&&Y<0){
    console.log(`${"Q4"}`);
}else if(X<0&&Y<0){
    console.log(`${"Q3"}`);
}

//