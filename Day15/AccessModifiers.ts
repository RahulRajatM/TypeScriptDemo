// Access Modifiers in TypeScript
// 1. public - Accessible from anywhere
// 2. private - Accessible only within the same class
// 3. protected - Accessible within the same class and its subclasses   

class AccessModifiers {
    public publicProperty: string;
    private privateProperty: string;
    protected protectedProperty: string;

    constructor(publicProp: string, privateProp: string, protectedProp: string) {
        this.publicProperty = publicProp;
        this.privateProperty = privateProp;
        this.protectedProperty = protectedProp;
    }

    public publicMethod() {
        console.log("This is a public method.");
    }

    private privateMethod() {
        console.log("This is a private method.");
    }

    protected protectedMethod() {
        console.log("This is a protected method.");
    }
}

class SubClass extends AccessModifiers {

    private employeeId: number;

    constructor(publicProp: string, privateProp: string, protectedProp: string, employeeId: number) {
        super(publicProp, privateProp, protectedProp);
        this.employeeId = employeeId;
    }

    accessProtected() {
        console.log(this.protectedProperty); // Accessible
        this.protectedMethod(); // Accessible
    }
}

const instance = new AccessModifiers("Public Value", "Private Value", "Protected Value");
console.log(instance.publicProperty); // Accessible
instance.publicMethod(); // Accessible
instance.publicProperty = "Updated Public Value"; // Accessible

// console.log(instance.privateProperty); // Error: Property 'privateProperty' is private and only accessible within class 'AccessModifiers'.
// instance.privateMethod(); // Error: Property 'privateMethod' is private and only accessible within class 'AccessModifiers'.

// console.log(instance.protectedProperty); // Error: Property 'protectedProperty' is protected and only accessible within class 'AccessModifiers' and its subclasses.
// instance.protectedMethod(); // Error: Property 'protectedMethod' is protected and only accessible within class 'AccessModifiers' and its subclasses.

const sub2Instance = new SubClass("Public Value12", "Private Value", "Protected Value", 123);
sub2Instance.accessProtected(); // Accessible to protected members through subclass method  

console.log(sub2Instance.publicProperty); // Accessible

// instance.employeeId = 456; // Error: Property 'employeeId' does not exist on type 'AccessModifiers'. 

//sub2Instance.employeeId; // Error: Property 'employeeId' is private and only accessible within class 'SubClass'.