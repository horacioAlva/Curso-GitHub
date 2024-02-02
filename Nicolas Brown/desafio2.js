// desafio 2 - determinar si los arrays son similares

function SonSimilares(array1,array2){
    document.getElementById("demo1").innerHTML = "array1 :"+array1+" array2 : "+array2;
    if (array1.length !== array2.length){
        document.getElementById("demo2").innerHTML = "Los arrays no tienen la misma longitud";
        return false
    }
    for (let i = 0, total = array1.length; i <= total; i++){
        if (array1[i] !== array2[i]){
            document.getElementById("demo2").innerHTML = "Los valores del elemento "+i+" no coinciden.";
            return false
        }
    }
    document.getElementById("demo2").innerHTML = "Los arrays son similares.";
    return true
}

//console.log(SonSimilares([1,2,3],[1,2]))
//console.log(SonSimilares([1,2,3],[1,2,3]))
console.log(SonSimilares([1,2,3],[1,2,'3']))
//console.log(SonSimilares(['1',2,3],[1,2,3]))