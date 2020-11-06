const { data } = require('../data');

const dataHandling = require('./../scripts/dataHandling');

// Function filterDataByAnimalNames(animals, nameList)
test('Given the nameList is empty, when we filter "animals" with nameList, the output list will be equal to "animals"', () => {
    const input = {
        dataList: [...data],
        nameList: []
    }

    const output = [...data]

    expect(dataHandling.filterDataByAnimalNames(input.dataList, input.nameList)).toStrictEqual(output);
});

test('Given the nameList has one matching filter, when we filter "animals" with nameList, the output list will be equal to a filtered "animals" list', () => {
    const input = {
        dataList: [...data],
        nameList: ['ry']
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

    expect(dataHandling.filterDataByAnimalNames(input.dataList, input.nameList)).toStrictEqual(output);
});

test('Given the nameList has two matching filters, when we filter "animals" with nameList, the output list will be equal to a filtered "animals" list (with the two filters)', () => {
    const input = {
        dataList: [...data],
        nameList: ['ry', 'Do']
    }

    const output = [{
        "name": "Uzuzozne",
        "people": [{
            "name": "Lillie Abbott",
            "animals": [
                { "name": "John Dory" }
            ]
        }]
    }]

    expect(dataHandling.filterDataByAnimalNames(input.dataList, input.nameList)).toStrictEqual(output);
});

test('Given the nameList has a not matching filter, when we filter "animals" with nameList, the output list will be equal to an empty array', () => {
    const input = {
        dataList: [...data],
        nameList: ['test']
    }

    expect(dataHandling.filterDataByAnimalNames(input.dataList, input.nameList)).toStrictEqual([]);
});

// Function childrenCount(animals) 
test('Given we have a matching array as an input, when we execute the counting function, the output list will be equal to "animals" with the children count', () => {
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