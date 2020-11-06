const { data } = require('../data');

const dataHandling = require('./../scripts/dataHandling');

const dataTest = data;

// Function filterDataByAnimalNames(dataList, nameList) + childrenCount(dataList) 
test('Given the nameList has one matching filter, when we filter "animals" with nameList and we use the count function, the output list will be equal to a filtered "animals" list with the children count', () => {
    const input = {
        dataList: [...data],
        nameList: ['ry']
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

    expect(dataHandling.childrenCount(dataHandling.filterDataByAnimalNames(input.dataList, input.nameList))).toStrictEqual(output);
});