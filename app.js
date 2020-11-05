const data = require('./data');
const manageArgs = require('./scripts/manageArgs');

const result = manageArgs.routingFunction(data.data);
console.log(JSON.stringify(result));