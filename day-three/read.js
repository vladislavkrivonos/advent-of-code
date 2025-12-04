const splitChar = '\n';

// Read input from file and return as array of strings
function readInputToArray() {
    const fs = require('fs');

    try {
        const data = fs.readFileSync('day-three/input.txt', 'utf8');
        // Split the content by commas and filter out empty lines
        const lines = data.split(splitChar)
                         .map(line => line.trim()) // Remove whitespace
                         .filter(line => line.length > 0); // Remove empty lines

        return lines;
    } catch (error) {
        console.error('Error reading input.txt:', error);
        throw error;
    }
}

module.exports = {
    readInputToArray
};