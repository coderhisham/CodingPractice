//Spread Operator: ...allows an iterable such as an array or stringto be expanded into seperate elements
//                 (Unpacks the elements)

let numbers = [100,200,1,2,3,4,5,6,7,8,9,10];
let maximum = Math.max(...numbers);
console.log(maximum);

let username = "coderhisham";
let letters = [...username];
console.log(letters);
letters = letters.join("_");
console.log(letters);

let fruits = ["apple","mango","orange"];
let newFruits = [...fruits];
console.log(fruits);
console.log(newFruits);

let vegetables = ["tomato","potato","cabbage"];
let foods = [...fruits, ...vegetables, "milk"];
console.log(foods);