// object - object contains properties and behaviours.
// object contains variables & methods
// object is a collection of key and value pairs.

//Example:
//employee -- name,designation,sal, dept
//bonus(), getDetails(), setDeatils()

// Different ways to create an object in JS/TS
//1. using 'Object' type- Directly define values for variable (JS/TS)
//2. Inline Type object- we also define the datatype of the keys (TS)
//3. using type aliases (JS/TS)
//4. Using the classes (JS ES16/TS)


//1. using 'Object' type- Directly define values for variable (JS/TS)
//The TypeScript 'object' type is a built-in type that represents any non-primitive value, including arrays, functions, and objects. It is a more general type than specific object types and can be used when you want to allow any kind of object as a value. Here's an example of using the 'object' type in TypeScript:
/*let employee: object = {
    name: "John Doe",
    designation: "Software Engineer",
    salary: 50000,
    department: "IT",
    bonus: function() {
        return this.salary * 0.1; // Calculate bonus as 10% of salary
    },
    getDetails: function() {
        return `Name: ${this.name}, Designation: ${this.designation}, Salary: ${this.salary}, Department: ${this.department}`;
    }
};

console.log(employee.getDetails()); // Output: Name: John Doe, Designation: Software Engineer, Salary: 50000, Department: IT
console.log(employee.bonus()); // Output: 5000
*/

// In this example, we defined an object called `employee` using the 'object' type. The object has properties such as `name`, `designation`, `salary`, and `department`, as well as methods like `bonus` and `getDetails`. The 'object' type allows us to define an object with any structure, but it does not provide type safety for the properties and methods of the object. If we want to have more specific types for the properties and methods, we can use inline type objects or type aliases, which will be covered in the next sections.

/*let employee: object = {
    name: "John Doe",
    designation: "Software Engineer",
    salary: 50000,
    department: "IT"
} */

let employee = {
    name: "John Doe",
    designation: "Software Engineer",
    salary: 50000,
    department: "IT",
    getDetails: function():string{
        return (`name: ${this.name} designation: ${this.designation} salary: ${this.salary}`);
       //console.log(`name: ${this.name} designation ${this.designation} salary ${this.salary}`);
    }
}
console.log(typeof employee);

//accessing object data- approach 1 (using . notation)

console.log(employee.name, employee.salary);