const data = require('./data');
const manageArgs = require('./scripts/manageArgs');

const result = manageArgs.parseArgs(data.data, process.argv);
console.log(JSON.stringify(result));