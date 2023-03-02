// how do I grab my question/answer data and display it?
let currentQuestionIndex = 0;
//let time = questions.length * 15;
// let timerId;

var startButton = document.getElementById("start-button");
var initials = document.querySelector('#initials')

var startpageEl = document.getElementById("startpage");
var rulesBoxEl = document.getElementById("rules-box");
var questionsEl = document.getElementById("questionpage");
var endPageEl = document.getElementById("end-page");
var resultsPage = document.getElementById("results-page");

//var resetButton = document.getElementById
//("reset-button")

// const sfxPlay = const Audio(''





// function getQuestion() {
//   var currentQuestion = quizQuestionAnswer[currentQuestionIndex];

//   var questionEl = document.getElementById("quizQuestionAnswer-question");
//   questionsEl.textConent = currentQuestion.question;
//   choicesEl.innerHTML = "";

//   for (var i = 0; i < currentQuestion.question.options.length; i++) {
//     var choice = currentQuestion.choices[i];
//     var choiceNode = document.createElement("button");
//     choiceNode.setAttribute("class", "choice");

//     choicesEl.appendChild(choiceNode);
//   }
// }

// if (!buttonEl.matches("choice")) {
//   /return;
// }

/* } 


  }*/

// Timer Code
var quizQuestionAnswer = [
  {
    question: "What Does HTML stand for?",
    options: [
      "Hyper Toddlers Moms Lunch",
      "Hyper Text Makeup Language",
      "Hilarious Texting Mixes Languges",
      "High Tech Modual License",
    ],
    answer: "Hyper Text Makeup Language",
  },
  {
    question: "What does the DOM stand for?",
    options: [
      "District Office Mananger",
      "Document Object Model",
      "Disturbing Occupational Laceration",
      "Dasturdly Objectifying Letch",
    ],  
    answer: "Document Object Model",
  },
  {
    question: "A Boolean is defined as ture or false?",
    options: ["True", "False"],
    answer: "True",
  },
  {
    question: "A for loop has three elements?",
    options: ["True", "False"],
    answer: "True",
  },
];



let timeEl = document.querySelector("#timer");
// selects element by id
let mainEl = document.getElementById("main");
let secondsLeft = 100;
//sets interval in variable
function setTime() {
  let timerInterval = setInterval(function () {
    console.log(secondsLeft);
    secondsLeft--;
    timeEl.textContent = ":" + secondsLeft + " seconds left";
    if (secondsLeft > 0) {
      // secondsLeft =
    }
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      // create code below to use time leftover as the score.
      //sendMessage();
      alert("out of time");
    }
  }, 1000);
}

function renderQuestion() {
  {
    var currentQuestion = quizQuestionAnswer[currentQuestionIndex];

    var questionEl = document.getElementById("quizQuestionAnswer-question");
    var choicesEl = document.getElementById("options");
    choicesEl.innerHTML = "";
    questionEl.textContent = currentQuestion.question;
    // document.getElementById("questionpage").append(choicesEl);
    for (var i = 0; i < currentQuestion.options.length; i++) {
      var choice = currentQuestion.options[i];
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.dataset.value = choice;
      // choiceNode.textContent = choice;
      choiceNode.textContent = i + 1 + ". " + choice;
      choicesEl.appendChild(choiceNode);
    }
  }
  document.getElementById("rules-box").innerHTML = "<h2>";
  // render questions here
}

document.getElementById("options").addEventListener("click", function (event) {
  if (event.target.className === "choice") {
    
    // code to verify correct/incorrect answer goes here...
    
    
    //
    console.log(event.target.dataset.value);

    var chosenAnswer = event.target.dataset.value;
    if (chosenAnswer !== quizQuestionAnswer[currentQuestionIndex].answer) {
      secondsLeft -= 20;
      if (secondsLeft < 0) {
        secondsLeft = 0;
      }

      alert("Wrong");
    } else {
      alert("Correct");
    }
    currentQuestionIndex++;
    
    //if (secondsLeft<= 0 || currentQuestionIndex === optons.length){
//quizEnd()    
    
    
    
    
    if (currentQuestionIndex < 4) {
      renderQuestion();
    } else {
      console.log("should not be runing");
      startpageEl.setAttribute("class", "hide");
      rulesBoxEl.setAttribute("class", "hide");
      questionsEl.setAttribute("class", "hide");
      endPageEl.removeAttribute("class", "hide");
    }

  }
})


function quizEnd() {
        clearInterval(TimerId);

}
startButton.addEventListener("click", function ()   { 
  startpageEl.setAttribute("class", "hide");
  rulesBoxEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class", "hide");

  secondsLeft = 100;
  startButton.disabled = true;
  setTime();
  //startQuiz();
  renderQuestion();
});

var saveButton = document.getElementById("save-button")
saveButton.addEventListener("click", function(event) {event.preventDefault();
// document.getElementById.("initials").innerHTML = 
var initails = [];
})



//saveButton.addEventListener("click", function (event) {
  // event.preventDefault();

  // var initails = [];

  // get initials from local storage and put them in a variable called initails.

  // if initials then push user input into initials array

  // else then initails = [userinput];

  // set initials into local storage

  /




  
  




// saveButton.addEventListener("click",function(event)preventDefault();

// )




// function questionClick(event) {
//   var buttonEl = event.target;

//   if (!buttonEl.matches(".choice")) {
//     return;
//   }

//   if (buttonEl.value !== questions[currentQuestionIndex].answer) {
//     time -= 10;
//     if (time < 0) {
//       time = 0;
//     }

//     alert("Wrong");
//   } else {
//     alert("Correct");
//   }
//   currentQuestionIndex++;

//   if (time <= 0 || currentQuestionIndex === questions.length) {
//     quizEnd();
//   } else {
//     getQuestion();
//   }
// }

//setTime();

//1. wait for click event on start button
//2. startquiz()
//- reset all the var
//- start the timer
//- display question
//  counts down from 100 seconds
//

/*const quizQuestionAnswer1 = [
  ,
  "A.  Hyper Toddlers Moms Lunch",
  "B.  Hyper Text Makeup Language",
  "C.  Hilarious Texting Mixes Languges",
  "D.  High Tech Modual License",
];
const quizQuestionAnswer2 = [
x  "What does the DOM stand for?",
  "A.  District Office Mananger",
  "B.  Document Object Model",
  "C.  Disturbing Occupational Laceration",
  "D.  Dasturdly Objectifying Letch",
];

let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("seconds").innerHTML = seconds;

console.log(seconds);

/* Variable log--

  quizQuestionAnswer1
  quizQuestionAnswer2
  seconds */

/* Start
  Page with start button:  Action-press (click event) button to start quiz.
  display first question, create a listening event to check for the correct key, we're using B as the right answer.
  add points if right subtract seconds if wrong, add points to aggregate score.
  list conestants score in high score page.

  */

/*<div id="Button-A">
    This is my DIV element.
    function Button-A() {
    var x = document.getElementById("Button-A");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
    }

*/
// how do I grab my question/answer data and display it?;
//