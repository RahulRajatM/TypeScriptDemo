//for loop is a control flow statement that allows you to execute a block of code a specific number of times. The syntax for a for loop in TypeScript is as follows:

/* for (initialization; condition; increment/decrement) {
    // code to be executed
} */

//Example:
for (let i: number = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

//In this example, the for loop initializes a variable i to 0, checks if i is less than 5, and increments i by 1 in each iteration. The loop will execute the block of code inside it as long as the condition (i < 5) is true. Once i reaches 5, the condition becomes false and the loop terminates.

//You can also use a for loop to iterate over arrays or other iterable objects. For example:

let fruits: string[] = ["apple", "banana", "cherry"];

for (let i: number = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Output: apple, banana, cherry
}

//In this example, the for loop iterates over the fruits array and prints each fruit to the console. The loop continues until it has processed all elements in the array.

//You can also use a for...of loop to iterate over iterable objects in a more concise way. For example:

for (let fruit of fruits) {
    console.log(fruit); // Output: apple, banana, cherry
}

//In this example, the for...of loop iterates directly over the elements of the fruits array, making the code cleaner and easier to read.       


 let i: number; // global variable declaration
/*for(i=0; i<=10; i++){
    if(i%2==0){
        console.log(i); // Output: 0, 2, 4, 6, 8, 10
    }
} */
for(i=0; i<=5; i++);
console.log(i); // Output: 6 (due to the semicolon after the for loop, the loop does not execute the block of code and i is incremented to 6)
