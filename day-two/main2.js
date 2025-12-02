const { readInputToArray } = require("./read");

function addInvalidIds(input) {
    return input.flatMap(item => getInvalidIdsFromRange(item)).reduce((acc, cur) => acc + cur, 0);
}

function getInvalidIdsFromRange(range) {
    const [start, end] = range.split('-');
    const invalidIds = [];

    for (let i = +start; i <= +end; i++) {
        const iStr = i.toString();

        const stack = [];

        for (let j = 0; j < Math.floor(iStr.length / 2); j++) {
            stack.push(iStr[j]);

            if (iStr.length % stack.length !== 0) {
                continue;
            }

            const chunks = splitStringByEqualRange(iStr, stack.length);
            const res = chunks.reduce((acc, cur) => acc && cur === chunks[0], true);

            if (res) {
                console.log(`This id is invalid: ${i}`);
                invalidIds.push(i);
                break;
            }
        }
    }

    return invalidIds;
}

function splitStringByEqualRange(str, chunkSize) {
  const result = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    result.push(str.slice(i, i + chunkSize));
  }
  return result;
}

const input = readInputToArray();
const res = addInvalidIds(input);
console.log(res);