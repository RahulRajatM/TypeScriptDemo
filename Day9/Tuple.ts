// Tuple in typescript is a data type that allows you to store a fixed number of elements of different types in an array-like structure. It is defined using square brackets [] and can contain elements of any type, including other tuples.

// Example of a tuple in TypeScript:
let person: [string, number] = ["Alice", 30];
console.log(person); // Output: ["Alice", 30]

// In this example, we defined a tuple called `person` that contains a string (the person's name) and a number (the person's age). The first element of the tuple is a string, and the second element is a number. You can access the elements of the tuple using their index, just like you would with an array:

console.log(person[0]); // Output: Alice
console.log(person[1]); // Output: 30

// You can also define tuples with more than two elements and with different types. For example:
let employee: [number, string, boolean] = [12345, "John Doe", true];
console.log(employee); // Output: [12345, "John Doe", true]

// In this example, we defined a tuple called `employee` that contains a number (the employee ID), a string (the employee's name), and a boolean (indicating whether the employee is active). The first element of the tuple is a number, the second element is a string, and the third element is a boolean. You can access the elements of this tuple using their index as well:

console.log(employee[0]); // Output: 12345
console.log(employee[1]); // Output: John Doe
console.log(employee[2]); // Output: true

// Tuples are useful when you want to group related values together, especially when those values have different types. They provide a way to represent a fixed structure of data while still allowing for flexibility in the types of values that can be stored.       

for(let data of employee){
    console.log(data);
}

//Tuple Array
let student:[string, number][]=[["rahul",109], ["annu", 989], ['pathak',799]]
console.log(student.length);
console.log(student[0]);
let tp= student[0];
console.log(tp[0]);