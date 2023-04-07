
// .getElementById is a method that lets us quickly access element object id property that matches the string.
const quizContainer = document.getElementById("container");
const startBtn = document.getElementById("start-btn");
const clearHsBtn = document.getElementById("clear-hs-btn")
// var result = document.getElementById("result"); 
const question = document.getElementById("question"); 
const choices = document.getElementById("choices"); //
const bttn = document.querySelectorAll(".choice");
const timerTxt = document.getElementById("timer");
const mainPage = document.getElementById("main-page");
const hsList = document.getElementById("hs-list")
const correctDiv = document.getElementById("correct");
const wrongDiv = document.getElementById("wrong");
const resultPage = document.getElementById("result-page");
const scoreText = document.getElementById("result-text");


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
    {
        question: "What is 5 - 2?",
        options: ["0", "1", "3", "5"],
        answer: "3",
    },
    {
        question: "What is 2 + 1?",
        options: ["3", "1", "2", "5"],
        answer: "3",
    },
    {
        question: "What is 2 - 2?",
        options: ["7", "0", "2", "3"],
        answer: "0",
    }

];

var copyOfQuestion = [...questions];

startBtn.innerText = `Start Quiz`;

// addEventListener to listen for interactions from user (in this case, clicks) and then calls for a function.
startBtn.addEventListener("click", startQuiz);




function startQuiz() {
// .classList allows us to add, remove, or replace classes. 
startBtn.classList.add("hide");
mainPage.classList.add("hide");
quizContainer.classList.remove("hide");

// setInterval allows repeated calls of a function or executes a code snippet
//with a fixed time delay. time is in milli-second so a value of 1000 = 1 second.
timer = setInterval(countdownTimer, 1000);
showQuestions();
}

function showQuestions() {
    questCount++;
    correctDiv.classList.add("hide");
    wrongDiv.classList.add("hide");
    
    //this line generates a random number to used as an index to randomly pick a question from our questions array.
    var randQuestIdx = Math.floor(Math.random() * copyOfQuestion.length);
    // var randOptionIdx = Math.floor(Math.random() * copyOfQuestion["options"].length);
    var questionTitle = document.getElementById("quest-title");
    //this condition is to remove an error in the console. since we will be splicing out each question
    //after they are displayed, eventually the copyOfQuestion array will become an empty array. we will get
    // a Type error:cannot read properties of undefined.
    if(copyOfQuestion.length != 0) {
    currentQuestion = copyOfQuestion[randQuestIdx];
    }
    questionTitle.textContent = currentQuestion.question;
    //we splice out the displayed question to avoid the same questions being randomly chosen the next time
    //showQuestion() is called
    copyOfQuestion.splice(randQuestIdx, 1);

    
    //this for loops shuffles the array of answer choice buttons
    for( var i = bttn.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i+1));
        [bttn[i], bttn[j]] = [bttn[j], bttn[i]];
    }  
    //this for loops sets the text from the options of the current question to each of the 
    //button from the "shuffled" array. This allows the order of the choices to be randomized everytime
    // showQuestions() is called.
    for(var i = 0; i < bttn.length; i++) {
        bttn[i].textContent = currentQuestion.options[i];
    }
    // using foreach loop to add eventlistner to each button in the array of bttn  
    bttn.forEach(element => {
        element.addEventListener('click', answerCheck);
    });

}

function answerCheck(event) {
    //need to remove eventlistener after one answer choice button is clicked on, otherwise user can spam
    //click the other choices and trigger answerCheck().
    bttn.forEach(element => {
        element.removeEventListener('click', answerCheck);
    });

    var userSelection = event.target.textContent;
    if(userSelection === currentQuestion.answer) {
        correctDiv.classList.remove("hide");
    }else{
        wrongDiv.classList.remove("hide");
        timeRemaining -= 10;
    }

    if(questCount === questions.length) {
            setTimeout(stopQuiz, 1500);
    }

    setTimeout(showQuestions, 1500);
}

function countdownTimer() {
    timeRemaining--;
    timerTxt.innerText = `Time: ${timeRemaining}`;
    if(timeRemaining <= 0){
        timeRemaining = 0;
        stopQuiz();
    }
}

function stopQuiz() {
 //clearInterval is the opposite of setInterval. it stops the recurring calling of a function.
 clearInterval(timer);
 timer.innerText = `Time: ${timeRemaining}`;
 quizContainer.classList.add("hide"); 
 correctDiv.classList.add("hide");
 wrongDiv.classList.add("hide");
 showResults();
 showHighScore();  
}

function showResults() {
scoreText.innerText = `Your final score is ${timeRemaining}.`
resultPage.classList.remove("hide");
};

function showHighScore() {
    //bring to high score page..

}