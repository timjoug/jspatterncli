const dataHandling = require('./dataHandling')

/**
 * This function will parse the list of arguments in order to use it for the function execution.
 * @param {Array} argumentList - List of the arguments, passed during the app.js execution
 */
function parseArgs(argumentList) {
    let count = false;

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

    return { nameFilters: nameFilters, count: count }
}

module.exports = {
    parseArgs
}