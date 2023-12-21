let puppyImage = document.getElementById('puppyImage');
let likeIcon = document.getElementById('likeIcon');
let likeButton = document.getElementById('likeButton');
let liked = false;

function onClickLikeButton(){
    if(liked === false){
        likeIcon.style.color = '#0967d2';
        likeButton.style.backgroundColor = '#0967d2';
        puppyImage.src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png';
        liked = true;
    }
    else{
        likeIcon.style.color = '#cbd2d9';
    likeButton.style.backgroundColor = '#cbd2d9';
    puppyImage.src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png';
    liked = false;
    }
}