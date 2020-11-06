const dataHandling = require('./dataHandling')

/**
 * This function will check the arguments passed during the execution and will execute the targeted function.
 * @param {Array} listToAnalyze - List of data to analyze
 * @param {Array} argumentList - List of the arguments, passed during the app.js execution
 */
function parseArgs(listToAnalyze, argumentList) {
    let result = listToAnalyze,
        count = false;

    const [_, __, ...args] = argumentList;
    const nameFilters = args.map(argument => {
            if (argument.includes('--filter=')) {
                return argument.substring(9)
            }
        })
        .filter(Boolean)

    args.forEach(argument => {
        if (argument.includes('--count')) {
            count = true;
        }
    });

    nameFilters.forEach(nameFilter => {
        result = dataHandling.filterAnimalsByNames(result, nameFilter);
    })
    if (count === true) { result = dataHandling.childrenCount(result); }
    return result;
}

module.exports = {
    parseArgs
}