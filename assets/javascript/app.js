$(document).ready(function(){

var correct = 0;
var incorrect = 0;
var unanswered = 0;

var questions = [
	firstQuestion={
		question: "How many pet cats are there in the U.S.?",
		answers: '<input id="option1" type="radio" name="question1" value="correct"> 88 million, <br> <input id="option2" type="radio" name="question1" value="incorrect"> 120 million, <br> <input id="option3" type="radio" name="question1" value="incorrect"> 657930, <br> <input id="option4" type="radio" name="question1" value="incorrect"> 6 million',
		correctAnswer: "88 million"
	},
	
	secondQuestion={
		question: "What is a group of cats called?",
		answers: '<input id="option1" type="radio" name="question2" value="incorrect"> A Herd<br><input id="option2" type="radio" name="question2" value="incorrect"> A Gaggle<br><input id="option3" type="radio" name="question2" value="correct"> A Clowder<br><input id="option4" type="radio" name="question2" value="incorrect"> A Stampede<br>',
		correctAnswer: "A Clowder"
	},

	thirdQuestion={
		question: "How much of their lives do cats spend sleeping?",
		answers: '<input id="option1" type="radio" name="question3" value="incorrect"> 35%<br><input id="option2" type="radio" name="question3" value="incorrect"> 50%<br><input id="option3" type="radio" name="question3" value="incorrect"> 85%<br><input id="option4" type="radio" name="question3" value="correct"> 70%<br>',
		correctAnswer: "70%"
	},

	fourthQuestion={
		question: "How long is the world's longest cat?",
		answers: '<input id="option1" type="radio" name="question4" value="incorrect"> 2 feet<br><input id="option2" type="radio" name="question4" value="correct"> 48.5 inches<br><input id="option3" type="radio" name="question4" value="incorrect"> 37 inches<br><input id="option4" type="radio" name="question4" value="incorrect"> 100 inches<br>',
		correctAnswer: "48.5 inches"
	},

	fifthQuestion={
		question: "What is the scientific name for a \"hairball\"?",
		answers: '<input id="option1" type="radio" name="question5" value="incorrect"> Pieza kake<br><input id="option2" type="radio" name="question5" value="correct"> Bezoar<br><input id="option3" type="radio" name="question5" value="incorrect"> Nematoad<br><input id="option4" type="radio" name="question5" value="incorrect"> Scaptia<br>',
		correctAnswer: "Bezoar"
	}
];

var currentIndex = 0;

var count = 7;

function timer(){
	counter = setInterval(decrement, 1000);
}

function decrement(){
	count--;
	$('#timer').html("Time remaining: " + count);
	if(count === 0){
		unanswered++;
		console.log("Unanswered:" + unanswered);
		nextQuestion();
	}
}

function stop(){
    clearInterval(counter);
}



window.onload = function(){
	$('#startGame').on('click', theGame);
	$('#startGame').on('click', timer);
}


function theGame(){
	$('#startGame').addClass('hidden');
	$('#timer').removeClass('hidden');
	$('#question').removeClass('hidden');
	$('#theQuestion').html(questions[currentIndex].question);
	$('form').html(questions[currentIndex].answers);
	$("#nextQuestion").on('click', function(){
		for(var i = 1; i <= 1; i++){
			var radio = document.getElementsByName('question'+i);
			console.log(radio);
			return;
			for(var j = 0; j < radio.length; j++){
				if(radio.value == "correct" && radio.checked){
					correct++;
					console.log(radio.value);
				} else {
					incorrect++;
					console.log(radio.value);
				}
			}
		}	
	});
	$("#nextQuestion").on('click', nextQuestion);
}

function nextQuestion(){
	count = 7;
	currentIndex++;
	if(currentIndex > 4){
		$("#question").addClass("hidden");
		$("#nextQuestion").addClass("hidden");
		$("#possibleAnswers").addClass("hidden");
		$("#theQuestion").addClass("hidden");
		$("#timer").addClass('hidden');
		$("#theResultsArea").removeClass("hidden");
		$("#correctResults").html("Correct: " + correct);
		$("#incorrectResults").html("Incorrect: " + incorrect);
		$("#unansweredResults").html("Unanswered: " + unanswered);
		stop();
	}
	else {
		$('#theQuestion').html(questions[currentIndex].question);
		$('form').html(questions[currentIndex].answers);
	}
}















});//End jQuery document ready










