// Import necessary modules
const fs = require('fs').promises;

// Function to save data to a file
async function saveToFile(data, filename) {
    try {
        // Write data to file
        await fs.writeFile(filename, data);
        console.log(`Data saved to ${filename}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Export the saveToFile function
module.exports = { saveToFile };
