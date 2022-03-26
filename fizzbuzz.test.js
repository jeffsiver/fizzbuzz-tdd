const {FizzBuzz, FizzBuzzConverter} = require("./fizzbuzz");

describe('fizzbuzz', () => {
    describe('GenerateArray', () => {
        const fizzBuzzConverter = new FizzBuzzConverter();
        const convertNumberToStringSpy = jest.spyOn(fizzBuzzConverter, 'ConvertNumberToString');
        convertNumberToStringSpy.mockImplementation(() => '1');
        const fizzBuzz = new FizzBuzz(fizzBuzzConverter);

        test('returns an array', () => {
            const result = fizzBuzz.GenerateArray(12);
            expect(result).toBeInstanceOf(Array);
        });

        test('converts numbers to strings', () => {
            const result = fizzBuzz.GenerateArray(2);
            expect(result).toEqual(['1', '1']);
        })
    });
});

describe('FizzBuzzConverter', () => {
    describe('ConvertNumberToString', () => {
        test.each([
            [1, '1'],
            [2, '2'],
            [4, '4'],
            [6, '6'],
        ])('convert number to string', (input, expectedResult) => {
           const result = new FizzBuzzConverter().ConvertNumberToString(input);
           expect(result).toEqual(expectedResult);
        });

        test.each([
            [3],
            [6],
            [9],
        ])('convert threes to fizz', (input) => {
            const result = new FizzBuzzConverter().ConvertNumberToString(input);
            expect(result).toEqual('fizz');
        })
        test.each([
            [5],
            [10],
        ])('convert fives to buzz', (input) => {
            const result = new FizzBuzzConverter().ConvertNumberToString(input);
            expect(result).toEqual('buzz');
        })
        test.each([
            [15],
            [30],
        ])('convert divisible by 3 and 5 to fizzbuzz', (input) => {
            const result = new FizzBuzzConverter().ConvertNumberToString(input);
            expect(result).toEqual('fizzbuzz');
        })
    });
});