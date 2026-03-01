const lodash=require('lodash')

const name= ['tarun','kumar','aravind'];
const capitalized=lodash.map(name,lodash.capitalize);

console.log(capitalized);