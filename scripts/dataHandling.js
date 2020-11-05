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

module.exports = {
    countResult,
    filteredResult
}