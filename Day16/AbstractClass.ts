// Abstract class example
abstract class Vehicle {
    public abstract make2: string; // Abstract property without implementation
    public abstract model2: string; // Abstract property without implementation

    public abstract displayInfo(): void; // Abstract method without implementation
}

class NewCar extends Vehicle {
    public make2: string;                
    public model2: string;  
   public color: string; // Regular property with implementation

    constructor(make2: string, model2: string, color: string) {
        super(); // Call the constructor of the abstract class
        this.make2 = make2;
        this.model2 = model2;
       this.color = color;
    }

    displayInfo() {
        console.log(`Car: ${this.make2} ${this.model2}, Color: ${this.color}`);
    }
}   
 
const car = new NewCar("Toyota", "Camry", "Red");
car.displayInfo(); // Output: Car: Toyota Camry, Color: Red    

