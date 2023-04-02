
// .getElementById is a method that lets us quickly access element object id property that matches the string.
var quizContainer = document.getElementById("container");
var startBtn = document.getElementById("start-btn");
var playAgainBtn = document.getElementById("play-again-btn");
// var result = document.getElementById("result"); 
var question = document.getElementById("question"); // might not need if we store questions in an array.
var choices = document.getElementById("choices"); //
var answer = document.getElementById("choice")// 
var timer = document.getElementById("timer");
var hsContainer = document.getElementById("hs-container");
var hsList = document.getElementById("hs-list")

// variables in regards to the game
var score = 0;
var currentQuestIdx = 0;
var timeRemaining = 90;
// var timerInterval ; 
var highScores = [];

var questions =[
    {
        question: "What is 1 + 1?",
        options: ["0", "1", "2", "3"],
        answer: "4",
    },
    {
        question: "What is 1 + 1?",
        options: ["0", "1", "2", "3"],
        answer: "4",
    },
    {
        question: "What is 1 + 1?",
        options: ["0", "1", "2", "3"],
        answer: "4",
    },
    {
        question: "What is 1 + 1?",
        options: ["0", "1", "2", "3"],
        answer: "4",
    }

];



// addEventListener to listen for interactions from user (in this case, clicks) and then calls for a function.
startBtn.addEventListener("click", startQuiz);
//TODO: have playAgainBtn hidden when startBtn isn't
playAgainBtn.addEventListener('click', startQuiz);



function startQuiz() {
// initiate game. reset variables to default.
score = 0;
currentQuestIdx = 0;
timeRemaining = 90;

// .classList allows us to add, remove, or replace classes. 
startBtn.classList.add("hide");
playAgainBtn.classList.add("hide");
quizContainer.classList.remove("hide");
hsContainer.classList.add("hide");

// setInterval allows repeated calls of a function or executes a code snippet
//with a fixed time delay. time is in milli second so a value of 1000 = 1 second.
setInterval(countdownTimer, 1000);



}


function countdownTimer(){
    timeRemaining--;
    timer.innerText = `Time: ${timeRemaining}`;
    if(timeRemaining <= 0){
        stopQuiz();
    }

}

function showQuestions() {
    var questionTitle = document.getElementById("quest-title");
    questionTitle.textContent = questions[currentQuestIdx].question;
    


}


function answerCheck() {

}

function stopQuiz() {
    //clearInterval is the opposite of setInterval. it stops the recurring calling of a function.
 clearInterval(countdownTimer);
 timer.innerText = `Time: 0`;
 
 showHighScore();   
}



function showHighScore() {
    //add code to pause game...


}