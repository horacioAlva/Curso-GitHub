// Genero un numero aleatorio en un rango de dos numeros,

function numeroAleatorio(numA, numbB) {
    return Math.floor(Math.random() * (numA- numbB) + numbB );
}

console.log(numeroAleatorio(42,63));
console.log(numeroAleatorio(-2,13));
console.log(numeroAleatorio(92,53));
console.log(numeroAleatorio(12,3));