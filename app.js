const { data } = require('./data');
const manageArgs = require('./scripts/manageArgs');
const dataHandling = require('./scripts/dataHandling')

const parsedArgs = manageArgs.parseArgs(process.argv);

let result = dataHandling.filterAnimalsByNames(data, parsedArgs.nameFilters);

if (parsedArgs.count === true) { result = dataHandling.childrenCount(result); }

console.log(JSON.stringify(result));