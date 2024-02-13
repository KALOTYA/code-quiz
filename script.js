
//Defining questions for the quiz
var questions = [
    {
        question: "What is navigating the DOM called?",
        options: ["DOM Traversal", "DOM Manipulation", "DOM Access"],
        answer: "DOM Traversal"
    },
    {
        question: "Arrays in JavaScript can be used to store",
        options: ["Numbers and Strings", "Booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "The condition in an IF / Else statement is enclosed with...",
        options: ["Quotes", "Curly Brackets", "Parenthesis"],
        answer: "Parenthesis"
    },
    {
        question: "Commonly used data types DO NOT include:",
        options: ["Strings", "Booleans", "Alerts"],
        answer: "Alerts"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables",
        options: ["Quotes", "Commas", "Question Marks"],
        answer: "Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["Javascript", "Terminal/Bash", "console.log"],
        answer: "console.log"
    },
]
//Assigning variables for the other elements
var timerEl = document.querySelector(".Time");
var questionEl = document.querySelector(".code__quiz__questions");
var optionsEl = document.querySelector("code__quiz__options");
var score = 0;
var currentQuestionIndex = 0;
var timeLeft = 60;

//Function to start the quiz
function startQuiz () {
    //Hide start button
    document.querySelector(".start").computedStyleMap.display = "none";
    //Display first question
    displayQuestion();
    //Start the timer
    startTimer();
};

//Functions to display questions and possible answers 
function displayQuestion() {
    //Display question
    var currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";

    //Display options for questions
    currentQuestion.options.forEach(function(option) {
        var button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", checkAnswer);
        optionsEl.appendChild(button);
    });
};

