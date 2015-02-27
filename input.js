
var currQuestion = "Loading...";
var currAnswer = "Loading...";

function input(){

	
	$(".input").append( "<div>Answer</div>");
	$(".input").append("<input id='input' type='text' name='firstname'>");
	$(".input").keypress(function(e) {
		$("#input").removeClass('red');
	    if(e.which == 13) {
	    	console.log($("#input").val())
	    	if($("#input").val() === (currAnswer + "")){
	        	questionCreate();
	        	$("#input").val('');
	        }else{
	        	$("#input").addClass('red');
	        }
	    }
	});
	questionCreate();
}

function questionCreate(){
	newQuestion();
	drawQuestion();
}

function newQuestion (){
	var question = generateQuestions(1);
	currQuestion = question[0][0];
	currAnswer = question[0][1];
}
function drawQuestion(){
	$('.Question').html("<div>" + currQuestion + "</div>")
}