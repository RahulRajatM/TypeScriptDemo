// Arrays in typescript
// An array is a data structure that can hold multiple values of the same type. In TypeScript, you can define an array using square brackets [] and specify the type of elements it will contain.
//Arrays can be defined in two ways: using the array literal syntax or using the Array constructor. Here are some examples of how to define and use arrays in TypeScript:
// Arrays are ordered collections of elements, and they can be of any type, including primitive types (like numbers and strings) or even complex types (like objects and other arrays). You can perform various operations on arrays, such as adding, removing, and accessing elements, as well as iterating over them using loops or array methods.
// Arrays start with an index of 0, which means that the first element of the array is accessed using index 0, the second element using index 1, and so on. You can also use negative indices to access elements from the end of the array, where -1 refers to the last element, -2 refers to the second-to-last element, and so on.
// Arrays last index is always one less than the length of the array. For example, if an array has a length of 5, the last index will be 4 (0-based indexing). This is important to keep in mind when accessing elements in an array to avoid out-of-bounds errors.

// Arrays declaration and initialization using array literal syntax:
/* let fruits: string[] = ["apple", "banana", "orange"];
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(fruits); // Output: ["apple", "banana", "orange"]
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// You can also use the Array constructor to create arrays:
let moreFruits: Array<string> = new Array("grape", "melon", "kiwi");
let moreNumbers: Array<number> = new Array(6, 7, 8, 9, 10);
console.log(moreFruits); // Output: ["grape", "melon", "kiwi"]
console.log(moreNumbers); // Output: [6, 7, 8, 9, 10]

//using generic array type to create an array that can hold multiple types of values:
let empDetails:Array<string|number>= ["john", 30, "developer"]; 

// Accessing array elements
console.log(fruits[0]); // Output: apple
console.log(numbers[2]); // Output: 3

// Modifying array elements
fruits[1] = "blueberry";
numbers[3] = 42;

console.log(fruits); // Output: ["apple", "blueberry", "orange"]
console.log(numbers); // Output: [1, 2, 3, 42, 5]

// You can also use array methods to manipulate arrays. For example:
fruits.push("pear"); // Adds a new fruit to the end of the array
numbers.pop(); // Removes the last number from the array

console.log(fruits); // Output: ["apple", "blueberry", "orange", "pear"]
console.log(numbers); // Output: [1, 2, 3, 42]

// You can also iterate over arrays using loops. For example:
//traditional for loop
for (let i: number = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Output: apple, blueberry, orange, pear
}
//for...of loop
for (let num of numbers) {
    console.log(num); // Output: 1, 2, 3, 42
}
//for ...in loop (iterates over the indices of the array)
for (let index in fruits) {
    console.log(fruits[index]); // Output: apple, blueberry, orange, pear (values of the fruits array)
}

// In this example, we defined two arrays: `fruits` and `numbers`. We accessed and modified elements in the arrays, used array methods to manipulate them, and iterated over the arrays using both a traditional for loop and a for...of loop.  
*/

//Passing an Array to the function
//Search an element in a array using function
let result1= (num:number, arr:number[]):boolean =>{

    for(let value of arr){
           if(value==num){
            return true;
           }
    }
    return false;
};
let arr=[10,20,30,40];
console.log(result1(190,arr));

//A function takes an array and return an array
let capitalize= (arr:string[]):string[]=>{
    let result:string[]=[];
    for(let index in arr){
        result[index]= arr[index].toUpperCase();
    }
    return result;
};
console.log(capitalize(["rahul",'rajat','mishra']));