// o mais alto, mais baixo, mais gordo  o mais magro
// qual sua altura, peso, codigo 
var prompt = require('prompt-sync')();


let maisGordo = 0 
let maisMagro = 0 
let vetorP = 0
let vetorC = 0
let Altura = []
let Peso = []
let codigo = 1
let n = 0


while(codigo != 0){
    Altura [n] = Number(prompt('Qual a sua altura? ' ));
    Peso [n] = Number(prompt('Qual o seu peso? '));
    codigo  = Number(prompt('Qual o seu codigo? '))
    n++;
}


    let maisAlto = Altura [0];
    let maisBaixo = Altura [0];
    vetorP = Peso [0];
    vetorC = 0;

for(i= 0; i<Altura.length; i++){
    if( Altura[i]>maisAlto){
        maisAlto = Altura[i]
    }
    else if(Altura[i]<maisBaixo){
        maisBaixo = Altura[i]
    }
}




console.log(`${i}, ${maisAlto}`)
console.log(`${i}, ${maisBaixo}`)
//console.log(`${codigo}, ${maisGordo}`)
//console.log(`${codigo}, ${maisMagro}`)
//console.log(`A media de altura é ${mediaAltura}`)
//console.log(`A media de peso é ${mediaPeso}` )






























