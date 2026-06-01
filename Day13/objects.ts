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
    job: "Software Engineer",
    salary: 50000,
    department: "IT",
    getDetails: function():string{
        return (`Name: ${this.name}, Designation: ${this.job}, Salary: ${this.salary}`);
       //console.log(`name= ${this.name} designation= ${this.job} salary= ${this.salary}`);
    }
}
console.log(typeof employee);

//accessing object data- approach 1 (using dot (.) notation)

console.log(`Name= ${employee.name}, Salary= ${employee.salary}, Designation= ${employee.job}`);

console.log(employee.getDetails());  //name: John Doe, designation: Software Engineer, salary: 50000

//accesssing object- approach 2 (using bracket notation)
console.log(`Name= ${employee["name"]}, Salary= ${employee["salary"]}, Designation= ${employee["job"]}`);  //Name= John Doe, Salary= 50000, Designation= Software Engineer

console.log(employee["getDetails"]());

//Modify tha value

employee.job= "Manager";

console.log("modified job is: ", employee.job);
// In this example, we defined an object called `employee` with properties such as `name`, `job`, `salary`, and `department`, as well as a method called `getDetails`. We accessed the properties of the object using both dot notation and bracket notation. We also modified the value of the `job` property and printed the modified value. The 'object' type allows us to define an object with any structure, but it does not provide type safety for the properties and methods of the object. If we want to have more specific types for the properties and methods, we can use inline type objects or type aliases, which will be covered in the next sections.

//2. Inline Type object- we also define the datatype of the keys (TS)

// Problem with inline type object is that we have to repeat the same structure for every object we create. To avoid this repetition, we can use type aliases or classes to define a reusable structure for our objects.

let student1: {
    name:string,
    age:number,
    grade:string,
    getSummary:()=>string
} =
{
    name:"rahul",
    age:31,
    grade: "E",
    getSummary: function() { return `Welcome ${this.name}, your age is ${this.age} and your grade is ${this.grade}`; }
}
console.log(student1.getSummary()); //Welcome rahul, your age is 31 and your grade is E


let student2: {
    name:string,
    age:number,
    grade:string,
    getSummary:()=>string
} =
{
    name:"Annu",
    age:27,
    grade: "E",
    getSummary() { return `Welcome ${this.name}, your age is ${this.age} and your grade is ${this.grade}`; }
}
console.log(student2.getSummary()); //Welcome Annu, your age is 27 and your grade is E


//3. using type aliases (JS/TS) : ALLOWS CREATING A NEW NAME FOR AN EXISTING TYPE. IT CAN BE USED TO SIMPLIFY COMPLEX TYPES OR TO CREATE MORE DESCRIPTIVE NAMES FOR TYPES. TYPE ALIASES ARE DEFINED USING THE `type` KEYWORD FOLLOWED BY THE NEW NAME AND THE TYPE DEFINITION. HERE'S AN EXAMPLE OF USING TYPE ALIASES IN TYPESCRIPT:
type Student = {
    name:string,
    age:number,
    grade:string,
    getSummary:()=>string
};

let student3: Student = {   
    name:"Priya",
    age:25,
    grade: "A",
    getSummary() { return `Welcome ${this.name}, your age is ${this.age} and your grade is ${this.grade}`; }
}
console.log(student3.getSummary()); //Welcome Priya, your age is 25 and your grade is A

let student4: Student = {
    name:"Rohit",
    age:28,
    grade: "B",
    getSummary() { return `Welcome ${this.name}, your age is ${this.age} and your grade is ${this.grade}`; }
}
console.log(student4.getSummary()); //Welcome Rohit, your age is 28 and your grade is B

// In this example, we defined a type alias called `Student` that represents the structure of a student object. We then created two student objects, `student3` and `student4`, using the `Student` type alias. This allows us to avoid repeating the same structure for each student object and provides better readability and maintainability for our code. Type aliases are a powerful feature in TypeScript that can help simplify complex types and make our code more expressive.    

type product={
    name:string,
    price:number,
    category:string,
    getDetails:()=>string
    }

let product1:product={
    name:"Laptop",
    price: 1000,
    category: "Electronics",
    getDetails() { return `Product Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`; }
}

console.log(product1.getDetails()); //Product Name: Laptop, Price: 1000, Category: Electronics

let product2:product={
    name:"Phone",
    price: 500,
    category: "Electronics",
    getDetails() { return `Product Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`; }
}

console.log(product2.getDetails()); //Product Name: Phone, Price: 500, Category: Electronics

// In this example, we defined a type alias called `product` that represents the structure of a product object. We then created two product objects, `product1` and `product2`, using the `product` type alias. This allows us to avoid repeating the same structure for each product object and provides better readability and maintainability for our code. Type aliases are a powerful feature in TypeScript that can help simplify complex types and make our code more expressive.    

//Example2: Intersection Types - Intersection types allow us to combine multiple types into a single type that has all the properties of the combined types. This is useful when we want to create a new type that has the properties of multiple existing types. Here's an example of using intersection types in TypeScript:

type Employee = {
    name:string,
    salary:number,
    department:string
}

type Manager = {
    name:string,
    teamSize:number,
    department:string
}
//intersection type that combines Employee and Manager types
type TeamLead = Employee & Manager & {getontactInfo:()=>string} & {age:number};

let teamLead1: TeamLead = {
    name: "Alice",
    salary: 80000,
    department: "IT",
    teamSize: 5,
    age: 31,
    getontactInfo() { return `Contact Info for ${this.name}: Email -    ${this.name.toLowerCase()}@company.com, Phone - 123-456-7890`; }        

};

console.log(`Team Lead Name: ${teamLead1.name}, Salary: ${teamLead1.salary}, Department: ${teamLead1.department}, Team Size: ${teamLead1.teamSize}, Age: ${teamLead1.age}`); //Team Lead Name: Alice, Salary: 80000, Department: IT, Team Size: 5, Age: 31

// In this example, we defined two types, `Employee` and `Manager`, and then created an intersection type called `TeamLead` that combines the properties of both types. The `TeamLead` type has all the properties of both `Employee` and `Manager`, allowing us



/*======================================================================================================*/

//4. Using the classes (JS ES16/TS)
class Person {
    firstName: string;
    lastName: string;
    age: number;
    place: string;

    constructor(firstName: string, lastName: string, age: number, place: string) {
        this.firstName = firstName;
        this.lastName= lastName;
        this.age = age;
        this.place = place;
    }

    getFullname() {
        return `${this.firstName}  ${this.lastName}`;
    }

    getSummary() {
        return `Welcome ${this.getFullname()}, your age is ${this.age} and your place is ${this.place}`;
    }
}

let person1 = new Person("Suresh", 'Ram', 30, "Aliyaspur ");
console.log(person1.getSummary()); //Welcome Suresh Ram, your age is 30 and your place is Aliyaspur 

let person2 = new Person("Ramesh", 'Kumar', 28, "Bangalore");
console.log(person2.getSummary()); //Welcome Ramesh Kumar, your age is 28 and your place is Bangalore

// In this example, we defined a class called `Person` with properties such as `firstName`, `lastName`, `age`, and `place`, as well as methods like `getFullname` and `getSummary`. We then created two instances of the `Person` class, `person1` and `person2`, using the `new` keyword. The class provides a blueprint for creating objects with specific properties and behaviors, allowing us to create multiple instances of the class with different values for the properties. Classes are a fundamental feature of object-oriented programming in TypeScript and provide a powerful way to structure and organize code.    
