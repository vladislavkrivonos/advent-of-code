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

        // Stack to hold potential repeating pattern
        const stack = [];

        // Loop through each character up to half the length of the string
        for (let j = 0; j < Math.floor(iStr.length / 2); j++) {
            stack.push(iStr[j]);

            // Check if the string length is divisible by the current stack length
            if (iStr.length % stack.length !== 0) {
                continue;
            }

            // Split the string into chunks of the same size as the potential pattern
            // All chunks will be the same size because string is divisible (earlier check)
            const chunks = splitStringByEqualRange(iStr, stack.length);
            // Check if all chunks are identical to the first chunk (meaning the pattern repeats)
            const res = chunks.reduce((acc, cur) => acc && cur === chunks[0], true);

            // If all chunks are identical, the number is invalid
            if (res) {
                console.log(`This id is invalid: ${i}`);
                invalidIds.push(i);
                // After first occurance no need to check it for different pattern e.g. number 2222, has pattern of '2' and '22'
                break;
            }
        }
    }

    return invalidIds;
}

// Split a string into chunks of equal size
function splitStringByEqualRange(str, chunkSize) {
  const result = [];
 // Iterate through the string in increments of chunkSize
  for (let i = 0; i < str.length; i += chunkSize) {
    // Extract a substring of length chunkSize starting at position i
    result.push(str.slice(i, i + chunkSize));
  }
  return result;
}

const input = readInputToArray();
const res = addInvalidIds(input);
console.log(res);