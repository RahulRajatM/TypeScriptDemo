let numbers:number[]= [1,2,3,4,5];
let fruits:string[]=["apple", "orange", 'pears',"mango"];

//length- attribute (not a method)
console.log("Size of Array: " + numbers.length);
console.log("Size of Array: " + fruits.length);

//1. push() - Add single/multiple elements to the end of an Array

numbers.push(6, 7);
console.log(numbers)

//2. pop()- Removes the last elemt from an Array
let lastEle= fruits.pop();
console.log(fruits);
console.log("Removed fruit: "+lastEle);

//3. shift()- Removes the first element from an Array

let firstNum= numbers.shift();
console.log(numbers); //[2,3,4,5,6,7]
console.log("Removed number: "+firstNum)

//4. unshift()- Add single/multiple elements in the beginning of an Array

numbers.unshift(0,1);
console.log(numbers); //[0,1,2,3,4,5,6,7]

fruits.unshift("kiwi", "Pine Apple");

//5. concat()- combines two or more arrays
//syntax: array.concat(array1,.....,arrayn)

let newArray = numbers.concat([8,9], [10,11]);
console.log(newArray);

//6. slice()- EXTRACTS A SECTION OF AN ARRAY
//starting index starts from zero
//Ending index will be exclusive. Ex: if 3 is the ending index , it will consider 2 (3-1)

let newArr= fruits.slice(0,2);
console.log(newArr);

//7. splice()- Adds/Removes elements from an Array(from anywhere)
//syntax: array.splice(start, deleteCount, item1,....,itemN)

console.log(fruits); //[ 'kiwi', 'Pine Apple', 'apple', 'orange', 'pears' ]
let removedEle= fruits.splice(1,2); //1 is start index, 2 is how many element to be removed
console.log("after splice(1,2): ", fruits) // [ 'kiwi', 'orange', 'pears' ]
console.log("Removed fruits: ", removedEle); //[ 'Pine Apple', 'apple' ]

//example2:
 fruits.splice(1,0,"banana","grapes"); //[ 'kiwi', 'banana', 'grapes', 'orange', 'pears' ]
 console.log(fruits);

 //exaple3:
 fruits.splice(0,2,"cherry","guava");
 console.log(fruits); //[ 'cherry', 'guava', 'grapes', 'orange', 'pears' ]

 //8. indexOf() - Finds the index of an element, if element is not found then returns -1
 //syntax: array.indexof(searchElement) OR array.indexOf(searchElement, starting index)

 let guavaindex= fruits.indexOf('guava')
 console.log("Index of guava: "+guavaindex); //1

 console.log(fruits.indexOf("papaya")) // -1

 let indexorange= fruits.indexOf('orange', 2);
 console.log("indexorange: "+indexorange);

 //9. includes()- checks if an element exists
 // returns true or false
 // syntax: array.includes(searchElement, starting index);

 let isAppleExist= fruits.includes('apple')
 console.log("is Apple present: "+ isAppleExist);

 //10. toString()- converts an array to a string
 let numString= numbers.toString();
 console.log(numString); // "0,1,2,3,4,5,6,7"
 console.log(typeof numString); // string
/*=================================================================================*/
  
 //11. join()- converts an array to a string with a specified separator
 let fruitString= fruits.join("::"); // you can specify any separator you want");
 console.log(fruitString); // "cherry::guava::grapes::orange::pears"    
 let numString2= numbers.join("-"); // "0-1-2-3-4-5-6-7"
 console.log(numString2);

 //12. reverse()- reverses the order of elements in an array
 fruits.reverse();
 console.log(fruits); //[ 'pears', 'orange', 'grapes', 'guava', 'cherry' ]

 //13. sort()- sorts the elements of an array in place and returns the sorted array
 fruits.sort();
 console.log(fruits); //[ 'cherry', 'grapes', 'guava', 'orange', 'pears' ]

 numbers.sort();
 console.log(numbers); //[ 0, 1, 2, 3, 4, 5, 6, 7 ] (sorted in ascending order)

