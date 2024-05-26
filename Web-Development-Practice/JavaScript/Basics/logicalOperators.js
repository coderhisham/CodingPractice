//Logical Operators: Used to comine or manipulate Boolean Values (True or False)

// AND - &&
// OR - ||
// NOT - !

const temp = 15;

//Logical AND

if (temp>0 && temp<30){
    console.log("Good Weather");
}
else{
    console.log("Bad Weather");
}

//Logical OR

if(temp<0 || temp>30){
    console.log("Bad Weather");
}
else{
    console.log("Good Weather");
}

//Logical NOT

const isGoodWeather = temp>0 && temp<30;

if(!isGoodWeather){
    console.log("Bad Weather")
}
else{
    console.log("Good Weather");
}