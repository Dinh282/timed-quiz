
// .getElementById is a method that lets us quickly access element object id property that matches the string.
const quizContainer = document.getElementById("container");
const startBtn = document.getElementById("start-btn");
const goBackBtn = document.getElementById("go-back-btn");
// var result = document.getElementById("result"); 
const question = document.getElementById("question"); // might not need if we store questions in an array.
const choices = document.getElementById("choices"); //
const answer = document.getElementById("choice")// 
const timerTxt = document.getElementById("timer");
const mainPage = document.getElementById("main-page");
const hsList = document.getElementById("hs-list")
const correctDiv = document.getElementById("correct");
const wrongDiv = document.getElementById("wrong");
const resultPage = document.getElementById("result-page");
const scoreText = document.getElementById("result-text");

var choiceBtn1 = document.getElementById("choice1");
var choiceBtn2 = document.getElementById("choice2");
var choiceBtn3 = document.getElementById("choice3");
var choiceBtn4 = document.getElementById("choice4");
var choiceBtns = [choiceBtn1, choiceBtn2, choiceBtn3, choiceBtn4]

// variables in regards to the game
var currentQuestion = {};
var timeRemaining = 60;
var questCount= 0;
var highScores = [];
var timer;
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
    {
        question: "What is 0 + 1?",
        options: ["8", "1", "2", "3"],
        answer: "1",
    },
    {
        question: "What is 2 - 1?",
        options: ["7", "1", "2", "3"],
        answer: "1",
    },
    {
        question: "What is 2 + 2?",
        options: ["0", "4", "2", "3"],
        answer: "4",
    },
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

var copyOfQuestion = [...questions];

startBtn.innerText = `Start Quiz`;

// addEventListener to listen for interactions from user (in this case, clicks) and then calls for a function.
startBtn.addEventListener("click", startQuiz);

goBackBtn.addEventListener("click", startQuiz);



function startQuiz() {
// .classList allows us to add, remove, or replace classes. 
startBtn.classList.add("hide");
mainPage.classList.add("hide");
goBackBtn.classList.add("hide");
quizContainer.classList.remove("hide");

// setInterval allows repeated calls of a function or executes a code snippet
//with a fixed time delay. time is in milli-second so a value of 1000 = 1 second.
timer = setInterval(countdownTimer, 1000);
showQuestions();
}

function showQuestions() {
    questCount++;
    setTimeout( () => {
    correctDiv.classList.add("hide");
    wrongDiv.classList.add("hide");
    }, 2000);


    //this line generates a random number to used as an index to randomly pick a question from our questions array.
    var randQuestIdx = Math.floor(Math.random() * copyOfQuestion.length);
    // var randOptionIdx = Math.floor(Math.random() * copyOfQuestion["options"].length);
    var questionTitle = document.getElementById("quest-title");
    currentQuestion = copyOfQuestion[randQuestIdx];
    questionTitle.textContent = currentQuestion.question;
    //we splice out the displayed question to avoid the same questions being randomly chosen the next time
    //showQuestion() is called
    copyOfQuestion.splice(randQuestIdx, 1);

    
    //this for loops shuffles the array of answer choice buttons
    for( var i = choiceBtns.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        [choiceBtns[i], choiceBtns[j]] = [choiceBtns[j], choiceBtns[i]];
    }  
    //this for loops sets the text from the options of the current question to each of the 
    //button from the "shuffled" array. This allows the order of the choices to be randomized everytime
    // showQuestions() is called.
    for(var i = 0; i < choiceBtns.length; i++){
        choiceBtns[i].textContent = currentQuestion.options[i];
    }


        
        //TODO: ask for help. Need a way to have user choose just one option and disable the rest of the buttons until 
        // showQuestions() is called again...
        choiceBtn1.addEventListener('click', answerCheck);
        choiceBtn2.addEventListener('click', answerCheck);
        choiceBtn3.addEventListener('click', answerCheck);
        choiceBtn4.addEventListener('click', answerCheck);

}


function answerCheck(event) {
    
    var userSelection = event.target.textContent;
    if(userSelection === currentQuestion.answer){
        correctDiv.classList.remove("hide");
    }else{
        wrongDiv.classList.remove("hide");
        timeRemaining -= 10;
    }

    if(questCount === questions.length){
            setTimeout(stopQuiz, 2000);
    }

    setTimeout(showQuestions, 0);
}

function countdownTimer() {
    timeRemaining--;
    timerTxt.innerText = `Time: ${timeRemaining}`;
    if(timeRemaining <= 0){
        stopQuiz();
    }
}

function stopQuiz() {
 //clearInterval is the opposite of setInterval. it stops the recurring calling of a function.
 clearTimeout(timer);
 timer.innerText = `Time: ${timeRemaining}`;

 correctDiv.classList.add("hide");
 wrongDiv.classList.add("hide");

 showResults();
 showHighScore();  
 quizContainer.classList.add("hide"); 
}


function showResults() {
scoreText.innerText = `Your final score is ${timeRemaining}.`
resultPage.classList.remove("hide");
};


function showHighScore() {
    //add code to pause game...


}