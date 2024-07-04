const coches = require('./coches.json');

coches.forEach(coche => {
    console.log("----------------------------------")
    console.log("  " + "Marca:" + coche.marca) //pide acceso a cada atributo por separado
    console.log("  " + "Modelo:" + coche.modelo)
    console.log("  " + "Año:" + coche.año)
    console.log("  " + "Color:" + coche.color)
    
})