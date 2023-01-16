// Universal variables
var scores =[];
var mark = 0;
var index = 0;
var record = [];
var timeLeft = 70;
var timerInterval 
var header = document.querySelector(".header");
var home = document.querySelector(".home");
var container = document.querySelector(".container");
var bottom = document.querySelector(".bottom");
var outcome = document.querySelector(".outcome");

function beginQuiz() {
    var removeAll = container;
    while(removeAll.hasChildNodes()) {
        removeAll.removeChild(removeAll.firstChild);
    };

    var highScore = document.createElement("p");
    highScore.classList.add("banner", "view-score");
    highScore.textContent = "View High Scores";
    
    var time = document.createElement("p");
    time.classList.add("banner", "time");
    time.textContent = "Time Remaining";

    var second = document.createElement ("span");
    second.setAttribute ("id", "second");
    time.appendChild (second);

    var greetTitle = document.createElement("h1");
    greetTitle.classList.add("title");
    greetTitle.textContent = "Coding Quiz Challenge";

    var greetText = document.createElement("h1");
    greetText.classList.add("text");
    greetText.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

    var startBtn = document.createElement("button");
    startBtn.classList.add("btn", "btn-start");
    startBtn.textContent = "Start-Quiz";

    header.appendChild(highScore);
    header.appendChild(time);
    container.appendChild(greetTitle);
    container.appendChild(greetText);
    container.appendChild(startBtn);

    document.querySelector(".btn-start").addEventListener("click", timer);

    document.querySelector(".view-score").addEventListener("click", viewHighScore);
}

beginQuiz();