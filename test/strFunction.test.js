const app = require('./../app')

test('If the string to check and the filter are equal, it returns true', () => {
    const input = { filterString: 'test', checkString: 'test' }

    expect(app.strFilter(input.filterString, input.checkString)).toBe(true);
});

test('If the string to check includes the filter, it returns true', () => {
    const input = { filterString: 'es', checkString: 'test' }

    expect(app.strFilter(input.filterString, input.checkString)).toBe(true);
});

test('If the string to check does not include the filter, it returns false', () => {
    const input = { filterString: 'h', checkString: 'test' }

    expect(app.strFilter(input.filterString, input.checkString)).toBe(false);
});

test('If the check and/or the filter value set is not a string, the variables will be convert into string and the function will be executed', () => {
    const input = { filterString: 27, checkString: 27 }

    expect(app.strFilter(input.filterString, input.checkString)).toBe(true);
});