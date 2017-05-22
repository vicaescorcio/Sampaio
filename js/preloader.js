$(document).ready(function(){
	$('.flip').click(function(){
		var id = $(this).parent().attr("href");
		$(this).parent().hide("drop", {}, 1000, function(){
			$(id).show("drop",{},1000);
		});
		
	});
});