function esPrimo (numero) {
    if(numero <= 1){
        return false;
    }

    for(let i = 2; i <numero; i++){
        if(numero %i === 0) {
            return false;
        }
    }
    return true;
}

console.log(esPrimo(4)); 
console.log(esPrimo(9)); 
console.log(esPrimo(15)); 
console.log(esPrimo(7)); 
console.log(esPrimo(29)); 