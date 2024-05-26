const myCheckbox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){

    if(myCheckbox.checked){
        subResult.textContent = "Thanks for Subscribing!!";
    }
    else{
        subResult.textContent = "You are not Subscribed yet!!";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with VISA";
    }else if(masterCardBtn.checked){
        paymentResult.textContent = "You are paying with MasterCard";
    }else if(payPalBtn.checked){
        paymentResult.textContent = "You are paying with PayPal";
    }
    else{
        paymentResult.textContent = "Please Choose any Payment Method!!!";
    }

}