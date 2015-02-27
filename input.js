
function input(){
	var foo = "<input type='text' name='firstname'>";
	$( ".input" ).html( "<div class='answerField'><div>Answer</div>" + foo + "</div>" );


}
$(document).keypress(function(e) {
    if(e.which == 13) {
        
    }
});