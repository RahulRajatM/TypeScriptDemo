// Named functions are functions that have a name, which can be used to refer to the function within its own body. This allows for recursion and better readability. Here's an example of a named function in TypeScript:
//syntax for named function
/* function functionName(parameters): returnType {
    // function body
} */    


function factorial(n: number): number {
    if (n === 0) {
        return 1; // Base case: factorial of 0 is 1
    }
    return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // Output: 120

// In this example, the function `factorial` is a named function that calculates the factorial of a given number `n`. The function uses recursion to call itself until it reaches the base case where `n` is 0. The name of the function allows it to refer to itself within its own body, enabling the recursive behavior. 

//Example 1: Named function with no return type and no parameters
function greet(): void {
    console.log("Hello, World!");
}

greet(); // Output: Hello, World!

//Example 2: Named function with parameters and a return type
function add(a: number, b: number): number {
    return a + b;
}
//Example 3: Named function with optional parameters    
function multiply(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a * b * c; // If c is provided, multiply all three numbers
    }
    return a * b; // If c is not provided, multiply a and b only
}

console.log(add(5, 10)); // Output: 15
console.log(multiply(2, 3)); // Output: 6
console.log(multiply(2, 3, 4)); // Output: 24      

// Example 4: Named function with Rest parameters
function sum(...numbers: number[]): number {
  /*   return numbers.reduce((total, num) => total + num, 0);
array.reduce(callback, initialValue)
total = accumulator
num = current array element
0 = initial value of total */

  let total: number = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

// In this example, the `sum` function uses rest parameters to accept an arbitrary number of arguments. The function then uses the `reduce` method to calculate the total sum of the provided numbers.  

// Example 5: Named function with Rest parameters- multiple types

function displayInfo(...info: (string | number)[]): number {
    return info.length; // Return the number of items in the info array
    }


displayInfo("Alice", "Age: 30", "City: New York", 12345); 

// Example 6: Named function with default parameters
function greetPerson(name: string = "Guest"): void {
    console.log(`Hello, ${name}!`);
}

greetPerson(); // Output: Hello, Guest!
greetPerson("Alice"); // Output: Hello, Alice!

// In this example, the `greetPerson` function has a default parameter `name` with a default value of "Guest". If the caller does not provide a value for `name`, it will use the default value. If a value is provided, it will override the default.

function calculateDiscount(price: number, discount: number = 0.1): number {
    return price * discount; // Calculate the discounted price
}

console.log(calculateDiscount(100)); // Output: 10 (using default discount of 10%)
console.log(calculateDiscount(100, 0.2)); // Output: 20 (using provided discount of 20%)
// In this example, the `calculateDiscount` function has a default parameter `discount` with a default value of 0.1 (10%). If the caller does not provide a value for `discount`, it will use the default value. If a value is provided, it will override the default and calculate the discounted price accordingly.