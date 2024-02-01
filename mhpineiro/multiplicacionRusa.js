function multRusa(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
var p=0;
while(num1 > 0) {
    if(num1 % 2 !== 0) {
        p = p + num2;
    }
    num2 = num2 * 2;
    num1 = ~~(num1 / 2);
}
return(p);
}

var num1 = prompt("Ingrese el primer número:");
var num2 = prompt("Ingrese el segundo número:");
document.write("el producto es = " + multRusa(num1, num2))