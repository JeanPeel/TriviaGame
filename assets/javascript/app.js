
var question1 = "";
var question2 = "";
var question3 = "";
var question4 = "";

var answer1 = $("#hand-pan");
var answer2 = $("#glass-armonica");
var answer3 = $("#gu-zheng");
var answer4 = $("#hurdy-gurdy");
var answer5 = $("#theremin");
var answer6 = $("#array-mbira");

var questions = (question1, question2, question3, question4);
var answers = (answer1, answer2, answer3, answer4);

// var correctAnswers = 0;
// answers.text(correctAnswers++);
// console.log(correctAnswers);

// var wrong = document.getElementById("wrong")
// var correct = document.getElementById("correct")

var timer = $('#timer');
var counter = 200;
timer.text(counter);

var correct = $('#correct');
var wins = 0;
correct.text(wins);

var wrong = $('#wrong');
var losses = 0;
wrong.text(losses);

// () {
//     if (timer = 0) {
//     // trigger loose condition
//    counter = 200;
//    timer.text(counter);
//    console.log('timer reset')
// }
// }

$("#start").click(function() {
    setInterval(function() {counter--; timer.text(counter);}, 1000);
    console.log("start clicked") 
});

//Start Btn 
    //Imeediate, Action, Function, Method
    //Starts the Timer
    //Displays the Answers? 
//Timer
    //Imeediate & Delayed, Variable, Method & Property, Information and Thing
    //Counts Down
    //Triggers Loose condition if reaches 0
//Loose Condition
    //Imeedatly after triggered,  Variable, Inofrmation, Property
    //Displays you "loose" and either time is out or..
    //Corrected answers
    //Displays reset button
//Question 1
    // Information, Delayed, Variable, Property
//Question 2
    // Information, Delayed, Variable, Property
//Question 3
    // Information, Delayed, Variable, Property
//Question 4
    // Information, Delayed, Variable, Property

$("#hand-pan").click(function() {
    wins++;
    console.log('correct answers clicked ' + wins);
    correct.text(wins);
});

$("#glass-armonica").click(function() {
    wins++;
    console.log('correct answers clicked ' + wins);
    correct.text(wins);
});

$("#gu-zheng").click(function() {
    wins++;
    console.log('correct answers clicked ' + wins);
    correct.text(wins);
});

$("#hurdy-gurdy").click(function() {
    wins++;
    console.log('correct answers clicked ' + wins);
});

$("#theremin").click(function() {
    wins++;
    console.log('correct answers clicked ' + wins);
    correct.text(wins);
});

$("#array-mbira").click(function() {
    wins++;
    console.log('correct answers clicked ' + wins);
    correct.text(wins);
});

//Answer 1
    // Information, Delayed, Variable, Property
//Answer 2
    // Information, Delayed, Variable, Property
//Answer 3
    // Information, Delayed, Variable, Property
//Answer 4
    // Information, Delayed, Variable, Property

$("#submit").click(function() {
    console.log('submit clicked');
});
//Submit
    //Action, Imeediate, function, method
    //Compares answers to correct answers with If/ Else Statements
        // If all the questions are true then win Condition is triggered
        // If any of the questions are false then loose condition is triggered
// Win condition 
    // Action, Imeediate, function method
    // Displays "You won" and correct answers.
    // Displays reset button

$("#reset").click(function() {
    console.log('reset clicked');
});

// Reset
    // Resets timer
    // Resets scores
    // Displays Start screen and Start Button

// some document writing and console logging is needed also.
