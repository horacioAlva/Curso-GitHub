function esPrimo(numero) {
    if (numero <= 1) return false; // 1 y números negativos no son primos

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
