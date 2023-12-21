var randomVariable1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomVariable1 + ".png";
var randomImgSrc = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImgSrc);

var randomVariable2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "./images/dice" + randomVariable2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImage2);

if(randomVariable1 === randomVariable2){
    document.querySelector("h1").innerHTML = "Draw!";
}else if( randomVariable1 > randomVariable2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}

