let label = document.getElementById("label");
let min = document.getElementById("min");
let max = document.getElementById("max");
let generateBtn = document.getElementById("generate");
let Rnum;

generateBtn.onclick = function(){
    Rnum = parseInt(Math.floor(Math.random()*max.value))+parseInt(min.value);
    label.textContent = Rnum;
}


