// Generate an array of all numbers from 1 to x,
//  converting the number to a string
// When a number is divisible by 3, replace the number with fizz
// When a number is divisible by 5, replace the number with buzz
// When a number is divisible by both, replace the number with fizzbuzz

class Fizzbuzz {
    _converter;
    constructor(converter) {
        this._converter = converter;
    }

    generate(numberOfEntries) {
        const result = [];
        for (let number = 1; number <= numberOfEntries; number++) {
            result.push(this._converter.convert(number));
        }
        return result;
    }
}

class FizzbuzzConverter {
    convert(number) {
        let result = '';
        if (number % 3 === 0)
            result = 'fizz';
        if (number % 5 === 0)
            result += 'buzz';
        if (result === '')
            return number.toString();
        return result;
    }
}

module.exports = { Fizzbuzz, Converter: FizzbuzzConverter}
