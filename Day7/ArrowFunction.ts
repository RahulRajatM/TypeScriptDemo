//Arrow Functions or lamda functions are a more concise way to write anonymous functions in TypeScript. They use the `=>` syntax and can have implicit return values. Here's an example of an arrow function in TypeScript:
//syntax for arrow function
/* const functionName = (parameters): returnType => {
    // function body
} */    

// Example 1: Arrow function with no parameters and no return type
const greet = (): void => {
    console.log("Hello, World!");
};

greet(); // Output: Hello, World!

// Example 2: Arrow function with parameters and a return type
const add = (a: number, b: number): number => {
    return a + b;
};

console.log(add(5, 10)); // Output: 15

// Example 3: Arrow function with implicit return
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(2, 3)); // Output: 6

// In this example, the `multiply` function is an arrow function that takes two parameters and returns their product. The implicit return allows us to omit the `return` keyword and the curly braces when the function body consists of a single expression. Arrow functions are often used for short, concise functions and are particularly useful in situations where you want to preserve the `this` context, such as in callbacks or when working with classes.   

// Example 4: Arrow function with rest parameters   
/* const sum = (...numbers: number[]): number => {
    return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22 */
// In this example, the `sum` function uses rest parameters to accept an arbitrary number of arguments. The function then uses the `reduce` method to calculate the total sum of the provided numbers. Arrow functions provide a more concise syntax for writing functions in TypeScript and are often preferred for their readability and ease of use.     

const getDetailsCount = (...details:(number | string)[]):number => {
    return details.length
}
getDetailsCount(1, "hello", 3, "world"); // Output: 4


//Example 5: Arrow function with optional parameters
// If you make first parameter optional then all the parameters after that should also be optional. If you make second parameter optional then only that parameter will be optional and the first parameter will be required.
const greetPerson = (name: string, greeting?: string): void => {
    if (greeting) {
        console.log(`${greeting}, ${name}!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
};

greetPerson("Alice"); // Output: Hello, Alice!
greetPerson("Bob", "Hi"); // Output: Hi, Bob!

// In this example, the `greetPerson` function is an arrow function that takes a required `name` parameter and an optional `greeting` parameter. If the `greeting` is provided, it uses that greeting; otherwise, it defaults to "Hello". Arrow functions can also handle optional parameters, making them versatile for various use cases. 

//Exaple 6: Arrow function with default parameters
const greetWithDefault = (name: string, greeting: string = "Hello"): void => {
    console.log(`${greeting}, ${name}!`);
};

greetWithDefault("Charlie"); // Output: Hello, Charlie!
greetWithDefault("Dave", "Hi"); // Output: Hi, Dave!

// In this example, the `greetWithDefault` function is an arrow function that takes a `name` parameter and a `greeting` parameter with a default value of "Hello". If the caller does not provide a greeting, it will use the default value. Arrow functions can also handle default parameters, allowing for more flexible function definitions.   



