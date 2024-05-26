//Method Chaining : Calling of Methods one after another



let username = window.prompt("Enter the username:");

//Without Method Chaining

/*
username = username.trim();
let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();

let otherLetters = username.slice(1);
otherLetters = otherLetters.toLowerCase();

username = firstLetter+otherLetters;
console.log(username)*/


//With Method Chaining

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);


