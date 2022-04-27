const {names, ages} = require("./NombresEdades.js");

console.log("Listado de nombres:")
names.forEach((names) => {
    console.log("- ", names);
});

console.log("Listado de edades:")
ages.forEach((ages) => {
    console.log("- ", ages);
});