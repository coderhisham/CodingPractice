//Function: A Section of reusable code.
//          Declare code once, Use it whenever you want.
//          Call the function to excecute that code.

//Example 1
function happyBirthday(name,age){

    console.log(`Happy Birthday ${name}!! You have turned ${age}.`);
}

let name = window.prompt("Enter Your Name: ")
let age = window.prompt("Enter Your Age: ")

//Example 2
function isValidEmail(email){
   /* if(email.includes("@")){
        return true
    }
    else{
        return false
    }*/ 

    return email.includes("@") ? true:false;
}

let email = window.prompt("Enter your Email Address: ");
isValidEmail(email);