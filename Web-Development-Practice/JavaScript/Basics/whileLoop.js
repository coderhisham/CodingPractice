//While Loop: Repeat some code WHILE some condition is TRUE
//There Should be an Exit Relation otherwise it will lead to INFINITE LOOP

//Example 1

/*let username = "";

while(username==="" || username=== "null"){
    username = window.prompt("Enter the Username");
}

console.log(`Hello ${username}`);*/

//Example 2
let isLoggedIn = false;
let username1;
let password;

while(!isLoggedIn){
    username1 = window.prompt("Enter the Username:");
    password = window.prompt("Enter the Password");

    if (username1==="myUsername" && password==="myPassword"){
        isLoggedIn = true;
        console.log("You are Logged In");
    }
    else{
        console.log("Invalid user name or password!! Please Try again.")
    }
}