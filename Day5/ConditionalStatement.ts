//if condition is true then execute the block of code otherwise skip it

/*let age: number = 20;

if (age >= 18) {
    console.log("You are an adult."); // Output: You are an adult.
} else {
    console.log("You are a minor.");
}

//You can also use if statements without an else block if you only want to execute code when a condition is true:

let temperature: number = 30;

if (temperature > 25) {
    console.log("It's a hot day!"); // Output: It's a hot day!
}

//You can also use multiple if statements to check for different conditions:

let score: number = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B"); // Output: Grade: B
} else if (score >= 70) {
    console.log("Grade: C");
}
    else if (score >= 60) { 
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }           

   // if, else conditional statements are used to control the flow of code based on certain conditions. They allow you to execute different blocks of code depending on whether a condition is true or false. This is fundamental for making decisions in your code and creating dynamic behavior.
  // example:
   let num: number = 10;

   if (num%2 == 0) {
       console.log(`The ${num} is even.`); // Output: The number is even.
   } else {
       console.log(`The ${num} is odd.`);
   }    */

       //switch case statement is used to perform different actions based on different conditions. It is an alternative to using multiple if-else statements when you have a variable that can take on multiple values and you want to execute different code for each value.
       
        let day: number = 1;  

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // Output: Wednesday
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}         


       
