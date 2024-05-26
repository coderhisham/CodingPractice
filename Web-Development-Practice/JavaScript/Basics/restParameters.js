//rest parameters: (...rest) allows a function work with a variable number of arguments by bundling them into an array
//                 rest => bundles seperate elemrnts into an array
//                 Spread=> Expands an array into seperate elements


//Example 1
function openFridge(...foods /*Rest Parameter*/){
    console.log(foods);
    console.log(...foods) //Spread Operator;
}

let food1 = "Pizza";
let food2 = "Burger";
let food3 = "Sushi";
let food4 = "HotDog";

openFridge(food1,food2,food3,food4);

//Example 2
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result
}

const total = sum(10,50,280,357);
console.log(`The Sum is ${total}`);

//Example 3
function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.","Muhammed","Hisham","Alungal");
console.log(fullName);