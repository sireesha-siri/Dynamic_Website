let counterValue = document.getElementById("counterValue");

function onDecrement(){
    let previousValue = counterValue.textContent;
    let updatedValue = parseInt(previousValue) - 1;

    if (updatedValue < 0){
        counterValue.style.color = 'red';
    }
    else if (updatedValue > 0){
        counterValue.style.color = 'green';
    }
    else{
        counterValue.style.color = 'dark';
    }
    counterValue.textContent = updatedValue;
}

function onReset(){
    counterValue.textContent = 0;
    counterValue.style.color = 'black'; 
}

function onIncrement(){
    let previousValue = counterValue.textContent;
    let updatedValue = parseInt(previousValue) + 1;

    if (updatedValue < 0){
        counterValue.style.color = 'red';
    }
    else if (updatedValue > 0){
        counterValue.style.color = 'green';
    }
    else{
        counterValue.style.color = 'dark';
    }
    counterValue.textContent = updatedValue;
}