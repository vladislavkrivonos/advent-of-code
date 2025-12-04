const { readInputToArray } = require("./read");

function getSumOfMaxJoltage(array) {
    return array.map(battery => calculateMaxBatteryJoltage(battery)).reduce((acc, cur) => acc + cur);
}

function calculateMaxBatteryJoltage(battery) {
    const maxJoltageArr = battery.slice(0, 2).split('');
    console.log(maxJoltageArr.join(''), battery[2]);
    for (let i = 1; i < battery.length; i++) {
        if (battery[i] > maxJoltageArr[0] && i < battery.length - 1) {
            maxJoltageArr[0] = battery[i];
            maxJoltageArr[1] = battery[i + 1];
        } else if (battery[i] > maxJoltageArr[1]) {
            maxJoltageArr[1] = battery[i];
        }
    }

    console.log(`Battery: \n ${battery} \n Max Joltage: ${maxJoltageArr.join('')}`);

    return parseInt(maxJoltageArr.join(''));
}

const input = readInputToArray();
const res = getSumOfMaxJoltage(input);
console.log(res);