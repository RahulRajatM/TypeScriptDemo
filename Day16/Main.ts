import { add, subtract, x } from './MathUtils';
import StringUtils, { concatenate, toUpperCase } from './StringUtils';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(concatenate("Hello, ", "World!")); // Output: Hello, World!
console.log(toUpperCase("hello")); // Output: HELLO     

console.log(x);

console.log( StringUtils.toLowerCaseFormatter("HELLO WORLD") ); // Output: hello world