const fs = require('fs');

// Function to clean up spaces in a string
function cleanSpaces(text) {
  return text.replace(/\s+/g, ' ').trim();
}

// Read the file
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Clean up spaces in the data
  const cleanedData = cleanSpaces(data);

  // Write the cleaned data back to the file
  fs.writeFile('input.txt', cleanedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('File cleaned successfully.');
  });
});
