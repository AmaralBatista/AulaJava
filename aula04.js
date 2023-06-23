//mostra apenas numeros primos no console 


//Numero primo e um numero natural que tem exatamente dois divisores positivos e distintos. 

//let numeoros primos 

//numero

//let i = 0
//let i2 = 0



    

    

 

 
 
 
 
 
    //     if(i %2 == 0 ){
    //     console.log('par',i);
    // }
    //     else{
    //  console.log(i,'impar'); 
    

let valorDeEntrada = 100;

for(let i= 2; i <= valorDeEntrada; i++){
    let ehUmNumeroPrimo = true;
    for(let j=2; j<i; j++){
    if(i%j==0){
        ehUmNumeroPrimo = false;
        break;
    }
    }
if(ehUmNumeroPrimo){
    console.log(`${i} é um numero primo`);
}
}

// 1 a partir do vetor de exemplo quero que seja printado a soma de entrada let vetor = [3,5,6,2,4,8,9,14];
 
// exemplo de saida 
// a soma total dos é 9999999999999
// a soma total do impares é 99999999










