// When the user clicks the minimize button on the chat window, it disappears
$(document).ready(function() {
	$("#minimize-bar").click(function() {
		$(".chat-column").hide();
		$("#view-change-button").show();
	})

	// Closes the Responsive Menu on Menu Item Click
   $("#collapsable-nav a").click(function() {
     $("#collapsable-nav").collapse('hide'); 
   });
});
