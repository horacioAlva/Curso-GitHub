function esPrimo(numero){
var es=true;
var c=2;
while(c <= numero/2  && es) {
    //document.write(c + "-");
    if(numero % c == 0) {
        es = false;
    }
    c = c + 1;
}
return(es);
}

var numero = prompt("Ingrese el número:");
if(esPrimo(numero)){
    document.write(numero + " Es Primo")
}else{
    document.write(numero + " No es primo")
}