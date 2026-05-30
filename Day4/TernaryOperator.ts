//ternary/conditional operator
//syntax: condition ? expression1 : expression2
//if condition is true, expression1 is evaluated and returned; otherwise, expression2 is evaluated and returned.

let age2:number= 20;
let result2:string= age2 >= 18 ? "You are an adult." : "You are a minor.";
console.log(result2); // Output: You are an adult.

//You can also use the ternary operator in more complex expressions:
let num1:number= 10;
let num2:number= 20;
let max:number= num1 > num2 ? num1 : num2;
console.log("The maximum number is:", max); // Output: The maximum number is: 20

//The ternary operator can also be nested for multiple conditions:
let score:number= 85;
let grade:string= score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log("Your grade is:", grade); // Output: Your grade is: B

//let n:any = 5;
console.log("5"+3); // Output: 53, because the number 3 is converted to a string and concatenated with "5"
console.log("5"-3); // Output: 2, because the string "5" is converted to a number and then 3 is subtracted from it
console.log("5"*3); // Output: 15, because the string "5" is converted to a number and then multiplied by 3
console.log("5"/3); // Output: 1.6666666666666667, because the string "5" is converted to a number and then divided by 3    