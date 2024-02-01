//Búsqueda de productos

const productos = [
    {
        id: 1,
        nombreProducto: "leche",
        marca: "Sancor",
        fechaExpiracion: '2025-12-31'
    },
    {
        id: 2,
        nombreProducto: "queso",
        marca: "Vacalin",
        fechaExpiracion: '2025-08-30'
    },
    {
        id: 3,
        nombreProducto: "manteca",
        marca: "Yolcle",
        fechaExpiracion: '2025-01-31'
    },
    {
        id: 4,
        nombreProducto: "alfajor",
        marca: "Terrabusi",
        fechaExpiracion: '2024-07-03'
    },
];

function buscadorId(valor){
    return productos.filter((producto) => producto.id === id);
};


function buscadorExpiracion(valor){

};

console.log(buscadorId(2));
console.log(buscador(fechaExpiracion));
