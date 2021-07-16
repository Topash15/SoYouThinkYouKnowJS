//array for questions
var questionList = [
    {q: "What's my favorite food?", c1: "Apple Sauce", c2: "Tacos", c3: "Pizza", c4: "Chicken Nuggets", a: "Pizza"},
    {q: "Question 2", c1: "Choice 1", c2: "choice 2", c3: "choice 3", c4: "choice 4", a: "Choice 1"},
    {q: "Question 3", c1: "Choice 1", c2: "choice 2", c3: "choice 3", c4: "choice 4", a: "answer"},
    {q: "Question 4", c1: "Choice 1", c2: "choice 2", c3: "choice 3", c4: "choice 4", a: "answer"},
    {q: "Question 5", c1: "ABC", c2: "DEF", c3: "GHI", c4: "JKL", a: "GHI"},
];

//console.log(questionList.length)

//DOC element variables
var startBtn = document.querySelector("#startBtn");
var timerEl1 = document.querySelector("#timer1");
var timerEl2 = document.querySelector("#timer2");
var starterEl = document.querySelector("#starter");
var contentEl = document.querySelector("#content")

//test
var ulEl = ""
var questionEl = document.querySelector("#question");
var choice1btnEl = document.querySelector("#choice1btn");
var choice2btnEl = document.querySelector("#choice2btn");
var choice3btnEl = document.querySelector("#choice3btn");
var choice4btnEl = document.querySelector("#choice4btn");

//question position in array
var questionNumber = 0;

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
        else if(questionNumber = questionList.length-1){
            console.log("game over")
            clearInterval(timeLeft);
            timerEl1.textContent = time;
            timerEl2.textContent = time;
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
    //creates ul for question
    ulEl = document.createElement("ul");

    //create question html
    questionEl = document.createElement("li")
    questionEl.id = "question"
    questionEl.innerHTML = questionList[questionNumber].q

    //create choice 1
    var choice1El = document.createElement("li")
    choice1El.class = 'choice';
    choice1El.id = 'choice1';
    //create choice1 button
    choice1btnEl = document.createElement("button");
    choice1btnEl.id = 'choice1btn';
    choice1btnEl.innerHTML = questionList[questionNumber].c1;

    //create choice 2
    var choice2El = document.createElement("li")
    choice2El.class = 'choice';
    choice2El.id = 'choice2';
    //create choice2 button
    choice2btnEl = document.createElement("button");
    choice2btnEl.id = 'choice2btn';
    choice2btnEl.innerHTML = questionList[questionNumber].c2;
    
    //create choice 3
    var choice3El = document.createElement("li")
    choice3El.class = 'choice';
    choice3El.id = 'choice3';
    //create choice3 button
    choice3btnEl = document.createElement("button");
    choice3btnEl.id = 'choice3btn';
    choice3btnEl.innerHTML = questionList[questionNumber].c3;

    //create choice 4
    var choice4El = document.createElement("li")
    choice4El.class = 'choice';
    choice4El.id = 'choice4';
    //create choice4 button
    choice4btnEl = document.createElement("button");
    choice4btnEl.id = 'choice4btn';
    choice4btnEl.innerHTML = questionList[questionNumber].c4;

    //add question
    contentEl.appendChild(ulEl);
    ulEl.appendChild(questionEl);
    ulEl.appendChild(choice1El);
    ulEl.appendChild(choice2El);
    ulEl.appendChild(choice3El);
    ulEl.appendChild(choice4El);
    choice1El.appendChild(choice1btnEl);
    choice2El.appendChild(choice2btnEl);
    choice3El.appendChild(choice3btnEl);
    choice4El.appendChild(choice4btnEl);

    //sets element variables to button ID after creating button
    choice1btnEl = document.querySelector("#choice1btn");
    choice2btnEl = document.querySelector("#choice2btn");
    choice3btnEl = document.querySelector("#choice3btn");
    choice4btnEl = document.querySelector("#choice4btn");
    questionEl = document.querySelector("#question")

    console.log(choice1btnEl)

    choice1btnEl.addEventListener("click", checkAnswer);
    choice2btnEl.addEventListener("click", checkAnswer);
    choice3btnEl.addEventListener("click", checkAnswer);
    choice4btnEl.addEventListener("click", checkAnswer);

    console.log(questionEl);

    //writes next question
var nextQuestion = function(){
    if (questionNumber > questionList.length - 1){
        showScore();
    } else {
    //sets quiz question to current array
    questionEl.innerHTML = questionList[questionNumber].q;
    choice1btnEl.innerHTML = questionList[questionNumber].c1;
    choice2btnEl.innerHTML = questionList[questionNumber].c2;
    choice3btnEl.innerHTML = questionList[questionNumber].c3;
    choice4btnEl.innerHTML = questionList[questionNumber].c4;
    }
}
}

// createQuestion();

//starts quiz
var startQuiz = function(){
    //removes starter text
    starterEl.remove();

    //start timer
    countdown();

    //create html for questions
    createQuestion();

}

//listens for start button click
if(startBtn){
startBtn.addEventListener("click", startQuiz);
};

// countdown();

//checks if answer is correct
var checkAnswer = function(playerChoice){
    //console.log(playerChoice);
    //console.log(questionList[questionNumber].a)
    if (playerChoice === questionList[questionNumber].a){
        console.log("right!")
    } 
    //subtracts 5 seconds from timer if incorrect
    else {
        time = time - 5;
        console.log("wrong!")
    };

    //progresses to next question in array
    questionNumber++;

    //loads next question
    nextQuestion();
}

//loads end score
var showScore = function(){
    var finalTime = time;
    console.log(finalTime);

    //remove html for quiz

    //add html for score
}

//writes next question
var nextQuestion = function(){
    //shows score if last question in array is answered
    if (questionNumber > questionList.length - 1){
        showScore();
    } else {
    //sets quiz question to current array
    questionEl.innerHTML = questionList[questionNumber].q;
    choice1btnEl.innerHTML = questionList[questionNumber].c1;
    choice2btnEl.innerHTML = questionList[questionNumber].c2;
    choice3btnEl.innerHTML = questionList[questionNumber].c3;
    choice4btnEl.innerHTML = questionList[questionNumber].c4;
    }
}

// var test = function(){
//     var playerChoice = this.innerHTML;
//     checkAnswer(playerChoice);
//     nextQuestion();
//     console.log(questionList[questionNumber]);
// };

console.log(choice1btnEl);
console.log(questionEl);

//test quiz choice event listener
// choice1btnEl.addEventListener("click", test);
// choice2btnEl.addEventListener("click", checkAnswer);
// choice3btnEl.addEventListener("click", checkAnswer);
// choice4btnEl.addEventListener("click", checkAnswer);
