$(document).ready(function(){
	$('#header-icon').click(function(){
		$('html,body').animate({
				scrollTop:$('#main').offset().top},1000);
	});
	  

});