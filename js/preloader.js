$(document).ready(function(){
	$('.bu').click(function(){
		$('#front').hide("drop", {}, 1000, function(){
			$('#back').show("drop",{},1000);
		});
		
	});
});