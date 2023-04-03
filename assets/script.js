
// .getElementById is a method that lets us quickly access element object id property that matches the string.
const quizContainer = document.getElementById("container");
const startBtn = document.getElementById("start-btn");
const goBackBtn = document.getElementById("go-back-btn");
// var result = document.getElementById("result"); 
const question = document.getElementById("question"); // might not need if we store questions in an array.
const choices = document.getElementById("choices"); //
const answer = document.getElementById("choice")// 
const timer = document.getElementById("timer");
const mainPage = document.getElementById("main-page");
const hsList = document.getElementById("hs-list")
const correctDiv = document.getElementById("correct");
const wrongDiv = document.getElementById("wrong");

// variables in regards to the game
var score = 0;
var currentQuestion = {};
var timeRemaining = 90;
var questCount= 0;
var highScores = [];
var copyOfQuestion = []; 
var acceptingInputs = false;

var questions =[
    {
        question: "What is 1 + 1?",
        options: ["0", "7", "2", "3"],
        answer: "2",
    },
    {
        question: "What is 1 + 2?",
        options: ["0", "1", "3", "5"],
        answer: "3",
    },
    // {
    //     question: "What is 0 + 1?",
    //     options: ["8", "1", "2", "3"],
    //     answer: "1",
    // },
    // {
    //     question: "What is 2 - 1?",
    //     options: ["7", "1", "2", "3"],
    //     answer: "1",
    // },
    // {
    //     question: "What is 2 + 2?",
    //     options: ["0", "4", "2", "3"],
    //     answer: "4",
    // },
    // {
    //     question: "What is 5 - 2?",
    //     options: ["0", "1", "3", "5"],
    //     answer: "3",
    // },
    // {
    //     question: "What is 2 + 1?",
    //     options: ["3", "1", "2", "3"],
    //     answer: "3",
    // },
    // {
    //     question: "What is 2 - 2?",
    //     options: ["7", "0", "2", "3"],
    //     answer: "0",
    // }

];

startBtn.innerText = `Start Quiz`;



// addEventListener to listen for interactions from user (in this case, clicks) and then calls for a function.
startBtn.addEventListener("click", startQuiz);

goBackBtn.addEventListener("click", startQuiz);



function startQuiz() {
// initiate game. reset variables to default.
score = 0;
randQuestIdx = 0;
timeRemaining = 90;
copyOfQuestion = [...questions];

// .classList allows us to add, remove, or replace classes. 
startBtn.classList.add("hide");
mainPage.classList.add("hide");
goBackBtn.classList.add("hide");
quizContainer.classList.remove("hide");

// setInterval allows repeated calls of a function or executes a code snippet
//with a fixed time delay. time is in milli second so a value of 1000 = 1 second.
setInterval(countdownTimer, 1000);
showQuestions();

}


function showQuestions() {
    questCount++;
    acceptingInputs = true;
    correctDiv.classList.add("hide");
    wrongDiv.classList.add("hide");
    var randQuestIdx = Math.floor(Math.random() * copyOfQuestion.length);
    // var randOptionIdx = Math.floor(Math.random() * copyOfQuestion["options"].length);
    var questionTitle = document.getElementById("quest-title");
    currentQuestion = copyOfQuestion[randQuestIdx];
    questionTitle.textContent = currentQuestion.question;
    
        var choiceBtn1 = document.getElementById("choice1");
        var choiceBtn2 = document.getElementById("choice2");
        var choiceBtn3 = document.getElementById("choice3");
        var choiceBtn4 = document.getElementById("choice4");


        choiceBtn1.textContent = currentQuestion.options[0];
        choiceBtn2.textContent = currentQuestion.options[1];
        choiceBtn3.textContent = currentQuestion.options[2];
        choiceBtn4.textContent = currentQuestion.options[3];

        copyOfQuestion.splice(randQuestIdx, 1);

       
        choiceBtn1.addEventListener('click', answerCheck);
        choiceBtn2.addEventListener('click', answerCheck);
        choiceBtn3.addEventListener('click', answerCheck);
        choiceBtn4.addEventListener('click', answerCheck);
        
        
     

}


function answerCheck(event) {
    var userSelection = event.target.textContent;
    if(userSelection === currentQuestion.answer && acceptingInputs){
        acceptingInputs = false;
        correctDiv.classList.remove("hide");

        if(questCount === questions.length){
            setTimeout(stopQuiz, 2000);
        }else{
        setTimeout(showQuestions, 2000);

        }

    }else{
        wrongDiv.classList.remove("hide");
        setTimeout(showQuestions, 2000);
        acceptingInputs = false;
        timeRemaining -= 10;
        score -= 10;
    }if(timeRemaining < 0){
        timeRemaining = 0;
    }
    
}

function countdownTimer(){
    timeRemaining--;
    timer.innerText = `Time: ${timeRemaining}`;
    if(timeRemaining <= 0){
        stopQuiz();
    }

}

function stopQuiz() {
    //clearInterval is the opposite of setInterval. it stops the recurring calling of a function.
 clearInterval(countdownTimer);
 correctDiv.classList.add("hide");
 wrongDiv.classList.add("hide");
 timer.innerText = `Time: ${timeRemaining}`;
 
 showResults();


 showHighScore();  
 quizContainer.classList.add("hide"); 
}


function showResults(){

};


function showHighScore() {
    //add code to pause game...


}