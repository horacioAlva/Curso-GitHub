const poema =
Todo herói tem um medo
Na hora do medo
Ranger os dentes
Estalar o dedo

E revelar para o mundo
Um pequeno descuido
De meio segundo
Estranho segredo

Que não pode te contar
A verdade é que o herói
Tem medo

De amar tem medo
A verdade é que o herói
Tem medo

Nem o calor mais profundo
Derrete este chumbo
Que é o coração
Do homem de aço
Gira em torno do mundo
Em meio segundo
Mas algo lhe causa embaraço

Que não pode te contar
A verdade é que o herói
Tem medo

De amar tem medo
A verdade é que o herói
Tem medo;

function reemplazarTexto (textoBuscar, reemplazo, texto){
    const regex = new RegExp(textoBuscar, 'gi');
    return texto.replace(regex, reemplazo);
}

console.log(reemplazarTexto('medo', 'MEDO', poema))