// Inheritance in Typescript

// A class can reuse the properties and methods of another class
// Inheritance is a mechanism where a new class is derived from an existing class, inheriting its properties and methods while adding new features or modifying existing ones.

// Base class (Parent class)
class Animal {
    name: string;
    color?: string;

    constructor(name: string, color?:string) {
        this.name = name;
        this.color = color;
    }

    eat() {
        if (this.color) {
            console.log(`${this.name} is eating and has a ${this.color} color.`);
        } else {
            console.log(`${this.name} is eating.`);
        }
    }

    // Method to determine if the animal is a pet
    isPet(): boolean {
        return false; // Default implementation, can be overridden by subclasses
    }
}

// Derived class (Child class) that inherits from Animal
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string, color?:string) {
        super(name, color); // Call the constructor of the base class
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }

    isPet() {
        return true; // Assuming all dogs are pets
    }
}

// Derived class (Child class) that inherits from Animal
class Cat extends Animal {
    breed: string;

    constructor(name: string, breed: string, color?:string) {
        super(name, color); // Call the constructor of the base class
        this.breed = breed;
    }

    meow() {
        console.log(`${this.name} is meowing.`);
    }   

    // Override the isPet method to provide a specific implementation for cats
    isPet(): boolean {     
        return true; // Assuming all dogs are pets
    }
}       
 //Animal class has a property name and a method eat(). The Dog class extends the Animal class, inheriting its properties and methods. The Dog class also has its own property breed and a method bark().

// Creating an instance of the Dog class
const myDog = new Dog("Buddy", "Golden Retriever", "Black");
myDog.eat(); // Output: Buddy is eating.
myDog.bark(); // Output: Buddy is barking.
console.log(myDog.isPet()); // Output: true

// The Dog class can access the eat() method from the Animal class because it inherits from it. This demonstrates how inheritance allows for code reuse and the creation of more specific classes based on general ones.        

let animal:Animal= new Dog("Max", "Labrador");
animal.eat(); // Output: Max is eating.
// animal.bark(); // Error: Property 'bark' does not exist on type 'Animal'.
//animal.breed; // Error: Property 'breed' does not exist on type 'Animal'.
//isPet() method is accessible because it is defined in the Animal class, and the Dog class overrides it to return true. However, the bark() method and breed property are not accessible through the animal variable because they are specific to the Dog class and not defined in the Animal class.
// In this example, we create an instance of the Dog class but assign it to a variable of type Animal. This is possible because Dog is a subclass of Animal. However, since the variable is of type Animal, we can only access the methods defined in the Animal class. The bark() method is not accessible through the animal variable because it is not defined in the Animal class, demonstrating polymorphism in TypeScript.    


