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

beginQuiz();