/*
1. How to create a class in TypeScript?

In TypeScript, you can create a class using the `class` keyword. A class is a blueprint for creating objects with specific properties and methods. Here's a simple example of how to create a class in TypeScript:  

2. read only properties and methods

3. static properties and methods
//static properties and methods belong to the class itself rather than to any specific instance of the class. They can be accessed without creating an instance of the class and are shared among all instances. Static properties and methods are defined using the `static` keyword. Here's an example of how to use static properties and methods in TypeScript: 
// In this example, we have a `MathUtils` class with a static property `PI` and a static method `calculateCircleArea`. We can access the static property and method directly using the class name without creating an instance of the class. Static members are useful for utility functions or constants that are not tied to any specific instance of the class.
// Static properties and methods are shared among all instances of the class, so if you change the value of a static property, it will affect all instances that access that property. Static methods can also be called without creating an instance of the class, making them convenient for utility functions or operations that don't require instance-specific data.
// static properties /methods can be modified directly using the class name. However, it's generally recommended to access static members using the class name for better readability and to indicate that they belong to the class rather than to any specific instance.

4. inheritance

5. access modifiers (public, private, protected)

6. abstract classes and methods

7. interfaces and implementation

8. getters and setters
*/

/*======================================================================================*/

//1. How to create a class in TypeScript?

class Student {
   readonly name: string; // Read-only property (can only be assigned once,inside constructor or at the time of declaration)
    studentId: number; //Regular poperty (can be modified)
    email?: string; // Optional property (can be undefined) 
    age: number;
     grade: string;
    static schoolName: string="ABC School"; // Static property (shared among all instances of the class)

    constructor(name: string, studentId: number, age: number, grade: string, email?: string) {
        this.name = name;
        this.studentId = studentId;
        this.email = email;
        this.age = age;
        this.grade = grade;
         //Student.schoolName = "ABC School"; // Accessing static property inside constructor
    }
//Method:1 to get student details
    getDetails(): string{
       // if(this.email!==undefined)
       //if(this.email!=null) // this will check for both null and undefined
       if(typeof this.email==="string")
       //  if(this.email)
        return `Name: ${this.name}, Id: ${this.studentId}, Age: ${this.age}, Grade: ${this.grade}, Email: ${this.email}, School: ${Student.schoolName}`;
    else
        return `Name: ${this.name}, Id: ${this.studentId}, Age: ${this.age}, Grade: ${this.grade}, School: ${Student.schoolName}`;
    }

    //Method:2 to change school name (static method)
    static changeSchoolName(newName: string): void {
        Student.schoolName = newName;
    }   
}

let student1 = new Student("Alice", 123, 20, "A");
console.log(student1.getDetails()); // Output: Alice, Id: 123, Age: 20, Grade: A, School: ABC School   

Student.changeSchoolName("XYZ School"); // Changing school name using static method
console.log(student1.getDetails()); // Output: Alice, Id: 123, Age: 20, Grade: A, School: XYZ School

let student2= new Student("RRM", 897, 40, 'E', "123iam@gmail.com");
console.log(student2.getDetails());

student1.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
student1.studentId = 456; // This is allowed since studentId is not read-only
console.log(student1.getDetails()); // Output: Name: Alice, Id: 456, Age: 20, Grade: A

//