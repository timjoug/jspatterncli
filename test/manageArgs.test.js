const data = require('../data');

const manageArgs = require('./../scripts/manageArgs');

// Function parseArgs(argumentList)
test('With an empty argument list, the function will return an object with an empty nameFilters and a false count', () => {
    const input = []

    const output = { nameFilters: [], count: false }

    expect(manageArgs.parseArgs(input)).toStrictEqual(output);
});

test('With a single filter argument (--filter=ry), the function will return an array, filtered with the input string (ry)', () => {
    const input = ['node', 'app.js', '--filter=ry']

    const output = { nameFilters: ['ry'], count: false }

    expect(manageArgs.parseArgs(input)).toStrictEqual(output);
});

test('With two filter arguments (--filter=ry and --filter=Do), the function will return an array, filtered with the input strings (ry and Do)', () => {
    const input = ['node', 'app.js', '--filter=ry', '--filter=Do']

    const output = { nameFilters: ['ry', 'Do'], count: false }

    expect(manageArgs.parseArgs(input)).toStrictEqual(output);
});

test('With a single filter argument (--filter=ry) and a count argument, the function will return an array, filtered with the input string (ry). This array will also include the count of children', () => {
    const input = ['node', 'app.js', '--filter=ry', '--count']

    const output = { nameFilters: ['ry'], count: true }

    expect(manageArgs.parseArgs(input)).toStrictEqual(output);
});