//Crystal Game!!!!!!!!!!!!111!

var computerScore = 0;
var userScore = 0;
var wins = 0;
var losses = 0;

var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

var gameOver = true;

function setCrystalValue () {
    return Math.floor(Math.random()*12)+1; 
};

function setComputerScore (){
    computerScore = Math.floor(Math.random()*102)+19;
    console.log("computerScore: " + computerScore);
};

function startGame() {

    setComputerScore();
    crystal1 = setCrystalValue();
    crystal2 = setCrystalValue();
    crystal3 = setCrystalValue();
    crystal4 = setCrystalValue();

    console.log("crystal1: " + crystal1)
    console.log("crystal2: " + crystal2)
    console.log("crystal3: " + crystal3)
    console.log("crystal4: " + crystal4)
};

function displayScore(){
    $("#user-score-div").html(userScore);
};

function checkWin(){

};

function checkLose(){

};

startGame();

$("#crystal1").on("click", function(){
    userScore += crystal1;
    displayScore();
    checkWin();
    checkLose();
    console.log("userScore: " + userScore);
})

$("#crystal2").on("click", function(){
    userScore += crystal2;
    displayScore();
    checkWin();
    checkLose();
    console.log("userScore: " + userScore);
})

$("#crystal3").on("click", function(){
    userScore += crystal3;
    displayScore();
    checkWin();
    checkLose();
    console.log("userScore: " + userScore);
})

$("#crystal4").on("click", function(){
    userScore += crystal4;
    displayScore();
    checkWin();
    checkLose();
    console.log("userScore: " + userScore);
})
