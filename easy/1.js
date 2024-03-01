const fs = require('fs');

// Read the contents of the file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Print the contents of the file
  console.log('File contents:');
  console.log(data);

  // Perform an expensive operation
  console.log('Performing expensive operation...');
  for (let i = 0; i < 10; i++) {
    // Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  // Find the sum of prime numbers up to a certain limit (expensive operation)
  function sumOfPrimes(limit) {
    let sum = 0;
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
  }
  
  // Calculate the sum of prime numbers up to a large limit
  const limit = 1000000; // Adjust this limit to make the operation more or less expensive
  const sum = sumOfPrimes(limit);
  console.log(`Sum of prime numbers up to ${limit}: ${sum}`);
  
  }
  console.log('Expensive operation completed.');
});
