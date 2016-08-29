$(document).ready(function(){

var correct = 0;
var incorrect = 0;
var unanswered = 0;

var correctAnswer1 = "88 million";
var correctAnswer2 = "A Clowder";
var correctAnswer3 = "70%";
var correctAnswer4 = "48.5 inches";
var correctAnswer5 = "Bezoar";

var count = 10;
var counter = setInterval(timer, 1000);

var timer = function(){
	count = count - 1;
	if (count <= 0){
		clearInterval(timer);
		return;
	}

	document.getElementById("timer").innerHTML="Time remaining: " count;
}


window.onload = function(){
	$('#startGame').on('click', beginGame);
}


































});//End jQuery document ready