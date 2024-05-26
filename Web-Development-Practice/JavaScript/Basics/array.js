let fruits = ['apple','mango','banana'];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[3] = "coconut";
console.log(fruits);

fruits.push("orange"); //adds element to Last
fruits.pop(); //Removes element from Last

fruits.unshift("grape"); //adds element to first
fruits.shift(); //Removes an element from the first

let noOfFruits = fruits.length;
let index = fruits.indexOf('mango'); //To find index

for (let i=0; i<noOfFruits;i++){
    console.log(fruits[i]);
}

console.log("--------------REVERSE--------------")
for (let j=noOfFruits-1 ;j>=0; j--){

    console.log(fruits[j]);
}


console.log("--------------For Of LOOP--------------")
for(let fruit of fruits){
    console.log(fruit);
}

fruits.sort().reverse()
console.log(fruits);