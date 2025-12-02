const { readInputToArray } = require('./read.js');

function calculateZeros(array) {
    let counter = 50;
    let zerosCounter = 0;
    
    array.forEach(element => {
        // Extract direction (R or L) and numeric value
        const sign = element.slice(0, 1);
        const rawNum = parseInt(element.slice(1));
        
        // Pre-calculation of how many full cycles of 100 were made (each adds to zero count)
        const rawNumZerosClickedCount = Math.floor(rawNum / 100); // E.g. 827 = 8 full cycles + 27 remaining steps.
        const num = rawNum % 100; // Get remaining steps after full cycles
        
        // Add zeros from full cycles if any
        if (rawNumZerosClickedCount > 0) {
            zerosCounter += rawNumZerosClickedCount;
        }
        
        let counterDirection = sign === 'R'
            ? +1 
            : -1;

        // Process each individual step to accurately count zero crossings
        for (let i = 0; i < num; i++) {
            counter += counterDirection; // Move one step

            // Handle position wrapping (circular counter from 0-99)
            if (counter > 99) {
                counter -= 100; // Wrap around if over 99
            }

            if (counter < 0) {
                counter += 100; // Wrap around if below 0
            }

            // Increment zero counter if position reaches 0
            if (counter === 0) {
                zerosCounter++;
            }
        }
    });

    return zerosCounter;
}

const input = readInputToArray();
const res = calculateZeros(input);
console.log(`Total amount of zero crosses: ${res}`);