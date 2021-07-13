//array for questions
var questionList = [
    {q: "What's my favorite food?", c1: "Apple Sauce", c2: "Tacos", c3: "Pizza", c4: "Chicken Nuggets", a: "Pizza"},
    {q: "Question 2", c1: "Choice 1", c2: "choice 2", c3: "choice 3", c4: "choice 4", a: "answer"},
    {q: "Question 3", c1: "Choice 1", c2: "choice 2", c3: "choice 3", c4: "choice 4", a: "answer"},
    {q: "Question 4", c1: "Choice 1", c2: "choice 2", c3: "choice 3", c4: "choice 4", a: "answer"},
    {q: "Question 5", c1: "ABC", c2: "DEF", c3: "GHI", c4: "JKL", a: "GHI"},
];

console.log(questionList.length)

//DOC element variables
var startBtn = document.querySelector("#startBtn");
var timerEl1 = document.querySelector("#timer1");
var timerEl2 = document.querySelector("#timer2");
var starterEl = document.querySelector("#starter");
var contentEl = document.querySelector("#content")

//test
var questionEl = document.querySelector("#question");
var choice1btnEl = document.querySelector("#choice1btn");
var choice2btnEl = document.querySelector("#choice2btn");
var choice3btnEl = document.querySelector("#choice3btn");
var choice4btnEl = document.querySelector("#choice4btn");


//timer
var time = 60;

//timer function
var countdown = function(){
   
    //lowers and displays time
    var timeLeft = setInterval(function(){
        //lowers time by one second
        if(time >= 1){
            time--;
            timerEl1.textContent = time;
            timerEl2.textContent = time;
            //console.log(time);
        }
        //displays 0
        else {
            timerEl1.textContent = "0";
            timerEl2.textContent = "0";
            clearInterval(timeLeft);
        }
    }, 1000);
}

//create question HTML
var createQuestion = function(){
    var questionEl = document.createElement("ul");
    questionEl.innerHTML = "<li> Here is the question </li>";
    console.log(questionEl);
    console.log(contentEl);

    contentEl.appendChild(questionEl);
}

createQuestion();

//starts quiz
var startQuiz = function(){
    //removes starter text
    starterEl.remove();

    //start timer
    countdown();

    //create html for questions

}

//listens for start button click
if(startBtn){
startBtn.addEventListener("click", startQuiz);
};

countdown();

//question position in array
var questionNumber = 0;

//check Answer
var checkAnswer = function(){
    console.log(this);
    if (this.innerHTML === questionList[questionNumber].a){
        console.log("right!")
    } else {
        time = time - 5;
        console.log("wrong!")
    };

    answered = true;
    questionNumber++;
    //questionLoop();
}

//writes next question
var nextQuestion = function(){
    //sets quiz question to current array
    questionEl.innerHTML = questionList[questionNumber].q;
    choice1btnEl.innerHTML = questionList[questionNumber].c1;
    choice2btnEl.innerHTML = questionList[questionNumber].c2;
    choice3btn.innerHTML = questionList[questionNumber].c3;
    choice4btn.innerHTML = questionList[questionNumber].c4;
}

var test = function(){
    checkAnswer();
    nextQuestion();
    console.log(questionList[questionNumber]);
};

//test quiz choice event listener
choice1btn.addEventListener("click", test);
choice2btn.addEventListener("click", checkAnswer);
choice3btn.addEventListener("click", checkAnswer);
choice4btn.addEventListener("click", checkAnswer);
