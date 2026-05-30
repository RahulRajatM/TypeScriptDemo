// Anonymous functions are functions that are defined without a name. They are often used as values assigned to variables or passed as arguments to other functions. Here's an example of an anonymous function in TypeScript:  
const greet = function(): void {
    console.log("Hello, World!");
};

greet(); // Output: Hello, World!   

// In this example, we define an anonymous function and assign it to the variable `greet`. The function does not have a name, but it can still be invoked using the variable name. Anonymous functions are commonly used in situations where a function is needed as a callback or when you want to create a function on the fly without giving it a specific name.

// Example 2: Anonymous function as a callback
//setTimeout(functionToRun, delayInMilliseconds); 
setTimeout(function() {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

// In this example, we use an anonymous function as a callback for the `setTimeout` function. The anonymous function will be executed after a delay of 2 seconds, and it will log a message to the console. This is a common use case for anonymous functions, especially in asynchronous programming.

// Example 3: Anonymous function with parameters
const add = function(a: number, b: number): number {
    return a + b;
};

console.log(add(5, 10)); // Output: 15

// In this example, we define an anonymous function that takes two parameters `a` and `b`, and returns their sum. The function is assigned to the variable `add`, which can be used to invoke the function and pass arguments to it.

// Example 4: Anonymous function with arrow function syntax
const multiply = (a: number, b: number): number => {
    return a * b;
};

console.log(multiply(2, 3)); // Output: 6

// In this example, we define an anonymous function using arrow function syntax. The `multiply` variable holds the anonymous function that takes two parameters and returns their product. Arrow functions provide a more concise syntax for writing anonymous functions in TypeScript.     
