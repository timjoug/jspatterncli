const data = require('../data');

const manageArgs = require('./../scripts/manageArgs');

const dataTest = data.data;

// Function functionRouter(dataToAnalyze, argumentList)
test('With an empty argument list, the function will return the entire data array', () => {
    const input = {
        dataToAnalyze: dataTest,
        argumentList: []
    }

    const output = dataTest

    expect(manageArgs.functionRouter(input.dataToAnalyze, input.argumentList)).toStrictEqual(output);
});

test('With a single filter argument (--filter=ry), the function will return an array, filtered with the input string (ry)', () => {
    const input = {
        dataToAnalyze: dataTest,
        argumentList: ['--filter=ry']
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
    ];

    expect(manageArgs.functionRouter(input.dataToAnalyze, input.argumentList)).toStrictEqual(output);
});

test('With two filter arguments (--filter=ry and --filter=Do), the function will return an array, filtered with the input strings (ry and Do)', () => {
    const input = {
        dataToAnalyze: dataTest,
        argumentList: ['--filter=ry', '--filter=Do']
    }

    const output = [{
        "name": "Uzuzozne",
        "people": [{
            "name": "Lillie Abbott",
            "animals": [
                { "name": "John Dory" }
            ]
        }]
    }];

    expect(manageArgs.functionRouter(input.dataToAnalyze, input.argumentList)).toStrictEqual(output);
});

test('With a single filter argument (--filter=ry) and a count argument, the function will return an array, filtered with the input string (ry). This array will also include the count of children', () => {
    const input = {
        dataToAnalyze: dataTest,
        argumentList: ['--filter=ry', '--count']
    }

    const output = [{
            "name": "Uzuzozne [1]",
            "people": [{
                "name": "Lillie Abbott [1]",
                "animals": [
                    { "name": "John Dory" }
                ]
            }]
        },
        {
            "name": "Satanwi [1]",
            "people": [{
                "name": "Anthony Bruno [1]",
                "animals": [
                    { "name": "Oryx" }
                ]
            }]
        }
    ];

    expect(manageArgs.functionRouter(input.dataToAnalyze, input.argumentList)).toStrictEqual(output);
});