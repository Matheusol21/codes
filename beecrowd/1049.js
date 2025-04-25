var input = require('fs').readFileSync('1049.txt', 'utf8');
var lines = input.split('\r\n');

const palavra1 = lines[0];
const palavra2 = lines[1];
const palavra3 = lines[2];

if (palavra1 === "vertebrado") {
    if (palavra2 === "ave") {
        if (palavra3 === "carnivoro") {
            console.log("aguia");
        } else {
            console.log("pomba");
        }
    } else if (palavra2 === "mamifero") {
        if (palavra3 === "onivoro") {
            console.log("homem");
        } else {
            console.log("vaca");
        }
    }
} else if (palavra1 === "invertebrado") {
    if (palavra2 === "inseto") {
        if (palavra3 === "hematofago") {
            console.log("pulga");
        } else {
            console.log("lagarta");
        }
    } else if (palavra2 === "anelideo") {
        if (palavra3 === "hematofago") {
            console.log("sanguessuga");
        } else {
            console.log("minhoca");
        }
    }
}
// const tabela = {
//     vertebrado:{
//         ave:{
//             carnivoro: "aguia",
//             onivoro:"pomba"
//         },
//         mamifero:{
//             onivoro: "homem",
//             herbivoro:"vaca"
//         }
//     },
//     invertebrado:{
//         inseto:{
//             hematofago:"pulga",
//             herbivoro:"lagarta"
//         },
//         anelideo:{
//             hematofago:"sanguessuga",
//             onivoro:"minhoca"
//         }
//     }
    
// }
// const animal = tabela[palavra1][palavra2][palavra3]
// console.log(`${animal}`);
//a