const data = require('./data');

const dataArray = data.data;

/**
 * This function will check the arguments passed when the file is executed.
 * Respecting the existing argument, linked functions are executed.
 * This function is directly called when the file is executed with a node command.
 */
function routingFunction() {
    let finalRes = dataArray,
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
            finalRes = filteredResult(finalRes, process);
        })
    }
    if (countBool === true) { finalRes = countResult(finalRes); }
    return finalRes;
}

/**
 * This function will generate the result, filtered with an filter input and the target to filter.
 * @param {String} array - Array of Object to filter
 * @param {String} filterStr - Substring to check
 */

function filteredResult(array, filterStr) {
    let filteredArray = array.filter(e => e.people.some(f => f.animals.some(g => g.name.includes(filterStr))));

    filteredArray.forEach(elt => {

        let filteredPeople = elt.people.filter(e => e.animals.some(f => f.name.includes(filterStr)));
        elt.people = filteredPeople;

        filteredPeople.forEach(eltBis => {
            let filterAnimals = eltBis.animals.filter(e => e.name.includes(filterStr));
            eltBis.animals = filterAnimals
        })

    })

    return filteredArray
}

/**
 * This function will add the count of the differents children arrays of the targeted array.
 * @param {String} array - Array of Object to count
 */
function countResult(array) {
    array.forEach(elt => {
        elt.name = elt.name.concat(' [', elt.people.length, ']');
        elt.people.forEach(eltBis => {
            eltBis.name = eltBis.name.concat(' [', eltBis.animals.length, ']');
        })
    })
    return array;
}

const result = routingFunction();
console.log(JSON.stringify(result));

module.exports = {
    routingFunction,
    filteredResult,
    countResult
}