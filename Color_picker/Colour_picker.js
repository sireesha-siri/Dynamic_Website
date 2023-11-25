let colorPickerContainer = document.getElementById('colorPickerContainer');
let buttonOne = document.getElementById('button1');
let buttonTwo = document.getElementById('button2');
let buttonThree = document.getElementById('button3');
let buttonFour = document.getElementById('button4');
let selectedColorHexCode = document.getElementById('selectedColorHexCode');

function button1(){
    colorPickerContainer.style.backgroundColor = '#e0e0e0';
    selectedColorHexCode.textContent = '#e0e0e0';
}

function button2(){
    colorPickerContainer.style.backgroundColor = '#6fcf97';
    selectedColorHexCode.textContent = '#6fcf97';
}

function button3(){
    colorPickerContainer.style.backgroundColor = '#56ccf2';
    selectedColorHexCode.textContent = '#56ccf2';
}

function button4(){
    colorPickerContainer.style.backgroundColor = '#bb6bd9';
    selectedColorHexCode.textContent = '#bb6bd9';
}