var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0 ;
var started = false;




$(document).on("keydown " , function(){
    if(!started){

        $("h1").text("LEVEL " + level);
        nextSequence();
        started = true;
    }   
});


$(".btn").on("click" , function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);

});

function nextSequence(){

    userClickedPattern = [];
    level++;
    $("h1").text("LEVEL " + level);

    var randomNumber = Math.floor(Math.random() *4 ) ;
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    animatePress(randomChosenColor);
    
    
};

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

function animatePress(currentColor){
    $("." + currentColor).addClass("pressed");
    setTimeout(function(){
        $("." + currentColor).removeClass("pressed");
    } , .100);
};

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            } , 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        } , 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
}};


function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}