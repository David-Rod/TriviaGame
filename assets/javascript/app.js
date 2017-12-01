var correct = 0;
var incorrect = 0;
var test = 0;
var test_status = 0;
var questions = [
    ["JavaScript is ______ Language.", "Scripting", "Programming", "Application", "None of These"],
    ["What does HTML stand for?", "Hard Text Meaningless Language", "High Text Markup Language", "Hyper Tabular Markup Language", "Hyper Text Markup Language"],
    ["Which tag creates a number/order list?", "UL", "OL", "OT", "None of These"],
]


var countDownTime =30;
var elem = document.getElementById("timer");
var timerId = setInterval(countdown, 3000 * 10);
var seconds = Math.floor((distance % (1000 * 60))/1000);

document.getElementById("timer").innerHTML = seconds + "s";

function countdown() {
    if(timeLeft === 0) {
        clearTimeout(timerId);
        doSomething();
        alert("Time is up");
    } else {
        elem.innerHTML = timeLeft + "seconds remaining";
        timeLeft--;
    }
}

countdown();

for(var i = 0; i < questions.length; i++) {
    if(i === questions.length) {
        alert("Trivia has terminated!");
        clearTimeout(timerId);
    } else {
        test_status("you have completed " + number + "out of " + questions.length + "questions.");
        // trivia will continue
    }
}
//run for loop to go through the array and try to get new status while taking quiz
// reset the quiz once it has been completed?
//
function score() {
    if(userInput === correctAnswer) {
        correct++;
        alert("You got " + correct + " out of" + questions.length + " correct.");
    } else {
        incorrect++;
    }
}

score();
