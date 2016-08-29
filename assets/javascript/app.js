$(document).ready(function(){

var correct = 0;
var incorrect = 0;
var unanswered = 0;

var questions = [
	firstQuestion={
		question: "How many pet cats are there in the U.S.?",
		answers: '<input type="radio" name="answer" value="88 million"> 88 million<br><input type="radio" name="answer" value="120 million"> 120 million<br><input type="radio" name="answer" value="657,930"> 657930<br><input type="radio" name="answer" value="6 million"> 6 million<br>'
	},
	
	secondQuestion={
		question: "What is a group of cats called?",
		answers: '<input type="radio" name="answer" value="A Herd"> A Herd<br><input type="radio" name="answer" value="A Gaggle"> A Gaggle<br><input type="radio" name="answer" value="A Clowder"> A Clowder<br><input type="radio" name="answer" value="A Stampede"> A Stampede<br>'
	},

	thirdQuestion={
		question: "How much of their lives do cats spend sleeping?",
		answers: '<input type="radio" name="answer" value="35%"> 35%<br><input type="radio" name="answer" value="50%"> 50%<br><input type="radio" name="answer" value="85%"> 85%<br><input type="radio" name="answer" value="70%"> 70%<br>'
	},

	fourthQuestion={
		question: "How long is the world's longest cat?",
		answers: '<input type="radio" name="answer" value="2 feet"> 2 feet<br><input type="radio" name="answer" value="48.5 inches"> 48.5 inches<br><input type="radio" name="answer" value="37 inches"> 37 inches<br><input type="radio" name="answer" value="100 inches"> 100 inches<br>'
	},

	fifthQuestion={
		question: "What is the scientific name for a \"hairball\"?",
		answers: '<input type="radio" name="answer" value="Pieza kake"> Pieza kake<br><input type="radio" name="answer" value="Bezoar"> Bezoar<br><input type="radio" name="answer" value="Nematoad"> Nematoad<br><input type="radio" name="answer" value="Scaptia"> Scaptia<br>'
	}
];

var currentIndex = 0;

var correctAnswers = ["88 million", "A Clowder", "70%", "48.5 inches", "Bezoar"];

var count = 7;

function timer(){
	counter = setInterval(decrement, 1000);
}

function decrement(){
	count--;
	$('#timer').html("Time remaining: " + count);
	if(count === 0){
		stop();
	}
}

function stop(){
	clearInterval(counter);
}

$("#nextQuestion").on('click', nextQuestion);


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
}

function nextQuestion(){
	count = 7;
	currentIndex++;
	$('#theQuestion').html(questions[currentIndex].question);
	$('form').html(questions[currentIndex].answers);
	// if(questions[currentIndex - 1].answers.value === correctAnswers[currentIndex -1]){
	// 	correct++;
	// }
	// else if(questions[currentIndex - 1].answers.value !== correctAnswers[currentIndex -1]){
	// 	incorrect++;
	// }
	// else if(count === 0){
	// 	unanswered++;
	// }
}






























});//End jQuery document ready