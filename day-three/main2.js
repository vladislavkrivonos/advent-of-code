const { readInputToArray } = require("./read");

function getSumOfMaxJoltage(array) {
    return array.map(battery => calculateMaxBatteryJoltage(battery)).reduce((acc, cur) => acc + cur);
}

function calculateMaxBatteryJoltage(battery) {
    const batteryLength = battery.length;

    let result = '';
    let nextStart = 0;

    for (let remainingIterations = 12; remainingIterations > 0; remainingIterations--) {
        let cap = batteryLength - remainingIterations;

        let bestRes = {
            value: '0',
            index: nextStart
        }
        for (let i = nextStart; i <= cap; i++) {
            if (battery[i] > bestRes.value) {
                bestRes.value = battery[i];
                bestRes.index = i;
            }
        }

        nextStart = bestRes.index + 1;
        result += bestRes.value;
    }

    return +result;
}


const input = readInputToArray();
const res = getSumOfMaxJoltage(input);
console.log(res);