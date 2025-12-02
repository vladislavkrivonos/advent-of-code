/**
 * Reads data from input.txt and converts it to an array of strings.
 * Each line in the input file becomes a new element in the array.
 * The input format is expected to be: [R,L]number(0-99)
 * @returns {Promise<string[]>} Promise that resolves to an array of strings
 */
async function readInputToArray() {
    // Read the file content
    const fs = require('fs').promises;
    
    try {
        const data = await fs.readFile('input.txt', 'utf8');
        // Split the content by newlines and filter out empty lines
        const lines = data.split('\n')
                         .map(line => line.trim()) // Remove whitespace
                         .filter(line => line.length > 0); // Remove empty lines
        
        return lines;
    } catch (error) {
        console.error('Error reading input.txt:', error);
        throw error;
    }
}

// Alternative synchronous version
function readInputToArraySync() {
    const fs = require('fs');
    
    try {
        const data = fs.readFileSync('input.txt', 'utf8');
        // Split the content by newlines and filter out empty lines
        const lines = data.split('\n')
                         .map(line => line.trim()) // Remove whitespace
                         .filter(line => line.length > 0); // Remove empty lines
        
        return lines;
    } catch (error) {
        console.error('Error reading input.txt:', error);
        throw error;
    }
}

module.exports = {
    readInputToArray,
    readInputToArraySync
};