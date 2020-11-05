const dataHandling = require('./dataHandling')

/**
 * This function will check the arguments passed when the file is executed.
 * Respecting the existing argument, linked functions are executed.
 * This function is directly called when the file is executed with a node command.
 * @param {Array} dataToAnalyze - Array of data to analyze
 */
function routingFunction(dataToAnalyze) {
    let finalRes = dataToAnalyze,
        filterStr = [],
        filterBool = false,
        countBool = false;
    process.argv.forEach(elt => {
        if (elt.includes('--filter=')) {
            filterStr.push(elt.substring(9));
            filterBool = true;
        }
        if (elt.includes('--count')) {
            countBool = true;
        }
    });
    if (filterBool === true) {
        filterStr.forEach(process => {
            finalRes = dataHandling.filteredResult(finalRes, process);
        })
    }
    if (countBool === true) { finalRes = dataHandling.countResult(finalRes); }
    return finalRes;
}

module.exports = {
    routingFunction
}