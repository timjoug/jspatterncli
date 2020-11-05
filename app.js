const data = require('./data');

const objToCheck = data.data;

/**
 * This function will check the arguments passed when the file is executed.
 * Respecting the existing argument, linked functions are executed.
 * This function is directly called when the file is executed with a node command.
 */
function routingFunction() {
    let finalRes, filterStr;
    process.argv.forEach(elt => {
        if (elt.includes('--filter=')) {
            filterStr = elt.substring(9);
            finalRes = filteredResult(objToCheck, filterStr);
        }
    });
    return finalRes;
}

/**
 * This function will generates the result, filtered with an filter input and the target to filter.
 * @param {String} array - Array of Object to filter
 * @param {String} filterStr - Substring to check
 */
function filteredResult(array, filterStr) {
    let filteredArray = array.filter(e => e.people.some(f => f.animals.some(g => g.name.includes(filterStr))));

    filteredArray.forEach(elt => {

        let filteredPeople = elt.people.filter(e => e.animals.some(f => f.name.includes(filterStr)));
        elt.people = filteredPeople;

        filteredPeople.forEach(relt => {
            let filterAnimals = relt.animals.filter(e => e.name.includes(filterStr));
            relt.animals = filterAnimals
        })

    })

    return filteredArray
}

const result = routingFunction();
console.log(JSON.stringify(result));

module.exports = {
    routingFunction,
    filteredResult
}