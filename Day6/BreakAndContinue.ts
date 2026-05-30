// break and continue are used to control the flow of loops in TypeScript.

// The break statement is used to exit a loop prematurely. When a break statement is encountered inside a loop, the loop is immediately terminated, and the program continues with the next statement after the loop. For example:

for (let i: number = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is equal to 5
    }
    console.log(i); // Output: 0, 1, 2, 3, 4
}

// In this example, the loop will print the numbers from 0 to 4. When i reaches 5, the break statement is executed, and the loop terminates.

// The continue statement is used to skip the current iteration of a loop and move on to the next iteration. When a continue statement is encountered inside a loop, the remaining code in that iteration is skipped, and the loop proceeds with the next iteration. For example:

for (let i: number = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip the current iteration if i is even
    }
    console.log(i); // Output: 1, 3, 5, 7, 9
}

// In this example, the loop will print only the odd numbers from 0 to 9. When i is even, the continue statement is executed, and the loop skips the rest of the code for that iteration, moving on to the next value of i.     