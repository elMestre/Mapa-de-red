const coches = require('./coches.json');
const misiles = require('./misiles.json');

const vehiculos = Object.assign(coches, misiles)

let imprimir = (coche) => {
    console.log("--------------------------")
    console.log("  Nombre: " + coche.modelo);
    console.log("  Marca : " + coche.marca);
    console.log("  Color : " + coche.color);
    console.log("  Año   : " + coche.año);    
}

vehiculos.forEach(vehiculo => { 
    imprimir(vehiculo) 
})

console.log("====================")
