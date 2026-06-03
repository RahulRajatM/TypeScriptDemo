//super()- used to call parent class constructor
//super.method()- used to call parent class method
// super.property- can not be used to access parent class property  

class Super {
    name: string;
    num: number=10;
    constructor(name: string, num?: number) {
        this.name = name;
        this.num = num ?? this.num; // Use the provided number or the default value
    }

    greet() {
        console.log(`Hello, I am ${this.name} and I'm ${this.num} years old.`);
    }
}

class Sub extends Super {

   num:number= 20;
    constructor(name: string, num?: number) {
        super(name, num); // Call the constructor of the parent class (must be called before using 'this')
         this.num = num ?? this.num; // Use the provided number or the default value for the Sub class
    }

    greet() {
        super.greet(); // Call the greet method of the parent class
       // this.num;   // used to access current class property, it will give 20 as output
      //   super.num;  // Access the num property from the parent class, it will give compilation error if we try to access num directly as it is overridden in the Sub class
        console.log(`Nice to meet you!`);
        console.log(`Sub class num: ${this.num}`); // Access the num property from the Sub class, it will give 20 as output
    }
}

const subInstance = new Sub("Alice", 80);
subInstance.greet();
// Output:
// Hello, I am Alice and I'm 20 years old.
// Nice to meet you!   

const sub1Instance = new Sub("Bob");
sub1Instance.greet();
// Output:
// Hello, I am Bob and I'm 20 years old.
// Nice to meet you!   