// // Valor numeral int:
// const numeroInt = 42; // este es un valor numeral regular
// console.log(numeroInt); // Salida: 42

// Asignación explícita de null a una variable
let miVariable = null;
console.log(miVariable); // Salida: null

function retornoNull() {
  return null;
}

let resultado = retornoNull();
console.log(resultado); // Salida: null


// Variables sin un valor asignado:
let miVariable2;
console.log(miVariable2); // Salida: undefined

function muestraEnConsola(parametro) {
  console.log(parametro);
}

muestraEnConsola(); // Salida: undefined
