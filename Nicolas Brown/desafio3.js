// desafio 2 - determinar si los arrays son similares

function numeroAleatorio(num1,num2){
    var valor = Math.floor(Math.random() * (num1-num2) + num2)
    return (`Un valor aleatorio entre ${num1} y ${num2} es ${valor}.`)
}
const number1 = Number(window.prompt("Type a number", ""));
const number2 = Number(window.prompt("Type a second number", ""));
document.getElementById("demo").innerHTML = (numeroAleatorio(number1,number2));
//console.log(numeroAleatorio(1,5))