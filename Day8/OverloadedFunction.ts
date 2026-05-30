//step1: write a signature for the overloaded function
//step2: implement a function that can handle different types of parameters and return values based on the function signature
//step3: calling the function

/* function calculate(a: number, b: number): number;
function calculate(a: string, b: string): string;

//step2: write the implementation for the overloaded function
function calculate(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b; // If both parameters are numbers, return their sum
    } else if (typeof a === "string" && typeof b === "string") {
        return a + " " + b; // If both parameters are strings, concatenate them with a space
    } else {
        throw new Error("Invalid arguments. Both parameters must be of the same type.");
    }
}

// Example usage:
console.log(calculate(5, 10)); // Output: 15
console.log(calculate("Hello", "World")); // Output: Hello World    
 */

//Example2:
//signature for the overloaded function
/* function info(id:number):string;
function info(name:string):string;

//implementation for the overloaded function
function info(param: number | string): string {
    if (typeof param === "number") {
        return `ID: ${param}`; // If the parameter is a number, return it as an ID
    } else if (typeof param === "string") {
        return `Name: ${param}`; // If the parameter is a string, return it as a Name
    } else {
        throw new Error("Invalid argument. Parameter must be either a number or a string.");
    }
}

// Example usage:
console.log(info(12345)); // Output: ID: 12345
console.log(info("Alice")); // Output: Name: Alice */

//Example 3: Overloaded function with differeent number of parameters
// signature for the overloaded function
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

// Implementation for the overloaded function
function add(a: number, b: number, c?: number): number {
    if (c === undefined) {
        return a + b;
    } else {
        return a + b + c;
    }
}

// Example usage:
console.log(add(5, 10)); // Output: 15
console.log(add(5, 10, 15)); // Output: 30      
