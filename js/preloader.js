$(document).ready(function(){
	$('.flip').hover(function(){
		var id = $(this).parent().attr("href");
		$(this).parent().hide("drop", {}, 500, function(){
			$(id).show("drop",{},500);
		});
		
	});
  $(".flop").mouseleave(function(){
  	var id = $(this).attr("href")
    $(this).hide("drop",{},500,function(){
    	$(id).show("drop",{},500);
    });
  });

});