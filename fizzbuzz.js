class FizzBuzz {
    #fizzBuzzConverter
    constructor(fizzBuzzConverter)  {
        this.#fizzBuzzConverter = fizzBuzzConverter;
    }
    /**
     *
     * @param {Number} numOfEntries
     * @returns {Array<string>}
     * @constructor
     */
    GenerateArray(numOfEntries) {
        return Array(numOfEntries).fill(0).map((element, index) => {
            const num = index + 1;
            return this.#fizzBuzzConverter.ConvertNumberToString(num);
        })
    }
}

class FizzBuzzConverter {
    /**
     *
     * @param {number} num
     * @returns {string}
     * @constructor
     */
    ConvertNumberToString(num) {
        let result = '';
        if (num % 3 === 0)
            result += 'fizz';
        if (num % 5 === 0)
            result += 'buzz';
        if (result !== '')
            return result;
        return num.toString();
    }
}

module.exports = {FizzBuzz, FizzBuzzConverter};