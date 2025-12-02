function readInputToArray() {
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
    readInputToArray
};