/*=============================================================================*/

 //14. filter()- creates a new array with all elements that pass the test implemented by the provided function
 // It returns same or fewer elements than the original array based on the condition provided in the function.
 //syntax: array.filter(function(element, index, array){})

 let evenNumbers= numbers.filter(num => num%2==0);
 console.log(evenNumbers); //[ 0, 2, 4, 6 ]

 let fruitsWithP= fruits.filter(fruit => fruit.includes('p'));
 console.log(fruitsWithP); //[ 'grapes', 'orange', 'pears' ]

 //15. map()- creates a new array populated with the results of calling a provided function on every element in the calling array
 // It returns same number of elements as the original array but with different values based on the function provided.  
 //syntax: array.map(function(current element, index, array){})

 let squaredNumbers= numbers.map(num => num*num);
 console.log(squaredNumbers); //[ 0, 1, 4, 9, 16, 25, 36, 49 ]

 let fruitLengths= fruits.map(fruit => fruit.length);
 console.log(fruitLengths); //[ 6, 6, 5, 6, 5 ] (lengths of each fruit name)    

 //16. foreach()- executes a provided function once for each array element
//syntax: array.forEach(function(currentValue, index, array){})
//currentValue: The current element being processed in the array.
//index(optional): The index of the current element being processed in the array.
//array(optional): The array that forEach() is being applied to.  

console.log("Using forEach to print each number:");
numbers.forEach(num => console.log(num)); // Output: 0, 1, 2, 3, 4, 5, 6, 7

console.log("Using forEach to print each fruit:");
fruits.forEach(fruit => console.log(fruit)); // Output: cherry, grapes, guava, orange, pears

fruits.forEach((fruit, index)=>console.log(fruit+"-"+index));

fruits.forEach(fruit=>console.log(fruit.toUpperCase()));

//17. reduce()- executes a reducer function on each element of the array, resulting in a single output value
//syntax: array.reduce(function(accumulator, currentValue, index, array){}, initialValue)
//accumulator: The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
//currentValue: The current element being processed in the array.
//index(optional): The index of the current element being processed in the array.
//array(optional): The array reduce() was called upon.
//initialValue(optional): A value to use as the first argument to the first call of the callback. If no initialValue is supplied, the first element in the array will be used and skipped. Calling reduce() on an empty array without an initialValue will throw a TypeError.

let sumOfNumbers= numbers.reduce((total, num) => total+num, 0); // 0 is default value of total, if we do not provide 0 then the first element of the array will be considered as the initial value of total and the iteration will start from the second element of the array. 
console.log(sumOfNumbers); // Output: 28 (sum of all numbers in the array)

let longestFruit= fruits.reduce((longest, fruit) => {
    return fruit.length > longest.length ? fruit : longest;
}, "");
console.log(longestFruit); // Output: "orange" (the longest fruit name in the array)  

//18. some()- tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
//syntax: array.some(function(element, index, array){})
//element: The current element being processed in the array.
//index(optional): The index of the current element being processed in the array.
//array(optional): The array some() was called upon.

let hasEvenNumber= numbers.some(num => num%2==0);
console.log("Does the array have an even number? "+hasEvenNumber); // Output: true

let hasFruitWithZ= fruits.some(fruit => fruit.includes('z'));
console.log("Is there any fruit with 'z' in its name? "+hasFruitWithZ); // Output: false    

//19. every()- tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
//syntax: array.every(function(element, index, array){})
//element: The current element being processed in the array.
//index(optional): The index of the current element being processed in the array.
//array(optional): The array every() was called upon.

let areAllEven= numbers.every(num => num%2==0);
console.log("Are all numbers even? "+areAllEven); // Output: false

let areAllFruitsWithP= fruits.every(fruit => fruit.includes('p'));
console.log("Do all fruits have 'p' in their name? "+areAllFruitsWithP); // Output: false       
