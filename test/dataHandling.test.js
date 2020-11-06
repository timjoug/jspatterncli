const data = require('../data');

const dataHandling = require('./../scripts/dataHandling');

const dataTest = data.data;

// Function filterAnimalsByNames(animals, name)
test('If the filter in entry of the function works with at least one of the different objects of the mock, the function will return a custom object', () => {
    const input = {
        animals: dataTest,
        name: 'ry'
    }

    const output = [{
            "name": "Uzuzozne",
            "people": [{
                "name": "Lillie Abbott",
                "animals": [
                    { "name": "John Dory" }
                ]
            }]
        },
        {
            "name": "Satanwi",
            "people": [{
                "name": "Anthony Bruno",
                "animals": [
                    { "name": "Oryx" }
                ]
            }]
        }
    ]

    expect(dataHandling.filterAnimalsByNames(input.animals, input.name)).toStrictEqual(output);
});
test('If the filter in entry of the function doesn t work with any of the different objects of the mock, the function will return an empty string', () => {
    const input = {
        animals: dataTest,
        name: 'test'
    }

    expect(dataHandling.filterAnimalsByNames(input.animals, input.name)).toStrictEqual([]);
});

// Function childrenCount(animals) 
test('With an array, following a define schema, the function will display the same array with the count of chlidren in the "name" field', () => {
    const input = [{
        name: 'Satanwi',
        people: [{
                name: 'Elmer Kinoshita',
                animals: [
                    { name: 'Wrysel' }
                ]
            },
            {
                name: 'Cora Howell',
                animals: [
                    { name: 'Rrya' },
                    { name: 'Pronryorn' }
                ]
            },
            {
                name: 'Anthony Bruno',
                animals: [
                    { name: 'Caryxcal' },
                    { name: 'Tryantula' },
                    { name: 'Oryx' }
                ]
            }
        ]
    }]

    const output = [{
        name: 'Satanwi [3]',
        people: [{
                name: 'Elmer Kinoshita [1]',
                animals: [
                    { name: 'Wrysel' }
                ]
            },
            {
                name: 'Cora Howell [2]',
                animals: [
                    { name: 'Rrya' },
                    { name: 'Pronryorn' }
                ]
            },
            {
                name: 'Anthony Bruno [3]',
                animals: [
                    { name: 'Caryxcal' },
                    { name: 'Tryantula' },
                    { name: 'Oryx' }
                ]
            }
        ]
    }]

    expect(dataHandling.childrenCount(input)).toStrictEqual(output);
});

// Function filterAnimalsByNames(animals, name) + childrenCount(animals) 
test('With a list, following a define schema, and after the function processing, a filtered list with children count will be returned ', () => {
    const input = {
        animals: dataTest,
        name: 'ry'
    }

    const output = [{
        "name": "Uzuzozne [1]",
        "people": [{
            "name": "Lillie Abbott [1]",
            "animals": [
                { "name": "John Dory" }
            ]
        }]
    }, {
        "name": "Satanwi [1]",
        "people": [{
            "name": "Anthony Bruno [1]",
            "animals": [
                { "name": "Oryx" }
            ]
        }]
    }]

    expect(dataHandling.childrenCount(dataHandling.filterAnimalsByNames(input.animals, input.name))).toStrictEqual(output);
});