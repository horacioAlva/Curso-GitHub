//Numero primo
function EsPrimo(numero){
if(numero<=1){
    return false;
}

for(let i=2;i<numero;i++){
    if(numero%i===0){
        return false;
    }
}
return true;
}

console.log(EsPrimo(2));//true
console.log(EsPrimo(4));//false
console.log(EsPrimo(5));//true
console.log(EsPrimo(6));//false
console.log(EsPrimo(7));//true
console.log(EsPrimo(11));//true
console.log(EsPrimo(12));//false
console.log(EsPrimo(29));//true


//Arreglos son similares
function EsSimilar(arr1,arr2){
    let tam = arr1.length;
    let tam2 = arr2.length
    
    if(tam!=tam2){
        return false;
    }

    for(let i =0;i<tam;i++){
        if(arr1[i]!=arr2[i]){
            return false;
        }
    }
    return true;
   

}
console.log('\nLos siguientes arreglos son')
console.log(EsSimilar([3,1,4,38],[3,1,4,38]));

console.log(EsSimilar([3,1,4,38],[3,1,4,39]));

console.log(EsSimilar([3,1,4,38],[3,1,4,38,39]))