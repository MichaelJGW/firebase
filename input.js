
function input(){

	
	$(".input").append( "<div>Answer</div>");
	$(".input").append("<input type='text' name='firstname'>");
	$(".input").keypress(function(e) {
	    if(e.which == 13) {
	        alert('You pressed enter!');
	    }
	});

}