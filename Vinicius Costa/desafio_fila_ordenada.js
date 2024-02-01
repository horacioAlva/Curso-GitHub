const acumulado = {};

for(const casa of casas){
    if(!acumulado[casa.localidad]){
        acumulado[casa.localidad] = { accumuladoPrecio: 0, contador: 0};
    }
    acumulado[casa.localiad].accumuladoPrecio += casa.precio;
    acumulado[casa.localidad].contador +=1;
}

console.log(acumulado);

const localidades = Object.keys(acumulado);
for(const localidad of localidades){
    console.log(localidad + ' ' + Math.floor(acumulado[localidad].accumuladoPrecio / acumulado[localidad].contador));
}