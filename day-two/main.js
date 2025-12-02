const { readInputToArray } = require("./read");

// Calculate the sum of all invalid IDs found in the input ranges
function addInvalidIds(input) {
    return input.flatMap(item => getInvalidIdsFromRange(item)).reduce((acc, cur) => acc + cur, 0);
}

// Find all invalid IDs within a given range (e.g. "12-34")
function getInvalidIdsFromRange(range) {
    const [start, end] = range.split('-');
    const invalidIds = [];

    for (let i = +start; i <= +end; i++) {
        const iStr = i.toString();
        // Calculate the halfway point of the string
        const halfLength = iStr.length / 2;
        const firstHalf = iStr.slice(0, halfLength);
        const secondHalf = iStr.slice(halfLength);

        // Check if both halves are identical (making it an invalid ID)
        if (firstHalf === secondHalf) {
            console.log(`This id is invalid: ${i}`);
            invalidIds.push(i);
        }
    }

    return invalidIds;
}

const input = readInputToArray();
const res = addInvalidIds(input);
console.log(res);