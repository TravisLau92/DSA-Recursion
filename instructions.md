Title: Fibonacci Number Algorithm Challenge

Objective:
Write a JavaScript function to calculate the nth number in the Fibonacci sequence. The sequence starts with F(0) = 0, F(1) = 1, and each subsequent number is the sum of the previous two. Your task is to implement the function findFibonacciNumber(n).

Instructions:
```
1.Define a function findFibonacciNumber(n) that receives an integer n.
2.The function should return the nth Fibonacci number.
```

Example usage:
```js
const n = 7;
console.log(`Fibonacci number of n=${n} is: ${findFibonacciNumber(n)}`);
```

Expected output for example above:
```js
Fibonacci number of n=7 is: 13
```


Example 1:
```
Input: n = 2
Output: Fibonacci number of n=2 is: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1
```

Example 2:
```
Input: n = 3
Output: Fibonacci number of n=3 is: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2
```

Example 3:
```
Input: n = 4
Output: Fibonacci number of n=4 is: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3
```

Example 4:
```
Input: n = 6
Output: Fibonacci number of n=6 is: 8
Explanation: F(6) = F(5) + F(4) = 5 + 3 = 8
```

```
Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```


Helpful resources:
- The Fibonacci sequence on Wikipedia: https://en.wikipedia.org/wiki/Fibonacci_number
- The for...of loop documentation on the Mozilla Developer Network (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- Template literals documentation on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

<details>
<summary>Hints</summary>
  
1. Create a function called `findFibonacciNumber` that takes an integer n as a parameter.
2. Initialize two variables, prev and current, with the values 0 and 1, respectively. These variables will keep track of the two preceding Fibonacci numbers.
3. Use a for loop to iterate from `2 to n` (inclusive). This loop will calculate the next Fibonacci number based on the values of prev and current and update them accordingly.
4. In each iteration of the loop, calculate the next Fibonacci number by adding prev and current and then update prev and current to the appropriate values for the next iteration.
5. After the loop is complete, the current variable will contain the nth Fibonacci number. Return this value.
6. You can call the function with different values of n and use template literals to log the result in the desired format, as shown in the examples you provided.
</details>