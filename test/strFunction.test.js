const app = require('./../app')

// Function strFilter(filterStr, checkStr)
test('If the string to check and the filter are equal, it returns true', () => {
    const input = { filterStr: 'test', checkStr: 'test' }

    expect(app.strFilter(input.filterStr, input.checkStr)).toBe(true);
});
test('If the string to check includes the filter, it returns true', () => {
    const input = { filterStr: 'es', checkStr: 'test' }

    expect(app.strFilter(input.filterStr, input.checkStr)).toBe(true);
});
test('If the string to check does not include the filter, it returns false', () => {
    const input = { filterStr: 'h', checkStr: 'test' }

    expect(app.strFilter(input.filterStr, input.checkStr)).toBe(false);
});
test('If the check and/or the filter value set is not a string, the variables will be convert into string and the function will be executed', () => {
    const input = { filterStr: 27, checkStr: 27 }

    expect(app.strFilter(input.filterStr, input.checkStr)).toBe(true);
});

// Function filteredResult()
test('If the filter in entry of the function works with all the different objects of the mock, the function will return the mock string ', () => {
    const input = 'test'

    const output = [
        { name: 'One test' },
        { name: 'Another test' },
        { name: 'One more test' }
    ]

    expect(app.filteredResult(input)).toStrictEqual(output);
});
test('If the filter in entry of the function works with at least one of the different objects of the mock, the function will return a custom object', () => {
    const input = 'One'

    const output = [
        { name: 'One test' },
        { name: 'One more test' }
    ]

    expect(app.filteredResult(input)).toStrictEqual(output);
});
test('If the filter in entry of the function doesn t work with any of the different objects of the mock, the function will return an empty string', () => {
    const input = 'tset'

    expect(app.filteredResult(input)).toStrictEqual([]);
});