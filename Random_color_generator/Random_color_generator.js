let bgColors = ['#e75d7c', '#b16cef', '#53cca4', '#efc84d', '#628ef0', '#184b73', '#883e7f', '#ed048b'];

let bgContainer = document.getElementById('bgContainer');

function clickMe(){
    let randomNumber = Math.ceil(Math.random() * 8);
    let color = bgColors[randomNumber];
    bgContainer.style.backgroundColor = color;
}