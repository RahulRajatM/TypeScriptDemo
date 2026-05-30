/* How javascript is dynamically typed language?
In JavaScript, you can assign a value of any type to a variable without declaring its type. This means that the type of a variable can change at runtime. 
For example:   */    
let myVariable = 42; // myVariable is now a number
console.log(typeof myVariable); // Output: "number"

myVariable = "Hello, World!"; // myVariable is now a string
console.log(typeof myVariable); // Output: "string"

myVariable = true; // myVariable is now a boolean
console.log(typeof myVariable); // Output: "boolean"

myVariable = { name: "Alice", age: 30 }; // myVariable is now an object
console.log(typeof myVariable); // Output: "object"

myVariable = [1, 2, 3]; // myVariable is now an array (which is also an object)
console.log(typeof myVariable); // Output: "object"

myVariable = null; // myVariable is now null
console.log(typeof myVariable); // Output: "object" (this is a quirk in JavaScript)

myVariable = undefined; // myVariable is now undefined
console.log(typeof myVariable); // Output: "undefined"

// As you can see, the variable `myVariable` can hold values of different types at different times, demonstrating that JavaScript is a dynamically typed language.      


//Type Safety-  In JavaScript, type safety is not enforced at compile time, which means that you can perform operations on variables without worrying about their types. This can lead to unexpected behavior and runtime errors if you try to perform an operation that is not valid for the variable's type. For example:
let num = 10;
let str = "20";

let result = num + str; // This will concatenate the number and string, resulting in "1020"
console.log(result); // Output: "1020"

result = num - str; // This will attempt to subtract a string from a number, resulting in NaN (Not a Number)
console.log(result); // Output: NaN

result = num * str; // This will attempt to multiply a number by a string, resulting in NaN
console.log(result); // Output: NaN

result = num / str; // This will attempt to divide a number by a string, resulting in NaN
console.log(result); // Output: NaN

// In JavaScript, these operations do not throw errors at compile time, but they can lead to unexpected results at runtime. This lack of type safety is one of the reasons why TypeScript was created, as it provides static type checking to catch such issues during development. 