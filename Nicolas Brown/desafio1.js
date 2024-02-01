// desafio 1 - determinar si el numero ingresado es primo

function esprimo(num){

    if (num <= 1){
        return (`El numero ${num} no es primo, ya que es menor o igual a 1.`)
    }
    for (let i = 2; i < num; i++){
        if(num % 1 === 0){
            return (`El numero ${num} no es primo.`)
        }
    }
    return (`El numero ${num} es primo.`)
}

console.log(esprimo(1))//true
console.log(esprimo(2))//true
console.log(esprimo(4))//false