
//module.exports --> exports from the module
//require --> imports from another module to current module
const firstModule = require('./first-module');

console.log(firstModule.add(2,3));

try{
    console.log(firstModule.div(0,2));
}
catch(error){
    console.log("Divide by zero is NaN");
}