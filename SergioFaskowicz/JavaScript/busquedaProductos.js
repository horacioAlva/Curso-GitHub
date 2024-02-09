//It , nombre del producto, y flecha de inspiracion

const listadoProduct = [ 
    {
        id: 1,
        nombreProduct: 'manteca',
        marca: 'Danica',
        fechaVto: '2024-04-22'
    },
    {
        id: 2,
        nombreProduct: 'arroz',
        marca: 'Gallo',
        fechaVto: '2024-04-29'
    },
    {
        id: 3,
        nombreProduct: 'leche',
        marca: 'argenta',
        fechaVto: '2024-03-22'
    },
    {
        id: 4,
        nombreProduct: 'fideos',
        marca: 'vicente',
        fechaVto: '2024-09-22'
    },
    {
        id: 5,
        nombreProduct: 'jamon',
        marca: 'Danica',
        fechaVto: '2024-12-22'
    },
]

// Crear dos funciones para buscar productos acorde a los parametros:

function buscarProductPorId(id){

    return listadoProduct.filter((producto)=> producto.id === id);
}
console.log(buscarProductPorId(2));

function buscarProductPorFecha(fecha) {
    return listadoProduct.filter((producto)=> producto.fechaVto === fecha);
}
console.log(buscarProductPorFecha('2024-12-22'));
