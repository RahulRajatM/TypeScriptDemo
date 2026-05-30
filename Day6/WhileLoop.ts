//while loop is used to execute a block of code repeatedly as long as a specified condition is true. The syntax for a while loop is as follows:

/* while (condition) {
    // code to be executed
} */
//Example:
let count: number = 0;
/* 
while (count < 5) {
    console.log(count); // Output: 0, 1, 2, 3, 4
    count++;
}

//In this example, the while loop will continue to execute as long as the value of count is less than 5. Inside the loop, we print the current value of count and then increment it by 1. Once count reaches 5, the condition becomes false and the loop terminates. */
       
while(count<=10){
 if(count%2==0){
    console.log(count); // Output: 0, 2, 4, 6, 8, 10
 }
 count++;
}