//Número aleatorio

function numeroAleatorio(numeroA, numeroB){
    return Math.floor(Math.random() * (numeroA - numeroB + 1) + numeroB);
}

console.log(numeroAleatorio(4 , 12));
console.log(numeroAleatorio(-12 , 75));
console.log(numeroAleatorio(-123 , -3));
console.log(numeroAleatorio(0, 1000));
