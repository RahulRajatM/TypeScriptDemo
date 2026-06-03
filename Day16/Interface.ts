// Interface in TypeScript  - An interface in TypeScript is a way to define the structure of an object.
//  It specifies the properties and methods that an object should have, without providing the implementation.
//  Interfaces are used to enforce a contract on the shape of an object, ensuring that it adheres to a specific structure. 
//  They are particularly useful for defining the expected structure of objects in a type-safe manner, allowing for better code organization and maintainability.
//  Abstract methods in TypeScript - An abstract method is a method that is declared in an abstract class but does not have an implementation.
//  Abstract methods are meant to be overridden by subclasses, and they define a contract that the subclasses must fulfill. 
//  An abstract method is declared using the abstract keyword and does not have a body. 
//  Subclasses that extend the abstract class must provide an implementation for the abstract method, ensuring that they adhere to the defined contract.    

/*
### Differences between regular properties/methods and abstract methods in a class, optional properties in an interface, readonly properties in an interface, function types in an interface, extending interfaces in TypeScript, and class implements interface in TypeScript:    

1. Regular properties and methods in a class are defined with their implementation, while abstract methods are declared without an implementation and must be implemented by subclasses.
 * Regular properties and methods can be accessed and used directly, while abstract methods cannot be called directly and must be implemented in a subclass before they can be used.
 * Regular properties and methods can have access modifiers (public, private, protected), while abstract methods are typically declared as public to ensure that they can be implemented by subclasses. 

2. Optional properties in an interface are defined with a question mark (?) after the property name, indicating that the property is not required.
 * Optional properties allow for more flexibility when defining the structure of an object, as they can be omitted when creating an instance of the interface.
 * When accessing an optional property, TypeScript will check if the property exists before trying to access it, preventing potential runtime errors. 
 * Optional properties are useful when you want to define a structure that may have some properties that are not always present, allowing for more versatile and adaptable code.    

3. Readonly properties in an interface are defined with the readonly keyword, indicating that the property cannot be modified after it has been assigned a value.
 * Readonly properties can only be assigned a value once, either during declaration or in the constructor of a class that implements the interface.
 * Once a readonly property has been assigned a value, it cannot be changed, providing immutability and ensuring that the value remains constant throughout the lifecycle of the object.
 * Readonly properties are useful for defining constants or values that should not be modified after they have been set, helping to prevent unintended side effects and maintain data integrity.    

4. function types in an interface are defined by specifying the method signature, including the parameters and return type, without providing an implementation.
 * Function types in an interface allow you to define the expected structure of a function, ensuring that any function that implements the interface adheres to the specified signature.
 * When a class implements an interface with function types, it must provide an implementation for the function, ensuring that the contract defined by the interface is fulfilled.
 * Function types in interfaces are useful for defining callback functions, event handlers, or any situation where you want to specify the expected behavior of a function without providing the implementation details.    

5. Extending interfaces in TypeScript allows you to create a new interface that inherits the properties and methods of an existing interface, while also adding new properties or methods specific to the new interface.
 * When an interface extends another interface, it can add new properties or methods, but it cannot modify or remove the properties or methods of the parent interface.
 * A class that implements an extended interface must provide implementations for all properties and methods defined in both the parent and child interfaces, ensuring that it adheres to the full contract defined by the extended interface.
 * Extending interfaces promotes code reuse and allows for more flexible and modular design, as you can create new interfaces based on existing ones without having to duplicate code.  

6. class implements interface in TypeScript allows a class to adhere to the structure defined by an interface, ensuring that the class provides implementations for all properties and methods specified in the interface.
 * When a class implements an interface, it must provide concrete implementations for all the properties and methods defined in the interface, ensuring that the class adheres to the contract specified by the interface.
 * Implementing an interface allows for better code organization and maintainability, as it provides a clear structure for the class and ensures that it meets the expected requirements defined by the interface.
 * A class can implement multiple interfaces, allowing it to adhere to multiple contracts and providing greater flexibility in design.  
 */


//Example 1. Regular properties/methods
// Define an interface for a Person
interface Person {
    name: string;
    age: number;
    greet(): void; // Method signature without implementation
}

// creating an object that adheres to the Person interface
let student1: Person = {
    name: "Alice",
    age: 20,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

student1.greet(); // Output: Hello, my name is Alice and I am 20 years old.

// Implementing the Person interface in a class
class Student implements Person {
    name: string;
    age: number;
    studentId: number;

    constructor(name: string, age: number, studentId: number) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}.`);
    }

}   

const student2 = new Student("Bob", 22, 12345);
student2.greet(); // Output: Hello, my name is Bob and I am 22 years old. My student ID is 12345.


// Example2: Interface with optional properties  
interface Employee {
    name: string;
    age: number;
    department?: string; // Optional property
}

const employee1: Employee = {
    name: "Charlie",
    age: 30
};

const employee2: Employee = {
    name: "Dave",
    age: 25,
    department: "HR"
};

console.log(employee1); // Output: { name: 'Charlie', age: 30 }
console.log(employee2); // Output: { name: 'Dave', age: 25, department: 'HR' }  

// Example 3: Readonly properties in an interface
interface Car {
    readonly make: string;
    readonly model: string;
    year: number;
    display(): void; //abstract method without implementation
}

const car11: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    display() {
        console.log(`Car: ${this.year} model ${this.make} ${this.model}`);
    }
};

// car11.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property.
// car11.model = "Civic"; // Error: Cannot assign to 'model' because it is a read-only property.
car11.year = 2021; // Allowed, as 'year' is not a readonly property

console.log(car11); /* Output:
  {
  make: 'Toyota',
  model: 'Camry',
  year: 2021,
  display: [Function: display]
} */  
car11.display(); // Output: Car: 2021 Toyota Camry

//Extending interfaces 

//parent interface
interface Shape {
    area(): string; // Abstract method without implementation
}

//child interface that extends the parent interface
interface Rectangle extends Shape {
    width: number;
    height: number;
}

class Square implements Rectangle {
    width: number;
    height: number;

    constructor(sideLength: number) {
        this.width = sideLength;
        this.height = sideLength;
    }

    area(): string {
        return `Area of square with side length ${this.width} is ${this.width * this.height}`;
    }
}

const square1 = new Square(5);
console.log(square1.area()); // Output: Area of square with side length 5 is 25  


// Difference between class and interface in TypeScript:

// 1. A class is a blueprint for creating objects, while an interface is a contract that defines the structure of an object.
// 2. A class can have implementations for its methods, while an interface only defines method signatures without implementations.
// 3. A class can be instantiated to create objects, while an interface cannot be instantiated directly.
// 4. A class can have constructors and can maintain state through properties, while an interface cannot have constructors or maintain state.
// 5. A class can implement multiple interfaces, allowing it to adhere to multiple contracts, while an interface cannot implement other interfaces but can extend them. 
