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

const allQuestions = [
    
    {
        question: "Is Javascript case sensitive?",
        options: {a: "Yes", 
            b: "No", 
            c: "I dont know", 
            d: "All of the above?",
        },
        answer: "a"
    },
    {
        question: "What are the two levels of scrope that a Javascript variable can have?.",
        options: { a: "International and Domestic", b: "Indoors and Outdoors", c: "Global and Local", d: "All of the above?",
        },
        answer: "c"
    },
    {
        question: "What are the three ways you can declare a variable in Javascript?",
        options: { a: "cars, trains and automobiles", b: "var, const and let", c: "Larry, Moe and Curly", d: "All of the above?",
        },
        answer: "b"
    },
    {
        question: "What does NaN mean in Javascript?",
        options: { a: "Not a Number", b: "Short for Grandmother", c: "Not a Newfoundlander", d: "All of the above?",
        },
        answer: "a"
    },
    {
        question: "Which company developed Javascript?",
        options: { a: "Netscape", b: "Mcdonalds", c: "Wal-Mart", d: "All of the above?",            
        },
        answer: "a"
    }
   
];

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

function renderQuiz(){
    var removeAll = container;
    while (removeAll.hasChildNodes()){
        removeAll.removeChild(removeAll.firstChild);
    };

    if (index < allQuestions.length) {
        var quizAppear = document.createElement("div");
        quizAppear.classList.add("quiz");
        container.appendChild(quizAppear);

        var quizQuestion = document.createElement ("h1");
        quizQuestion.classList.add("title");
        quizQuestion.textContent = allQuestions [index].question;
        quizAppear.appendChild(quizQuestion);

        var userOptions = allQuestions[index].options;
        for  (var x in userOptions) {
            var quizOption = document.createElement("button");
            quizOption.classList.add("btn", "btn-answer");
            if (x === allQuestions[index].answer){
                quizOption.setAttribute("check", "correct");
            }
            quizOption.textContent = userOptions [x];
            quizAppear.appendChild(quizOption);
        }

        index++;

        bottom.style.visibility= "visible";

        document.querySelector(".quiz").addEventListener("click", checkOutcome);
        
    }
    else {
        clearInterval(timerInterval);
        var done = document.createElement("h2");
        done.classList.add ("title");
        done.textContent = "All done!";
        container.appendChild(done);

        var sum = document.createElement("p");
        sum.classList.add("text");
        sum.textContent = "Your final score is " + mark + " !";
        container.appendChild(sum);

        var form = document.createElement("form");
        form.classList.add = ("form");
        container.appendChild (form);

        var label = document.createElement ("label");
        label.classList.add("text");
        label.setAttribute("for", "name");
        label.textContent = "Enter initials:";
        form.appendChild(label);

        var input = document.createElement("input");
        input.classList.add("text");
        input.setAttribute("type", "text");
        input.setAttribute("name", "name");
        input.setAttribute("id", "name");
        input.setAttribute("placeholder", "name");
        form.appendChild(input); 

        var submit = document.createElement("button");
        submit.classList.add("btn", "btn-submit");
        submit.textContent = "Submit";
        form.appendChild(submit)

        document.querySelector(".btn-submit").addEventListener("click", recordHighScore);
    }
}


function timer () {
    

    timerInterval = setInterval(function() {

       var timeEl = document.querySelector("#second");
       timeEl.textContent = timeLeft + "s";
       timeLeft--;

       

       if (timeLeft < 0 ) {

           clearInterval(timerInterval);

       

           index += allQuestions.length;

           renderQuiz();
       }
   }, 1000);

   renderQuiz();
}

function checkOutcome(event){

    var targetEl = event.target;
    console.log("testing");
    var check = document.createElement("p");
    check.classList.add("check-outcome");
    if (targetEl.hasAttribute("check")) {
        check.textContent = "Correct!";
       
    } else {
        check.textContent = "Wrong!";
        timeLeft -= 10;
    }
    outcome.appendChild(check);
    

    setTimeout(() => {
        check.remove();
        renderQuiz();
    }, 1000);
}

function viewHighScore(){
    top.style.border= "none";
    var removeTop = top;
    while (removeTop.hasChildNodes()){
        removeTop.removeChild(removeTop.firstChild);
    }
    var removeQuiz = container;
    while (removeQuiz.hasChildNodes()){
        removeQuiz.removeChild(removeQuiz.firstChild);
    }
    var highScoresHead = document.createElement("h1");
    highScoresHead.classList.add("quizQuest");
    highScoresHead.textContent = "High Scores";
    container.appendChild(highScoresHead);

    loadData();

    var goBack = document.createElement("button");
    goBack.classList.add("btn", "btn-goBack");
    goBack.textContent = "Go Back";
    container.appendChild(goBack);

    var clear = document.createElement("button");
    clear.classList.add("btn", "btn-clear");
    clear.textContent = "Clear High Scores";
    container.appendChild(clear);

    document.querySelector(".btn-goBack").addEventListener("click", start);
    document.querySelector(".btn-clear").addEventListener("click", clearHistory);
}

beginQuiz();