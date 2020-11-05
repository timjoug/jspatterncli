const data = require('../data');
const app = require('./../app')
const dataTest = data.data;

// Function filteredResult(array, filterStr)
test('If the filter in entry of the function works with at least one of the different objects of the mock, the function will return a custom object', () => {
    const input = {
        array: dataTest,
        filterStr: 'ry'
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

    expect(app.filteredResult(input.array, input.filterStr)).toStrictEqual(output);
});
test('If the filter in entry of the function doesn t work with any of the different objects of the mock, the function will return an empty string', () => {
    const input = {
        array: dataTest,
        filterStr: 'test'
    }

    expect(app.filteredResult(input.array, input.filterStr)).toStrictEqual([]);
});