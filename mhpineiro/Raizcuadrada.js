function raizcua(num){
    num = Number(num);
    tol = Number(tol);
    var R=1;
    var rAnt = 0;
    var dif = Math.abs(rAnt-R);
    while(dif >= tol) {
        rAnt = R;
        R = 0.5 * (rAnt + (num / rAnt));
        dif = Math.abs(rAnt-R);
    }
    return(R);
}

var num = prompt("Ingrese el número:");
var tol = prompt("Ingrese la tolerancia:");
console.log("la Raiz cuadrada de "+num+" es "+raizcua(num));
document.write("la Raiz cuadrada de "+num+" es "+raizcua(num));