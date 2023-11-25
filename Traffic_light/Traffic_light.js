let stopButton = document.getElementById('stopButton');
let readyButton = document.getElementById('readyButton');
let goButton = document.getElementById('goButton');
let stopBulb = document.getElementById('stopBulb');
let readyBulb = document.getElementById('readyBulb');
let goBulb = document.getElementById('goBulb');

function stopSignal(){
    stopButton.style.backgroundColor = '#cf1124';
    stopBulb.style.backgroundColor = '#cf1124';
    readyButton.style.backgroundColor = '#4b5069';
    goButton.style.backgroundColor = '#4b5069';
    readyBulb.style.backgroundColor = '#4b5069';
    goBulb.style.backgroundColor = '#4b5069';
}

function readySignal(){
    readyButton.style.backgroundColor = '#f7c948';
    readyBulb.style.backgroundColor = '#f7c948';
    stopButton.style.backgroundColor = '#4b5069';
    goButton.style.backgroundColor = '#4b5069';
    stopBulb.style.backgroundColor = '#4b5069';
    goBulb.style.backgroundColor = '#4b5069';
}

function goSignal(){
    goButton.style.backgroundColor = '#199473';
    goBulb.style.backgroundColor = '#199473';
    readyButton.style.backgroundColor = '#4b5069';
    stopButton.style.backgroundColor = '#4b5069';
    readyBulb.style.backgroundColor = '#4b5069';
    stopBulb.style.backgroundColor = '#4b5069';
}