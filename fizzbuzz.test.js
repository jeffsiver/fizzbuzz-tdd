const {Fizzbuzz, FizzbuzzConverter} = require("./fizzbuzz");

describe('Fizzbuzz', () => {
    const fizzbuzzConverter = new FizzbuzzConverter();
    const converterSpy = jest.spyOn(fizzbuzzConverter, 'convertNumberToString');
    const fizzbuzz = new Fizzbuzz(fizzbuzzConverter);

    beforeEach(() => {
        converterSpy.mockImplementation(() => '1')
    });
    afterEach(() => {
        jest.clearAllMocks();
    })

    test('returns an array', () => {
        const result = fizzbuzz.generate(12);
        expect(result).toBeInstanceOf(Array);
    })

    test('returns an array of the proper length', () => {
        const result = fizzbuzz.generate(2);
        expect(result).toHaveLength(2);
    })

    test('calls the converter as expected', () =>{
        const result = fizzbuzz.generate(2);
        expect(result).toEqual(['1', '1'])
        expect(converterSpy).toHaveBeenCalledTimes(2);
        expect(converterSpy).toHaveBeenCalledWith(1);
        expect(converterSpy).toHaveBeenCalledWith(2);

    })
})

describe('FizzbuzzConverter', () => {
    test.each([
        [1, '1'],
        [2, '2'],
        [4, '4'],
    ])('convert number to string', (number, expectedResult) => {
        const result = new FizzbuzzConverter().convertNumberToString(number);
        expect(result).toEqual(expectedResult);
    })

    test.each([
        [3],
        [6],
        [9]
    ])('convert threes to fizz', (number) => {
        const result = new FizzbuzzConverter().convertNumberToString(number);
        expect(result).toEqual('fizz');
    })

    test.each([
        [5],
        [10],
    ])('convert fives to buzz', (number) => {
        const result = new FizzbuzzConverter().convertNumberToString(number)
        expect(result).toEqual('buzz')
    })

    test.each([
        [15],
        [30],
    ])('convert 15s to fizzbuzz', (number) => {
        const result = new FizzbuzzConverter().convertNumberToString(number);
        expect(result).toEqual('fizzbuzz');
    })
})
