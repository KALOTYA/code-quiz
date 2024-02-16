
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
var optionsEl = document.querySelector(".code__quiz__options");
var score = 0;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var highscoreSubmitted = false;


//Function to start the quiz
function startQuiz () {
    //reset the quiz to allow user to restart after completed
    score = 0;
    currentQuestionIndex = 0;
    timeLeft = 60;
    //clears the message
    document.querySelector(".code__quiz__key").textContent = "";
    //hide scoreboard
    document.querySelector(".scoreboard").style.display = "none";
    //Hide start button
    document.querySelector(".start").style.display = "none";
    //Display first question
    displayQuestion();
    //Start the timer
    startTimer();
    highscoreSubmitted = false;
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

//function to check users answer
function checkAnswer(event) {
    var selectedOption = event.target.textContent;
    var correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
        //Correct answer
        document.querySelector(".code__quiz__key").textContent = "Correct!";
        score++;
    
    } else {
        //Inncorrect Answer
        document.querySelector(".code__quiz__key").textContent = "Incorrect!";
        //subtract timer by 15 seconds if user is incorrect
        timeLeft -= 15;
    }

    //Move to next question or end quiz based on length in question array
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }

};


//Function to start the quiz timer
function startTimer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
};

//Fucntion to end the quiz
function endQuiz() {
    //stopping the timer after quiz is done
    clearInterval(timerInterval);
    //displaying the score board
    document.querySelector(".scoreboard").style.display = "block";
    //display the score of the user
    document.querySelector(".scoreboard__highscore__display").textContent = "Your Score: " + score;
    //display the start button so user can retake quiz
    document.querySelector(".start").classList.add("mx-auto");
    document.querySelector(".start").style.display = "block";
    highscoreSubmitted = false;
    
};

document.querySelector(".start").addEventListener("click", startQuiz);


//function to handle scoreboard submission
document.querySelector(".scoreboard__highscore__submit").addEventListener("click", function() {
    var initials = document.getElementById("initials").value;
    //checking if initials are provided or score is more than 0
    if (initials !== "" && score >= 0 && !highscoreSubmitted) {
        var scoreItem = document.createElement("li");
        scoreItem.textContent = initials + ": " + score;
        document.querySelector(".actualscoreboard").appendChild(scoreItem);
        highscoreSubmitted = true;
    }

});