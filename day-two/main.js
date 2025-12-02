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
        const length = iStr.length;
        
        // Odd-length strings cannot have identical first and second halves
        // So we skip them to improve efficiency and avoid incorrect slice behavior
        if (length % 2 !== 0) {
            continue;
        }
        
        // Split the string into two equal halves
        const midPoint = length / 2;
        const firstHalf = iStr.slice(0, midPoint);
        const secondHalf = iStr.slice(midPoint);
        
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