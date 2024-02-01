function buscarProductosporId(id) {
    return listaProductos.filter((producto)=> producto.id === id);
    
}
console.log(buscarProductosporId(2));

function buscarProductosPorFecha(fechaA, fechaB) {
    fechaA = new Date(fechaA);
    fechaB = new Date(fechaB);
    return listaProductos.filter((producto)=>{
        const fechaExpiracion = new Date(producto.fechaExpiracion);
        return fechaExpiracion <= fechaA && fechaExpiracion >= fechaB

    });
}
console.log(buscarProductosPorFecha('2022-04-30', '2022-04-15'));