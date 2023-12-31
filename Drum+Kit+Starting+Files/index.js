var allQuery = document.querySelectorAll(".drum");
for (var i = 0; i< allQuery.length ; i++){
    allQuery[i].addEventListener("click" , function(){

    var innerValue=  this.innerHTML;
    makeSound(innerValue);
    keyAnimation(innerValue);
})
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    keyAnimation(event.key);
} )


function makeSound(key){ 
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom_1 = new Audio("./sounds/tom-1.mp3");
            tom_1.play();
            break;

        case "j":
            var tom_2 = new Audio("./sounds/tom-2.mp3");
            tom_2.play();
            break;

        case "k":
            var tom_3 = new Audio("./sounds/tom-3.mp3");
            tom_3.play();
            break;

        case "l":
            var tom_4 = new Audio("./sounds/tom-4.mp3");
            tom_4.play();
            break;
    }
}

function keyAnimation(currentKey){
    var currentPressedKey = document.querySelector("." + currentKey);
    currentPressedKey.classList.add("pressed") ;
    setTimeout(function(){
        currentPressedKey.classList.remove("pressed");
    } , .100);
}