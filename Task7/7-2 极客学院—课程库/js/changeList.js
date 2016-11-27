$(document).ready(function(){
	$('.kuai-icon').click(function(){
		$('#changid').addClass('study');
		$('#changid').removeClass('study2');
	});
	$('.list-icon').click(function(){
		$('#changid').addClass('study2');
		$('#changid').removeClass('study');
	});

});
 
