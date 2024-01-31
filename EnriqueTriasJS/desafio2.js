//Arreglos similares
function sonSimilares(arregloA, arregloB){
    if (arregloA.length !== arregloB.length){
        return false
    }

    for(let i = 0, total = arregloA.length; i <= total; i++){
        if(arregloA[i] !== arregloB[i]){
            return false;
        }
    }
    return true
}

console.log(sonSimilares([1, 2],[1, 2, 4]));
console.log(sonSimilares([1, 2, 3],[1, 2, 3]));
console.log(sonSimilares([1, 2, 4],["1", "2", "4"]));