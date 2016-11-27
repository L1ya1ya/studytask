// 回到顶部
$(document).ready(function(){
    $(window).scroll(function(){
	    height = $(window).scrollTop();
	    if(height > 50){
	      $('.top-feed').fadeIn(500);
	    }else{
	      $('.top-feed').hide();
	    };
    });
    $('.top-feed').mouseover(function(){
    	$('.text').show();
    	$('.icon').hide();
    }).mouseout(function(){
    	$('.text').hide();
    	$('.icon').show();
    });
    $('.top-feed').click(function () {
        $('body,html').animate({scrollTop: 0 }, 500);
 	});
});