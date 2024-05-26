let maximum = parseInt(prompt("Enter the Maximum Number: "));
let outcome = document.getElementById("outcome")
while(!maximum){
    maximum = parseInt(prompt("Enter a valid Number: "));
}
const targetNum = Math.floor(Math.random()*maximum) +1;
let guess = prompt("Enter your first guess ('q' to quit): ");
let attempts = 1;
while(parseInt(guess)!== targetNum){
    if(guess==='q') break;
    guess = parseInt(guess);
    if(guess>targetNum){
        guess = prompt("Too High, Guess again..");
        attempts++;
    }
    else if(guess<targetNum){
        guess = prompt("Too Low, Guess again..");
        attempts++;
    }
    else{
        guess = prompt("Invalid Number, Enter a valid guess: ('q' to quit)");
    }
}
if (guess==='q'){
    outcome.textContent = "OK You Quit"
}
else{
    outcome.textContent = `Congrats, You go it! it took you ${attempts} guesses!!`
}