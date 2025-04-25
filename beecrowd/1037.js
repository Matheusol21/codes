var input = require('fs').readFileSync('1037.txt', 'utf8');
var lines = input.split('\r\n');

const limite = parseFloat(lines[0]);

if(limite >= 0 && limite <=25){
    console.log(`Intervalo [0,25]`);
}else if(limite >= 25 && limite <=50){
    console.log(`Intervalo [25,50]`);
}else if(limite >= 50 && limite <=75){
    console.log(`Intervalo [50,75]`);
}else if(limite >= 75 && limite <=100){
    console.log(`Intervalo [75,100]`);
}else{  
    console.log(`Fora de intervalo`);
}
    

   




console