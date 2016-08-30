$(document).ready(function(){

var correct = 0;
var incorrect = 0;
var unanswered = 0;

var questions = [
	firstQuestion={
		question: "How many pet cats are there in the U.S.?",
		answers: '<input class="answers" type="radio" name="answer" value="88 million"> 88 million<br><input class="answers" type="radio" name="answer" value="120 million"> 120 million<br><input class="answers" type="radio" name="answer" value="657,930"> 657930<br><input class="answers" type="radio" name="answer" value="6 million"> 6 million<br>',
		correctAnswer: "88 million"
	},
	
	secondQuestion={
		question: "What is a group of cats called?",
		answers: '<input class="answers" type="radio" name="answer" value="A Herd"> A Herd<br><input class="answers" type="radio" name="answer" value="A Gaggle"> A Gaggle<br><input class="answers" type="radio" name="answer" value="A Clowder"> A Clowder<br><input class="answers" type="radio" name="answer" value="A Stampede"> A Stampede<br>',
		correctAnswer: "A Clowder"
	},

	thirdQuestion={
		question: "How much of their lives do cats spend sleeping?",
		answers: '<input class="answers" type="radio" name="answer" value="35%"> 35%<br><input class="answers" type="radio" name="answer" value="50%"> 50%<br><input class="answers" type="radio" name="answer" value="85%"> 85%<br><input class="answers" type="radio" name="answer" value="70%"> 70%<br>',
		correctAnswer: "70%"
	},

	fourthQuestion={
		question: "How long is the world's longest cat?",
		answers: '<input class="answers" type="radio" name="answer" value="2 feet"> 2 feet<br><input class="answers" type="radio" name="answer" value="48.5 inches"> 48.5 inches<br><input class="answers" type="radio" name="answer" value="37 inches"> 37 inches<br><input class="answers" type="radio" name="answer" value="100 inches"> 100 inches<br>'
		correctAnswer: "48.5 inches"
	},

	fifthQuestion={
		question: "What is the scientific name for a \"hairball\"?",
		answers: '<input class="answers" type="radio" name="answer" value="Pieza kake"> Pieza kake<br><input class="answers" type="radio" name="answer" value="Bezoar"> Bezoar<br><input class="answers" type="radio" name="answer" value="Nematoad"> Nematoad<br><input class="answers" type="radio" name="answer" value="Scaptia"> Scaptia<br>'
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
	$("#nextQuestion").on('click', nextQuestion);
}

function nextQuestion(){
	count = 7;
	currentIndex++;
	$("#nextQuestion").on('click', checkAnswers);
	$('#theQuestion').html(questions[currentIndex].question);
	$('form').html(questions[currentIndex].answers);
}

function checkAnswers(){
	if(userAnswer === correctAnswers[0] || userAnswer === correctAnswers[1] || userAnswer === correctAnswers[2] || userAnswer === correctAnswers[3] || userAnswer === correctAnswers[4]){
		correct++;
		console.log("Correct: " + correct);
	} else {
		incorrect++;
		console.log("Incorrect: " + incorrect);
	}
}














// if(questions[currentIndex - 1].answers.value === correctAnswers[currentIndex]){
	// 	correct++;
	// 	console.log("Correct: " + correct);
	// }
	// else if(questions[currentIndex - 1].answers.value !== correctAnswers[currentIndex]){
	// 	incorrect++;
	// 	console.log("Incorrect: " + incorrect);
	// }
	// else if(count === 0){
	// 	unanswered++;
	// 	console.log("Unanswered: " + unanswered);
	// }















});//End jQuery document ready










