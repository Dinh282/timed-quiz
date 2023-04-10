// .getElementById is a method that lets us quickly access element object id property that matches the string.
const quizContainer = document.getElementById("container");
const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("initial-form");
const question = document.getElementById("question"); 
const timerTxt = document.getElementById("timer");
const mainPage = document.getElementById("main-page");
const correctDiv = document.getElementById("correct");
const wrongDiv = document.getElementById("wrong");
const resultPage = document.getElementById("result-page");
const scoreText = document.getElementById("result-text");

//gave each answer choice their own variable so we can throw them into an array to shuffle for choice randomization
var choiceBtn1 = document.getElementById("choice1");
var choiceBtn2 = document.getElementById("choice2");
var choiceBtn3 = document.getElementById("choice3");
var choiceBtn4 = document.getElementById("choice4");
var choiceBtns = [choiceBtn1, choiceBtn2, choiceBtn3, choiceBtn4]

// variables in regards to the game
var currentQuestion = {};
var timeRemaining = 100;
var questCount= 0;
var highScores = [];
var timer;
var questions = [
    {
        question: "Who is the best web developer?",
        options: ["Spiderman", "Batman", "Iron Man", "Deadpool"],
        answer: "Spiderman",
    },
    {
        question: "What two words every programmer learned to code first?",
        options: ["Hello, world", "Hi, there", "Peace out", "Yo, yo"],
        answer: "Hello, world",
    },
    {
        question: "Why do programmers keep pressing the F5 button?",
        options: ["To destress", "Because it's refreshing", "They're bored", "Because they're not pressing F4"],
        answer: "Because it's refreshing",
    },
    {
        question: "Where did programmers learn to program?",
        options: ["Mom's basement", "Stackoverflow University", "Public Library", "They're still learning"],
        answer: "Stackoverflow University",
    },
    {
        question: "What is the most popular programming problem?",
        options: ["Blue screen of death", "Corrupted files", "Missing a semicolon", 'Print "Hello, World"'],
        answer: "Missing a semicolon",
    },
    {
        question: "Why are programmers single?",
        options: ["They commit their lives to code", "Their workload", "They lack social interaction", "No time to date"],
        answer: "They commit their lives to code",
    },
    {
        question: "How do programmers open a Jar?",
        options: ["They don't", "They use Java", "They ask other people for help", "They only eat from a can"],
        answer: "They use Java",
    },
    {
        question: "Why should you marry a programmer?",
        options: ["They make good money", "They're too busy for you", "They don't know how to communicate", "They're not afraid to commit"],
        answer: "They're not afraid to commit",
    }
];

//[...question] is the spread syntax that lets us to expand iterable objects.
var copyOfQuestion = [...questions];

//setting this condition to rid annoy type error. Since high score page, doesn't have a start button,
// error is thrown since we can't set innertext and even listeners to null.
if(startBtn != null){
startBtn.innerText = `Start Quiz`;
// addEventListener to listen for interactions from user (in this case, clicks) and then calls for a function.
startBtn.addEventListener("click", startQuiz);
}

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
    for( var i = choiceBtns.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i+1));
        [choiceBtns[i], choiceBtns[j]] = [choiceBtns[j], choiceBtns[i]];
    }  
    //this for loops sets the text from the options of the current question to each of the 
    //button from the "shuffled" array. This allows the order of the choices to be randomized everytime
    // showQuestions() is called.
    for(var i = 0; i < choiceBtns.length; i++) {
        choiceBtns[i].textContent = currentQuestion.options[i];
    }
    // using foreach loop to add eventlistner to each button in the array of bttn  
    choiceBtns.forEach(element => {
        element.addEventListener('click', answerCheck);
    });

}

function answerCheck(event) {
    //need to remove eventlistener after one answer choice button is clicked on, otherwise user can spam
    //click the other choices and trigger answerCheck().
    choiceBtns.forEach(element => {
        element.removeEventListener('click', answerCheck);
    });
    //we set the text content of whichever choice the user click on as the variable userSelection to compare with the current answer choice.
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
}

function showResults() {
scoreText.innerText = `Your final score is ${timeRemaining}.`
resultPage.classList.remove("hide");

submitBtn.addEventListener('submit', function (event){
    //preventDefault() stops the page from refreshing on the submitbutton is clicked.
    event.preventDefault();
    //window.locaiton takes user to the highscore page via href.
    window.location.href = "./assets/high-score-page.html";
    
    //we are grabbing the value of what the user input for his/her initial.
    const userInitial = document.getElementById("user-initial").value;
    const score = timeRemaining;
    const playerScore = {userInitial, score};
    // we grab the array from local storage if there is one, else we just set the scoreList to an empty array.
    var scoreList = JSON.parse(localStorage.getItem('scoreList')) || [];
    
    scoreList.push(playerScore);
    //we store the scorelist into local storage. JSON.stringify turns our array into a string since we can only store strings in local storage
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
    document.getElementById("initial-form").reset();  
    });
   
};





