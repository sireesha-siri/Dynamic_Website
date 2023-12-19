let seasonSmallImage = document.getElementById('seasonSmallImage');
let seasonMediumImage = document.getElementById('seasonMediumImage');

let springSmall = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png';
let springMedium = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png';
let summerSmall = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png';
let summerMedium = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png';
let autumnSmall = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png';
let autumnMedium = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png';
let winterSmall = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png';
let winterMedium = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png';

function springBtn(){
    seasonSmallImage.src = springSmall;
    seasonMediumImage.src = springMedium;
}

function summerBtn(){
    seasonSmallImage.src = summerSmall;
    seasonMediumImage.src = summerMedium;
}

function autumnBtn(){
    seasonSmallImage.src = autumnSmall;
    seasonMediumImage.src = autumnMedium;
}

function winterBtn(){
    seasonSmallImage.src = winterSmall;
    seasonMediumImage.src = winterMedium;
}