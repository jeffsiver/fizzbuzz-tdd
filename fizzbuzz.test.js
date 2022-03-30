const {Fizzbuzz, Converter} = require("./fizzbuzz");
describe('Fizzbuzz', () => {
    const converter = new Converter()
    const fizzbuzz = new Fizzbuzz(converter);
    const convertSpy = jest.spyOn(converter, 'convert');

    beforeEach(() => {
        convertSpy.mockImplementation((number) => number.toString());
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('returns an array', () => {
        const result = fizzbuzz.generate(12);
        expect(result).toBeInstanceOf(Array);
    })

    test('return an array with 3 entries', () => {
        const result = fizzbuzz.generate(3);
        expect(result).toEqual(['1', '2', '3']);
    })

    test('is calling convert method correctly', () => {
        const result = fizzbuzz.generate(2);
        expect(convertSpy).toBeCalledTimes(2);
        expect(convertSpy).toBeCalledWith(1)
        expect(convertSpy).toBeCalledWith(2)
    })
})

describe('Converter', () => {
    test.each([
        [1, '1'],
        [2, '2'],
        [13, '13'],
    ])
    ('converts number to string', (number, expectedResult) => {
        const result = new Converter().convert(number);
        expect(result).toEqual(expectedResult);
    })

    test.each([
        [3],
        [6],
        [12],
    ])('converts number to fizz', (number) => {
        const result = new Converter().convert(number);
        expect(result).toEqual('fizz');
    })

    test.each([
        [5],
        [10],
        [20],
    ])('converts number to buzz', (number) => {
        const result = new Converter().convert(number);
        expect(result).toEqual('buzz');
    })

    test.each([
        [15],
        [30],
        [60],
    ])('converts number to fizzbuzz', (number) => {
        const result = new Converter().convert(number);
        expect(result).toEqual('fizzbuzz');
    })
})
