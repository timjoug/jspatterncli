const mock = require('./mock'),
    data = require('./data');

// const strToCheck = mock.mock;
const arrayToCheck = mock.mock;

const objToCheck = data;

/**
 * This function will check the arguments passed when the file is executed.
 * Respecting the existing argument, linked functions are executed.
 * This function is directly called when the file is executed with a node command.
 */
function routingFunction() {
    let finalRes, filterStr;
    process.argv.forEach(elt => {
        if (strFilter('--filter=', elt)) {
            filterStr = elt.substring(9);
            finalRes = filteredResult(filterStr);
        }
    });
    return finalRes;
}

/**
 * This function checks if a target string includes a substring and will return a boolean.
 * @param {String} filterStr - Substring to check
 * @param {String} checkStr - String to analyse
 */
function strFilter(filterStr, checkStr) {
    if (typeof filterStr !== 'string') {
        filterStr = filterStr.toString();
    }
    if (typeof checkStr !== 'string') {
        checkStr = checkStr.toString();
    }
    if (checkStr.includes(filterStr)) {
        return true;
    } else {
        return false;
    }
}

/**
 * This function will generates the result, filtered with an filter input.
 * @param {String} filterStr - Substring to check
 */
function filteredResult(filterStr) {
    let res = [],
        testRes;
    arrayToCheck.forEach(elt => {
        testRes = strFilter(filterStr, elt.name);
        if (testRes === true) { res.push(elt) };
    });
    return res;
}

const result = routingFunction();
console.log(result);

module.exports = {
    routingFunction,
    strFilter,
    filteredResult
}