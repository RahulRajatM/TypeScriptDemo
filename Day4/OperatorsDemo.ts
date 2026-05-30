let a:number=10, b:number=20, c:string="Rahul";

//Arthematic Operators
/* console.log("a + b =", a + b); // Output: a + b = 30
console.log("a - b =", a - b); // Output: a - b = -10
console.log("a * b =", a * b); // Output: a * b = 200
console.log("b / a =", b / a); // Output: b / a = 2, returns the quotient of b divided by a
console.log("b % a =", b % a); // Output: b % a = 0, returns the remainder of b divided by a
console.log("a ** 2 =", a ** 2); // Output: a ** 2 = 100, returns a raised to the power of 2
 */
//Assignment Oprators
/* a=100; b=50
//a=a+b
//OR
a+=b
console.log("a after addition assignment:", a); // Output: a after addition assignment: 150

//a=a-b
//OR
a-=b
console.log("a after subtraction assignment:", a); // Output: a after subtraction assignment: 100

//a=a*b
//OR
a*=b
console.log("a after multiplication assignment:", a); // Output: a after multiplication assignment: 5000

//a=a/b
//OR
a/=b
console.log("a after division assignment:", a); // Output: a after division assignment: 100

//a=a%b
//OR
a%=b
console.log("a after modulus assignment:", a); // Output: a after modulus assignment: 0

//a=a**2
//OR
a**=2
console.log("a after exponentiation assignment:", a); // Output: a after exponentiation assignment: 0   
 */
//Comparison Operators OR Relational Operators
console.log("RELATIONAL OPERATORS:");
 console.log("a == b:", a == b); // Output: a == b: false, only checks for value equality, not type
console.log("a === b:", a === b); // Output: a === b: false, STRICK EQUALITY CHECKS BOTH VALUE AND TYPE
console.log("a != b:", a != b); // Output: a != b: true
console.log("a > b:", a > b);   // Output: a > b: false
console.log("a < b:", a < b);   // Output: a < b: true
console.log("a >= 10:", a >= 10); // Output: a >= 10: true
console.log("b <= 20:", b <= 20); // Output: b <= 20: true

/*
//Logical Operators
console.log("(a < b) && (b > 15):", (a < b) && (b > 15)); // Output: (a < b) && (b > 15): true
console.log("(a > b) || (b > 15):", (a > b) || (b > 15)); // Output: (a > b) || (b > 15): true
console.log("!(a < b):", !(a < b)); // Output: !(a < b): false

//String Concatenation
console.log("Hello, " + c + "!"); // Output: Hello, Rahul!  
 */

//combination of logical and relational operators
console.log("(a < b) && (c === 'Rahul'):", (a < b) && (c === 'Rahul')); // Output: (a < b) && (c === 'Rahul'): true
console.log("(a > b) || (c === 'Rahul'):", (a > b) || (c === 'Rahul')); // Output: (a > b) || (c === 'Rahul'): true
console.log("!(a < b) && (c !== 'Rahul'):", !(a < b) && (c !== 'Rahul')); // Output: !(a < b) && (c !== 'Rahul'): false 