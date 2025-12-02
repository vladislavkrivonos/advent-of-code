const { readInputToArray } = require("./read");

function addInvalidIds(input) {
    return input.flatMap(item => getInvalidIdsFromRange(item)).reduce((acc, cur) => acc + cur, 0);
}

function getInvalidIdsFromRange(range) {
    const [start, end] = range.split('-');
    const invalidIds = [];

    for (let i = +start; i <= +end; i++) {
        const iStr = i.toString();
        const halfLength = iStr.length / 2;
        const firstHalf = iStr.slice(0, halfLength);
        const secondHalf = iStr.slice(halfLength);

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