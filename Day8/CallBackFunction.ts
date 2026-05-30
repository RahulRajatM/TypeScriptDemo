// Callback Functions are functions that are passed as arguments to other functions and are executed after a certain event or condition is met. They are commonly used in asynchronous programming, event handling, and functional programming. Here's an example of a callback function in TypeScript:

// Example 1: Callback function with setTimeout
/* function fetchData(callback: (data: string) => void): void {
    // Simulating an asynchronous operation, such as fetching data from an API
    setTimeout(() => {
        const data = "Data fetched from API";
        callback(data); // Calling the callback function with the fetched data
    }, 2000);
}

fetchData((result) => {
    console.log(result); // Output: Data fetched from API (after 2 seconds)
});

// In this example, the `fetchData` function takes a callback function as an argument. The `setTimeout` simulates an asynchronous operation, and once the data is "fetched," the callback function is called with the fetched data as its argument. This allows us to handle the result of the asynchronous operation once it is completed. Callback functions are essential for managing asynchronous code and ensuring that certain actions are performed after specific events occur.

// Example 2: Callback function with event handling
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", () => {
    console.log("Button was clicked!"); // Output: Button was clicked! (when the button is clicked)
});

// In this example, we create a button element and add an event listener for the "click" event. The callback function provided to `addEventListener` will be executed whenever the button is clicked, allowing us to respond to user interactions effectively.

// Example 3: Callback function with array methods
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// In this example, we use the `map` method to create a new array of squared numbers. The callback function provided to `map` takes each number from the original array and returns its square. This demonstrates how callback functions can be used in functional programming to transform data in arrays.

// Callback functions are a fundamental concept in JavaScript and TypeScript, enabling developers to write more flexible and responsive code by allowing functions to be passed around as first-class citizens.     
 */

//Example 4: 
//Function that takses callback as an argument
/* unction greet(name: string, callback: (message: string) => void) 
{
console.log(name);
callback("Hello"); // executing the callback function   
}
//callback function  
function showMessage(message:string){
    console.log(message);
}
greet("John" , showMessage); */

//Example 5:

function sum(a:number, b:number, callback:(result:number)=>void):void{
    let result= a+b;
    callback(result); // executing the callback function with the result
}

//callback function
function displayResult(result:number):void{
    console.log(result);
}

sum(5,10,displayResult);