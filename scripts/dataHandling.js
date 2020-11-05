/**
 * This function will generate the result, filtered with an filter input and the target to filter.
 * @param {String} arrayToFilter - Array of Object to filter
 * @param {String} filterString - Substring to check
 */

function arrayFiltering(arrayToFilter, filterString) {
    let filteredArray = arrayToFilter.filter(country => country.people.some(people => people.animals.some(animal => animal.name.includes(filterString))));

    filteredArray.forEach(country => {

        let filteredPeople = country.people.filter(people => people.animals.some(animal => animal.name.includes(filterString)));
        country.people = filteredPeople;

        filteredPeople.forEach(people => {
            let filteredAnimals = people.animals.filter(animal => animal.name.includes(filterString));
            people.animals = filteredAnimals;
        })

    })

    return filteredArray
}

/**
 * This function will add the count of the differents children arrays of the targeted array.
 * @param {String} arrayToAnalyze - Array of Object to count
 */
function childrenCount(arrayToAnalyze) {
    arrayToAnalyze.forEach(country => {
        country.name = country.name.concat(' [', country.people.length, ']');
        country.people.forEach(people => {
            people.name = people.name.concat(' [', people.animals.length, ']');
        })
    })
    return arrayToAnalyze;
}

module.exports = {
    childrenCount,
    arrayFiltering
}