let bill = document.getElementById('billAmount');
let percentage = document.getElementById('percentageTip');
let tip = document.getElementById('tipAmount');
let amount = document.getElementById('totalAmount');
let message = document.getElementById('errorMessage');

function calculateAmount() {
    if (bill.value === "") {
        message.textContent = "Please Enter a valid input";
    } 
    else if (percentage.value === "") {
        message.textContent = "Please Enter a valid input";
    }
    else if (bill.value === "" && percentage.value === ""){
        message.textContent = "Please Enter a valid input";
    }
    else {
        message.textContent = '';
        let b = parseInt(bill.value);
        let p = parseInt(percentage.value);
        let calculatedTip = (p / 100) * b;
        let total = calculatedTip + b;
        tip.value = calculatedTip;
        amount.value = total;
    }
}