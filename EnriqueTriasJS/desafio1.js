//Número primo
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número: ', (numero) => {
    numero = parseInt(numero);

    function esPrimo(numero) {
        if (numero <= 1) {
            return false;
        } else {
            for (let i = 2; i < numero; i++) {
                if (numero % i === 0) {
                    return false;
                }
            }
            return true; 
        }
    }

    if (esPrimo(numero)) {
        console.log(numero + ' es un número primo');
    } else {
        console.log(numero + ' no es un número primo');
    }

    rl.close();
});