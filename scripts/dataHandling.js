/**
 * This function will generate the result, filtered with an filter input and the target to filter.
 * @param {Array} animals - List of Object to filter
 * @param {Array} nameList - Substring to check
 */

function filterAnimalsByNames(animals, nameList) {
    let filteredList = animals;

    nameList.forEach(name => {

        filteredList = filteredList.filter(country => country.people.some(people => people.animals.some(animal => animal.name.includes(name))));

        filteredList.map(country => {

            let filteredPeople = country.people.filter(people => people.animals.some(animal => animal.name.includes(name)));
            country.people = filteredPeople;

            filteredPeople.map(people => {
                let filteredAnimals = people.animals.filter(animal => animal.name.includes(name));
                people.animals = filteredAnimals;
            })

        })

    })

    return filteredList
}

/**
 * This function will add the count of the differents children arrays of the targeted array.
 * @param {Array} animals - List of Object to count
 */
function childrenCount(animals) {
    animals.map(country => {
        country.name = country.name.concat(' [', country.people.length, ']');
        country.people.map(people => {
            people.name = people.name.concat(' [', people.animals.length, ']');
        })
    });

    return animals;
}

module.exports = {
    childrenCount,
    filterAnimalsByNames
}