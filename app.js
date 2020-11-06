const data = require('./data');
const manageArgs = require('./scripts/manageArgs');
const dataHandling = require('./scripts/dataHandling')

let result = data.data;
const parsedArgs = manageArgs.parseArgs(process.argv);

parsedArgs.nameFilters.forEach(nameFilter => {
    result = dataHandling.filterAnimalsByNames(result, nameFilter);
})
if (parsedArgs.count === true) { result = dataHandling.childrenCount(result); }

console.log(JSON.stringify(result));