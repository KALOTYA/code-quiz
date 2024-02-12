console.log("hello world");

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



var questionEl = document.querySelector(".code__quiz__questions");

questionEl.textContent = "What is the meaning of life?"
