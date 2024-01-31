const nombres = [
    "Franco",
    "Julian",
    "Enzo",
    "Javier",
    "Leandro",
    "Juan Pablo",
    "Juan Ignacio",
    "Juan Guillermo",
    "Jesus",

]

const ordenadors = nombres.sort((a, b)=> {
    const nombreA = a.split(' ') [0];
    const nombreB = b.split(' ') [0];
    return nombreA <  nombreB? -1 : nombreA > nombreB? 1 : 0;
});

console.log(ordenadors);