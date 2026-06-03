// modules in TypeScript  - modules are a way to organize and encapsulate code into reusable units.
//  They allow you to break down your code into smaller, manageable pieces and promote code reusability and maintainability. 
// In TypeScript, you can create modules using the `export` and `import` keywords.          
 
// Module 1: mathUtils.ts
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

// Module 2: stringUtils.ts
export function concatenate(str1: string, str2: string): string {
    return str1 + str2;
}

export function toUpperCase(str: string): string {
    return str.toUpperCase();
}

// Module 3: main.ts
import { add, subtract } from './mathUtils';
import { concatenate, toUpperCase } from './stringUtils';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(concatenate("Hello, ", "World!")); // Output: Hello, World!
console.log(toUpperCase("hello")); // Output: HELLO     