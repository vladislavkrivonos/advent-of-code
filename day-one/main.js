const { readInputToArraySync } = require('./read.js');

function calculateZeros(array) {
    let counter = 50;
    let zerosCounter = 0;
    
    array.forEach(element => {
        const sign = element.slice(0, 1);
        const num = parseInt(element.slice(1)) % 100; // E.g. L827 === L27
        
        // Update position based on direction
        counter = sign === 'R'
            ? counter + num  // Move right
            : counter - num; // Move left
        
        // Handle position wrapping (circular counter from 0-99)
        if (counter > 99) {
            counter -= 100; // Wrap around if over 99
        }

        if (counter < 0) {
            counter += 100; // Wrap around if below 0
        }

        if (counter === 0) {
            zerosCounter++;
        }
    });

    return zerosCounter;
}

const input = readInputToArraySync();
const res = calculateZeros(input);
console.log(`Total amount of zero landed: ${res}`);