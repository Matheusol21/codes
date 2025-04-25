var input = require('fs').readFileSync('1040.txt', 'utf8');
var lines = input.split('\r\n');

const N1 = parseFloat(lines[0]);
const N2 = parseFloat(lines[1]);
const N3 = parseFloat(lines[2]);
const N4 = parseFloat(lines[3]);
const exame = parseFloat(lines[4]);
const peso1 = 2;
const peso2 = 3;
const peso3 = 4;
const peso4 = 1;

// Cálculo da média ponderada
const media = ((N1 * peso1) + (N2 * peso2) + (N3 * peso3) + (N4 * peso4)) / (peso1 + peso2 + peso3 + peso4);
if (media >= 7.0) {
    console.log(`Media: ${media.toFixed(1)}`);
    console.log(`Aluno aprovado.`);
} else if (media < 5.0) {
    console.log(`Media: ${media.toFixed(1)}`);
    console.log(`Aluno reprovado.`);
} else {
    console.log(`Aluno em exame.`);
    console.log(`Nota do exame: ${exame.toFixed(1)}`);
    
    const novaMedia = (media + exame) / 2;
    if (novaMedia >= 5.0) {
        console.log(`Aluno aprovado.`);
    } else {
        console.log(`Aluno reprovado.`);
    }
    console.log(`Media final: ${novaMedia.toFixed(1)}`);
}


// if (media >= 7.0) {
//     console.log(`Media: ${media.toFixed(1)}`);
//     console.log("Aluno aprovado.");
// } else if (media < 5.0) {
//     console.log("Aluno reprovado.");
// } else {
//     console.log("Aluno em exame.");
//     console.log(`Nota do exame: ${exame.toFixed(1)}`);
    
//     // Cálculo da nova média com o exame
//     const novaMedia = (media + exame) / 2;

//     if (novaMedia >= 5.0) {
//         console.log("Aluno aprovado.");
//         console.log(`Media final: ${novaMedia.toFixed(1)}`);
//     } else {
//         console.log("Aluno reprovado.");
//         console.log(`Media final: ${novaMedia.toFixed(1)}`);
//     }
// }






//if(media >5.0&& media<6.9){
  //  const novaMedia =media+ exame/2;






//