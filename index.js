// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function findFibonacciNumber(n) {
  if (n <= 1) {
    return n;
  }

  return findFibonacciNumber(n - 1) + findFibonacciNumber(n - 2);
}

const n = 8;
console.log(`Fibonacci number of n=${n} is:
${findFibonacciNumber(n)}`);