// arreglos si son iguales en tamaño y elementos
 function sonSimilares(arregloA, arregloB) {
    if(arregloA.length !== arregloB.length) {
        return false;
    }

    for(let indice = 0 , total = arregloA.length; indice <=total; indice++)
        if(arregloA[indice]!== arregloB[indice]){
            return false;
        }
        return true;
} 

 console.log(sonSimilares([1,5],[5,1,3])); 
 console.log(sonSimilares([1,5,9,3],[1,5,9,3]));
 console.log(sonSimilares([1,5],[1,'5']));



 
  
