// Method Overloading and Constructor Overloading in Typescript

class Calculator {
    //Ex1: Method Overloading
   /* add(a: number, b: number): number;
    add(a: string, b: string): string;

    add(a: any, b: any): any {
        if (typeof a === "number" && typeof b === "number") {
            return a + b; // Adding two numbers
        } else if (typeof a === "string" && typeof b === "string") {
            return a + b; // Concatenating two strings
        }
        throw new Error("Invalid arguments");
    }*/

      //Ex2: Method Overloading
      add(a:number, b:number,c:number):number;
      add(a:number, b:number):number;
      
      add(a:number, b:number, c?:number):number{
        if(c!==undefined){
            return a+b+c; // Adding three numbers
        }
        return a+b; // Adding two numbers
      }     
}

     // const calculator = new Calculator();
    // console.log(calculator.add(5, 10)); // Output: 15
    // console.log(calculator.add("Hello, ", "World!")); // Output: Hello, World!

    const calculator = new Calculator();
    console.log(calculator.add(5, 10)); // Output: 15
    console.log(calculator.add(5, 10, 15)); // Output: 30

// Constructor Overloading is not directly supported in TypeScript, but we can achieve similar functionality using optional parameters or by using different static factory methods to create instances of the class.

/*class Person {
    name: string;
    age: number;

    // Constructor with optional parameters
    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age || 0; // Default age to 0 if not provided
    }

    // Static factory method for creating a person with just a name
    static createWithName(name: string): Person {
        return new Person(name);
    }

    // Static factory method for creating a person with both name and age
    static createWithNameAndAge(name: string, age: number): Person {
        return new Person(name, age);
    }
}

const person1 = new Person("Alice");
console.log(person1); // Output: Person { name: 'Alice', age: 0 }

const person2 = new Person("Bob", 30);
console.log(person2); // Output: Person { name: 'Bob', age: 30 }

const person3 = Person.createWithName("Charlie");
console.log(person3); // Output: Person { name: 'Charlie', age: 0 }

const person4 = Person.createWithNameAndAge("Dave", 25);
console.log(person4); // Output: Person { name: 'Dave', age: 25 }       

*/

class Calci{
    //constructor overloading

    constructor(); // default constructor
    constructor(a:number, b:number); // parameterized constructor


    constructor(a?:number, b?:number){
        if(a!==undefined && b!==undefined){
            console.log(`Sum of ${a} and ${b}: ${a+b}`);
        }
        else{
            console.log("Default constructor called....");
        }
    }

}
let cal1= new Calci();
let cal2= new Calci(8,5);


