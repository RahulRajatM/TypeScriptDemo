//Variables- a container for storing data values. In TypeScript, you can declare variables using the `let`, `const`, or `var` keywords.

//1. `let`: Used to declare a variable that can be reassigned later.  

/* let age: number = 25;
age = 30; // This is allowed    

//2. `const`: Used to declare a constant variable that cannot be reassigned after its initial assignment.
const name1: string = "Alice";
// name = "Bob"; // This will cause an error    
           
//3. `var`: An older way to declare variables, which has function scope and can lead to unexpected behavior. It is generally recommended to use `let` and `const` instead of `var`.
 
var city: string = "New York";
city = "Los Angeles"; // This is allowed    


// Example of variable declaration and usage

let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = firstName + " " + lastName;

console.log("Full Name:", fullName); // Output: Full Name: John Doe

const pi: number = 3.14159;
console.log("Value of Pi:", pi); // Output: Value of Pi: 3.14159                    



 */

//var, let, const
/* var- We do not use var in typescript because it has some issues like it is function scoped and can lead to unexpected behavior. It is generally recommended to use let and const instead of var.

let- We use let to declare a variable that can be reassigned later. It is block scoped, which means it is only accessible within the block it is defined in.

const- We use const to declare a constant variable that cannot be reassigned after its initial assignment. It is also block scoped.
 */
// var vs let vs const
/////1. scope- var is function scoped, while let and const are block scoped. This means that variables declared with var are accessible throughout the entire function, while variables declared with let and const are only accessible within the block they are defined in.

//2. Reassignment- var and let can be reassigned, while const cannot be reassigned after its initial assignment.

//3. Hoisting- var declarations are hoisted to the top of their scope, which means they can be accessed before they are declared. let and const declarations are also hoisted, but they are not initialized until their definition is evaluated, which means they cannot be accessed before they are declared.

//4. Best Practices- It is generally recommended to use let and const instead of var to avoid unexpected behavior and improve code readability. Use const for variables that should not be reassigned, and use let for variables that may need to be reassigned later.  


/* scope- var is function scoped, while let and const are block scoped. This means that variables declared with var are accessible throughout the entire function, while variables declared with let and const are only accessible within the block they are defined in.
Example- */
function example() {
   // console.log(x); // Output: undefined (due to hoisting)
    // console.log(y); // Error: Cannot access 'y' before initialization
    // console.log(z); // Error: Cannot access 'z' before initialization
if(true) {
    var x = 10;
    let y = 20;
    const z = 30;
}
   // console.log(x); // Output: 10
   /*  console.log(y); // Output: 20
    console.log(z); // Output: 30 */
}

example(); 

/* 2. declaration/initialization- In TypeScript, you can declare a variable without initializing it, but it is generally recommended to initialize variables at the time of declaration to avoid potential issues with undefined values.

//Example-  */
let age: number; // Declaration without initialization
age = 25; // Initialization

const name1: string = "Alice"; // Declaration and initialization in one step

// It is also possible to declare and initialize a variable in separate steps, but it is important to ensure that the variable is initialized before it is used to avoid errors.
// const - initialization is mandatory, you cannot declare a const variable without initializing it. This is because const variables must be assigned a value at the time of declaration and cannot be reassigned later. If you try to declare a const variable without initializing it, you will get a syntax error.
let city: string ; // Declaration without initialization
//console.log(city); // Error: Variable 'city' is used before being assigned
city = "New York"; // Initialization
//console.log(city); // Output: New York    

let city1;
// In this case, city1 is declared without a type or an initial value, so it will have the type 'any' and will be initialized to undefined. It is generally recommended to avoid using the 'any' type and to initialize variables with a specific type and value to improve code readability and maintainability.
/* console.log(city1); // Output: undefined
city1 = "Los Angeles"; // Now city1 is assigned a string value
console.log(city1); // Output: Los Angeles
 */

/* 3. Re-assignment- In TypeScript, you can reassign values to variables declared with let and var, but not to variables declared with const.
Example- */

let age1: number = 25;
age1 = 30; // This is allowed

const name2: string = "Alice";
// name2 = "Bob"; // This will cause an error because name2 is a constant and cannot be reassigned.

var city2: string = "New York";
city2 = "Los Angeles"; // This is allowed, but it is generally recommended to use let and const instead of var to avoid unexpected behavior.        

/* 4. Redclaration- In TypeScript, you can redeclare variables declared with var, but not with let and const.

Example- */ 
var city3: string = "New York";
var city3: string = "Los Angeles"; // This is allowed, but it can lead to unexpected behavior and is generally not recommended.

let city4: string = "New York";
// let city4: string = "Los Angeles"; // This will cause an error because city4 has already been declared with let.

const name3: string = "Alice";
// const name3: string = "Bob"; // This will cause an error because name3 has already been declared with const.     


/* 5. Hoisting- In TypeScript, variable declarations are hoisted to the top of their scope, but only var declarations are initialized with undefined. let and const declarations are also hoisted, but they are not initialized until their definition is evaluated, which means they cannot be accessed before they are declared.

Example- */ 
function hoistingExample() {
    //console.log(x); // Output: undefined (due to hoisting)
    // console.log(y); // Error: Cannot access 'y' before initialization
    // console.log(z); // Error: Cannot access 'z' before initialization

   // var x = 10; //var declarations are hoisted and initialized with undefined, so this will not cause an error, but it will output undefined instead of 10.
    let x=10; // let and const declarations are hoisted but Not Initialized, so this will cause an error if you try to access x before its declaration. However, since we are declaring x after the console.log statement, it will work correctly and output 10.
    let y = 20;
    const z = 30;

    console.log(x); // Output: 10
    console.log(y); // Output: 20
    console.log(z); // Output: 30
}

hoistingExample();