const nombres = [

    "Vinicius Costa"
    "Juan Gomes"
    "Jorge Porter"
    "Hogan Tran"
];

const ordenadors = nombres.sort((a, b)=> {
    const nombreA = a.split(' ')[0];
    const nombreB = b.split(' ')[0];
    return nombreA < nombreB? -1 : nombreA > nombreB? 1 : 0;

});

console.log(ordenadors);