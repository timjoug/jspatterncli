const dataHandling = require('./dataHandling')

/**
 * This function will check the arguments passed during the execution and will execute the targeted function.
 * @param {Array} dataToAnalyze - Array of data to analyze
 * @param {Array} argumentList - List of the arguments, passed during the app.js execution
 */
function functionRouter(dataToAnalyze, argumentList) {
    let result = dataToAnalyze,
        filterString = [],
        filterBoolean = false,
        countBoolean = false;
    argumentList.forEach(argument => {
        if (argument.includes('--filter=')) {
            filterString.push(argument.substring(9));
            filterBoolean = true;
        }
        if (argument.includes('--count')) {
            countBoolean = true;
        }
    });
    if (filterBoolean === true) {
        filterString.forEach(process => {
            result = dataHandling.arrayFiltering(result, process);
        })
    }
    if (countBoolean === true) { result = dataHandling.childrenCount(result); }
    return result;
}

module.exports = {
    functionRouter
}