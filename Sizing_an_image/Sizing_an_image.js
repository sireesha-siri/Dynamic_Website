let warningMessage = document.getElementById('warningMessage');
let image = document.getElementById('image');
let imageWidth = document.getElementById('imageWidth');

let originalWidth = 200;
image.style.width = originalWidth + 'px';
imageWidth.textContent = originalWidth + 'px';

function incrementButton(){
    if(originalWidth >= 300){
        warningMessage.textContent = 'Too big. Decrease the size of the Image';
    }
    else{
        warningMessage.textContent = '';
        originalWidth += 5;
        let updatedWidth = originalWidth + 'px';
        image.style.width = updatedWidth;
        imageWidth.textContent = updatedWidth;
    }
}

function decrementButton(){
    if(originalWidth <= 100){
        warningMessage.textContent = "Can't Visible. Increase the size of the Image";
    }
    else{
        warningMessage.textContent = '';
        originalWidth -= 5;
        let updatedWidth = originalWidth + 'px';
        image.style.width = updatedWidth;
        imageWidth.textContent = updatedWidth; 
    }
}