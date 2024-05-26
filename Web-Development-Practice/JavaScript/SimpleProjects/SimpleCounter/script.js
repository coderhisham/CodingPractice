let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
let countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}