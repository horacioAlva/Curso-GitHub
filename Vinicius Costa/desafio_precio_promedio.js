const acumulado = {};

for(const casa of casas){
    if(!acumulado[casa.localidad]){
        acumulado[casa.localidad].accumuladoPrecio += casa.precio;
        acumulado[casa.localidad].contador += 1;
    }
}

console.log(acumulado);

const localidades = Object.keys(acumulado);

for(const localidad of localidades){
    console.log(localidad + ' ' + Math.floor(acumulado[localidad].accumuladoPrecio / acumulado[localidad].contador));
}