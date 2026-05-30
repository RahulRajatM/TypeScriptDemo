/* Typescript is statically typed, which means that you can specify the types of variables, function parameters, and return values. This helps catch errors at compile time and provides better code readability.

Here are some examples of different data types in TypeScript:
 
//1. Number: Represents both integer and floating-point numbers.      
let ag:number= 30; //number type is inferred based on the assigned value

 ag= "Thirty"; // Error: Type 'string' is not assignable to type 'number'
// console.log(ag);
//2. String: Represents a sequence of characters.      
let nam: string = "Alice";

//3. Boolean: Represents a logical value that can be either true or false.      
let isStudent: boolean = true;

//4. Array: Represents a collection of values of the same type.      
let numbers: number[] = [1, 2, 3, 4, 5];

//5. Tuple: Represents an array with a fixed number of elements of different types.      
let person: [string, number] = ["Alice", 30];

//6. Enum: Represents a set of named constants.      
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;

//7. Any: Represents any type of value and allows for dynamic typing. It is generally recommended to avoid using the 'any' type to maintain type safety in your code.      
let randomValue: any = "Hello"; // Can be assigned any type of value
randomValue = 42; // Now it can be assigned a number

//8. Void: Represents the absence of a value, typically used for functions that do not return anything.      
function greet(): void {
    console.log("Hello, World!");
}

//9. Null and Undefined: Represents the absence of a value or an uninitialized variable.      
let nullValue: null = null;
let undefinedValue: undefined = undefined;

//10. Object: Represents a non-primitive type that can contain properties and methods.      
let personObject: { name: string; age: number } = {
    name: "Alice",
    age: 30
};
//These are some of the basic data types in TypeScript, and you can also create custom types using interfaces and classes to further enhance the structure and functionality of your code.

//Type Safety- TypeScript provides static type checking, which helps catch errors at compile time and improves code quality. By specifying types for variables, function parameters, and return values, you can ensure that your code is more robust and less prone to runtime errors. This allows developers to catch potential issues early in the development process and provides better code readability and maintainability.
//example:
 let age2: number = 25; // TypeScript infers the type as number
age2 = "Thirty"; // Error: Type 'string' is not assignable to type 'number'         


//Datatypes, type Annotations, and type inference are fundamental concepts in TypeScript that help ensure type safety and improve code readability. By understanding and utilizing these features effectively, developers can write more robust and maintainable code.
/* Data types -> refer to the different types of values that can be assigned to variables in TypeScript, such as number, string, boolean, array, tuple, enum, any, void, null, undefined, and object. 
Type annotations -> allow developers to explicitly specify the type of a variable or function parameter, 
Type inference -> allows TypeScript to automatically determine the type based on the assigned value. 
 */

/* 1. primitive Datatypes- number, string, boolean, null, undefined, any, Union type, symbol, bigint,void
2. non-primitive Datatypes- object, array, tuple, enum, Function, Class, Interface

give exaple of each datatype-

let num: number = 42; // number
let str: string = "Hello, TypeScript!"; // string
let bool: boolean = true; // boolean
let nullValue: null = null; // null
let undefinedValue: undefined = undefined; // undefined
let anyValue: any = "This can be any type"; // any
let unionType: number | string = 42; // Union type
let sym: symbol = Symbol("unique"); // symbol
let bigIntValue: bigint = 9007199254740991n; // bigint

// Non-primitive datatypes
let obj: { name: string; age: number } = { name: "Alice", age: 30 }; // object
let arr: number[] = [1, 2, 3, 4, 5]; // array
let tuple: [string, number] = ["Alice", 30]; // tuple
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green; // enum
function greet(): void {
    console.log("Hello, World!");
} // void       
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
} // Class

interface IPerson {
    name: string;
    age: number;
    greet(): void;
} // Interface          

 */

/* String Type
Represents textual Data
1. Single quotes
2. Double quotes
3. Template literals (backticks)
Example: */
/* let name22: string = "Alice"; // Using double quotes
let name23: string = 'Dobb'; // Using single quotes
console.log("Hello, " ,name22, name23); // Output: Hello, Alice Dobb

let message: string = `My name is ${name22}`; // Using template literals     
console.log(message); // Output: My name is Alice    */

//Any Type
// Represents any type of value and allows for dynamic typing. It is generally recommended to avoid using the 'any' type to maintain type safety in your code.      
/* let randomValue: any = "Hello"; // Can be assigned any type of value
console.log(typeof randomValue); // Output: string
randomValue = 42; // Now it can be assigned a number
console.log(typeof randomValue); // Output: number
randomValue = true; // Now it can be assigned a boolean
console.log(typeof randomValue); // Output: boolean */

//Union Type
// Allows a variable to hold values of multiple types, providing flexibility while still maintaining type safety. Union types are defined using the pipe (|) symbol to separate the different types that a variable can accept. This feature is particularly useful when you want to allow for multiple types of input or when working with APIs that may return different types of data.
/* let unionType: number | string = 42; // Can be a number or a string
console.log(unionType); // Output: 42
unionType = "Hello"; // Now it can be a string
console.log(unionType); // Output: Hello    */      

//void Type- void is optional and is used to indicate that a function does not return a value. It is often used for functions that perform side effects, such as logging or modifying data without producing a result. When a function is declared with a void return type, it means that the function does not return any value and is typically used for functions that are intended to perform an action rather than produce a result.
// Represents the absence of a value, typically used for functions that do not return anything. A function with a void return type does not return any value and is often used for functions that perform side effects, such as logging or modifying data without producing a result.
/* function greet(): void {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!  */   

function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(5, 10)); // Output: 15