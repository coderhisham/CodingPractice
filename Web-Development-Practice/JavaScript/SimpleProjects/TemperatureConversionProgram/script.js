const inpValue = document.getElementById("inpVa");
const toFah = document.getElementById("toFah");
const toCel = document.getElementById("toCel");
const btn = document.getElementById("btn")
const result = document.getElementById("result");

let temp;

function convertT(){
    if(toFah.checked){
        temp = Number(inpVal.value);
        temp  = (temp*9/5)+32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCel.checked){
        temp = Number(inpVal.value);
        temp  = (temp-32)*5/9;
        result.textContent = temp.toFixed(1)+ "°C";
    }
    else{
        result.textContent = "Oops!! You didn't selected the unit."
    }
}