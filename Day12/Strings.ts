// Strings in typescript
// A string is a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `) in TypeScript. Strings are used to represent text and can contain letters, numbers, symbols, and whitespace. Here are some examples of how to define and use strings in TypeScript:

// String declaration and initialization:
let name: string = "Alice";
let greeting: string = 'Hello, World!';
let message: string = `Welcome to TypeScript!`;

console.log(name); // Output: Alice
console.log(greeting); // Output: Hello, World!
console.log(message); // Output: Welcome to TypeScript!

// String concatenation:
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

// Template literals (using backticks):
let age: number = 30;
let info: string = `My name is ${name} and I am ${age} years old.`;
console.log(info); // Output: My name is Alice and I am 30 years old.       

/*----------------------STRING METHODS----------------------*/
// String methods are built-in functions that allow you to manipulate and work with strings in TypeScript. Here are some commonly used string methods:

let str: string = "Hello, TypeScript!";

// 1. length: Returns the length of the string.
console.log(str.length); // Output: 18

// 2. toUpperCase(): Converts the string to uppercase.
console.log(str.toUpperCase()); // Output: HELLO, TYPESCRIPT!

// 3. toLowerCase(): Converts the string to lowercase.
console.log(str.toLowerCase()); // Output: hello, typescript!

//4. charAt(): Returns the character at a specified index in the string.
console.log(str.charAt(7)); // Output: T    

// 5. indexOf(): Returns the index of the first occurrence of a specified value in the string.
console.log(str.indexOf("TypeScript")); // Output: 7

// 6. substring(): Extracts a portion of the string and returns it as a new string.
//last index is not included in the output
console.log(str.substring(0, 5)); // Output: Hello

// 7. split(): Splits the string into an array of substrings based on a specified separator.
console.log(str.split(", ")); // Output: ["Hello", "TypeScript!"]

// 8. replace(): Replaces a specified value with another value in the string.
console.log(str.replace("TypeScript", "JavaScript")); // Output: Hello, JavaScript!

// 9. trim(): Removes whitespace from both ends of the string.
let strWithWhitespace: string = "   Hello, TypeScript!   ";
console.log(strWithWhitespace.trim()); // Output: Hello, TypeScript!

// 10. trimStart(): Removes whitespace from the beginning of the string.
console.log(strWithWhitespace.trimStart()); // Output: "Hello, TypeScript!   "

// 10. trimEnd(): Removes whitespace from the end of the string.
console.log(strWithWhitespace.trimEnd()); // Output: "   Hello, TypeScript!"

//11 includes(): Determines whether the string contains a specified value and returns a boolean.   
console.log(str.includes("TypeScript")); // Output: true    

//12. startsWith(): Determines whether the string starts with a specified value and returns a boolean.
console.log(str.startsWith("Hello")); // Output: true

//13. endsWith(): Determines whether the string ends with a specified value and returns a boolean.
console.log(str.endsWith("!")); // Output: true 

//14. concat()  : Concatenates two or more strings and returns a new string.
let str1= "welcome";
let str2= "to typescript"; 
console.log("after concat: "+str1.concat(" ", str2)); // Output: after concat: welcome to typescript


// These are just a few examples of the many string methods available in TypeScript. You can explore more methods in the official TypeScript documentation to further manipulate and work with strings effectively. 

/*----------------------STRING IMMUTABILITY----------------------*/
// In TypeScript, strings are immutable, which means that once a string is created, it cannot be changed. When you perform operations on a string, such as concatenation or modification, a new string is created instead of modifying the original string. Here are some examples to illustrate string immutability:

let originalString: string = "Hello";
let modifiedString: string = originalString + ", World!";

console.log(originalString); // Output: Hello (original string remains unchanged)
console.log(modifiedString); // Output: Hello, World! (a new string is created)

// When you use methods that modify a string, such as toUpperCase() or replace(), they also return a new string without changing the original string:

let upperCaseString: string = originalString.toUpperCase();
console.log(originalString); // Output: Hello (original string remains unchanged)
console.log(upperCaseString); // Output: HELLO (a new string is created)

// This immutability of strings is an important concept to understand when working with strings in TypeScript, as it can affect how you manipulate and manage string data in your applications. It also helps to ensure that string data remains consistent and prevents unintended side effects when modifying strings.    

/*--------------------Multiple Line Strings--------------------*/
// In TypeScript, you can create multi-line strings using template literals (backticks). Template literals allow you to include line breaks and preserve the formatting of the string. Here are some examples of how to create multi-line strings in TypeScript:

let multiLineString: string = `This is a multi-line string.
It can span multiple lines without the need for escape characters.
You can also include variables and expressions using ${} syntax.`;

console.log(multiLineString);
/* Output:
This is a multi-line string.
It can span multiple lines without the need for escape characters.
You can also include variables and expressions using ${} syntax.
*/

// You can also use template literals to create multi-line strings with embedded expressions:

let name2: string = "Alice";
let age2: number = 30;
let info2: string = `My name is ${name2} and I am ${age2} years old.`;
console.log(info2); // Output: My name is Alice and I am 30 years old.

// Multi-line strings can be useful for creating formatted text, such as HTML templates, SQL queries, or any other type of string that requires multiple lines for better readability and organization. 
