// Generate an array of all numbers from 1 to x, converting the number to a string
// When a number is divisible by 3, replace the number with fizz
// When a number is divisible by 5, replace the number with buzz
// When a number is divisible by both, replace the number with fizzbuzz


class Fizzbuzz {
    _fizzbuzzConverter;
    constructor(fizzbuzzConverter = new FizzbuzzConverter()) {
        this._fizzbuzzConverter = fizzbuzzConverter;
    }

    generate(numberOfEntries) {
        const result = [];
        for(let number = 1; number <= numberOfEntries; number++) {
            result.push(this._fizzbuzzConverter.convertNumberToString(number));
        }
        return result;
    }
}

class FizzbuzzConverter {
    convertNumberToString(number) {
        if (number % 3 === 0 && number % 5 === 0)
            return 'fizzbuzz';
        if (number % 3 === 0)
            return 'fizz';
        if (number % 5 === 0)
            return 'buzz'
        return number.toString();
    }
}

module.exports = { Fizzbuzz, FizzbuzzConverter }