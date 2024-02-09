//Funcion para numero primo

function Primo(numero){
    if (numero <=1){
        return false;
    }

    for(let i=2; i< numero; i++){
        if(numero % i === 0){
            return false;
        }
    }

    return true;
}


console.log(Primo(4));
console.log(Primo(7));
console.log(Primo(12));
console.log(Primo(2));
console.log(Primo(98));
console.log(Primo(3));
console.log(Primo(1));
console.log(Primo(11));