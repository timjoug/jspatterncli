/**
 * This function will generate the result, filtered with an filter input and the target to filter.
 * @param {Array} data - List of Object to filter
 * @param {Array} nameList - Substring to check
 */

function filterDataByAnimalNames(data, nameList) {
    let countries = [...data]; //Copie par valeur et non par référence

    nameList.forEach(name => {

        countries = countries.filter(country => country.people.some(people => people.animals.some(animal => animal.name.includes(name))));

        countries.forEach(country => {

            let filteredPeople = country.people.filter(people => people.animals.some(animal => animal.name.includes(name)));
            country.people = filteredPeople;

            filteredPeople.forEach(people => {
                let filteredAnimals = people.animals.filter(animal => animal.name.includes(name));
                people.animals = filteredAnimals;
            })

        })

    })

    return countries
}

/**
 * This function will add the count of the differents children arrays of the targeted array.
 * @param {Array} animals - List of Object to count
 */
function childrenCount(animals) {
    animals.forEach(country => {
        country.name = country.name.concat(' [', country.people.length, ']');
        country.people.map(people => {
            people.name = people.name.concat(' [', people.animals.length, ']');
        })
    });

    return animals;
}

module.exports = {
    childrenCount,
    filterDataByAnimalNames
}