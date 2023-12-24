let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let gameResult = document.getElementById('gameResult');
let userInput = document.getElementById('userInput');

let correctMessage = 'Congratulations! You got it right.';
let wrongMessage = 'Please Try Again!';

function restart() {
    let f = Math.ceil(Math.random() * 100);
    let s = Math.ceil(Math.random() * 100);
    firstNumber.textContent = f;
    secondNumber.textContent = s;
    user_input.value = "";
    document.getElementById('gameResult').textContent = "";
}

restart();

function check() {
    let firstValue = parseInt(firstNumber.textContent);
    let secondValue = parseInt(secondNumber.textContent);
    let total = firstValue + secondValue;
    let checkValue = parseInt(userInput.value);

    if (total === checkValue) {
        document.getElementById('gameResult').textContent = correctMessage;
        document.getElementById('gameResult').style.backgroundColor = '#028a0f';
        document.getElementById('gameResult').style.color = 'white';
    } else {
        document.getElementById('gameResult').textContent = wrongMessage;
        document.getElementById('gameResult').style.backgroundColor = '#1e217c';
        document.getElementById('gameResult').style.color = 'white';
    }
}