const mock = require('./mock')

const strToCheck = mock.mock

/**
 * This function checks if a target string includes a substring and will return a boolean
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

module.exports = {
    strFilter
}