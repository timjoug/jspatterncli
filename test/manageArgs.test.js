const manageArgs = require('./../scripts/manageArgs');

// Function parseArgs(argumentList)
test('Given the argument list is empty, when we parse this list, the output list will be equal to an empty filter list and a false boolean, included in an object', () => {
    const input = []

    const output = { nameFilters: [], count: false }

    expect(manageArgs.parseArgs(input)).toStrictEqual(output);
});

test('Given the argument list contains a filter argument but no count argument, when we parse this list, the output list will be equal to a list with one filter and a false boolean, included in an object', () => {
    const input = ['node', 'app.js', '--filter=ry']

    const output = { nameFilters: ['ry'], count: false }

    expect(manageArgs.parseArgs(input)).toStrictEqual(output);
});

test('Given the argument list contains two filter arguments but no count argument, when we parse this list, the output list will be equal to a list with two filters and a false boolean, included in an object', () => {
    const input = ['node', 'app.js', '--filter=ry', '--filter=Do']

    const output = { nameFilters: ['ry', 'Do'], count: false }

    expect(manageArgs.parseArgs(input)).toStrictEqual(output);
});

test('Given the argument list contains a filter argument and a count argument, when we parse this list, the output list will be equal to a list with one filter and a true boolean, included in an object', () => {
    const input = ['node', 'app.js', '--filter=ry', '--count']

    const output = { nameFilters: ['ry'], count: true }

    expect(manageArgs.parseArgs(input)).toStrictEqual(output);
});