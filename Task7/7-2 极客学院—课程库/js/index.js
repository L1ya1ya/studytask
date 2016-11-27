function list(L1,L2,L3) {
    document.getElementById("L1").style.display=L1;
    document.getElementById("L2").style.display=L2;
    document.getElementById("L3").style.display=L3;
}
var nav1=document.getElementById("nav1");
nav1.onmouseover=function(){
	list("block","none","none");
}
nav1.onmouseout=function(){
	list("none","none","none");
}

var nav2=document.getElementById("nav2");
nav2.onmouseover=function(){
	list("none","block","none");
}
nav2.onmouseout=function(){
	list("none","none","none");
}

var nav3=document.getElementById("nav3");
nav3.onmouseover=function(){
	list("none","none","block");
}
nav3.onmouseout=function(){
	list("none","none","none");
}
// 搜索条
$(document).ready(function(){
	$('#search').click(function(){
		$('#moreSearch').show();
	});
	$('#header .searchbox .close-icon').click(function(){
		$('#moreSearch').hide();
	});
});
// 右侧导航栏
$(document).ready(function(){
	$('.choice1').mouseover(function(){
		$('#st1').show();
	}).mouseout(function(){
		$('#st1').hide();
	});
	$('.choice2').mouseover(function(){
		$('#st2').show();
	}).mouseout(function(){
		$('#st2').hide();
	});
	$('.choice3').mouseover(function(){
		$('#st3').show();
	}).mouseout(function(){
		$('#st3').hide();
	});
	$('.choice4').mouseover(function(){
		$('#st4').show();
	}).mouseout(function(){
		$('#st4').hide();
	});
});
// 右侧课程展示区
$(document).ready(function(){
	$('#Box1').mouseover(function(){
		$('#Box1 .lesson-infor').addClass('infor');
		$('#Box1 .lesson-infor .detail').css('display','block');
		$('#Box1 .lesson-infor .timeandicon dl').addClass('dl');
		$('#Box1 .lesson-infor .timeandicon dd').addClass('dd');
		$('#Box1 .lesson-infor .timeandicon dl dd').css('display','block');
		$('#Box1 .learn-number').css('display','block');
		$('#Box1 .learn-number').css('padding-top','18px');
		$('#Box1 .lesson-infor .lessonicon-box').addClass('classbox');
	}).mouseout(function(){
		$('#Box1 .lesson-infor').removeClass('infor');
		$('#Box1 .lesson-infor .detail').css('display','none');
		$('#Box1 .lesson-infor .detail').hide();
		$('#Box1 .lesson-infor .timeandicon dl').removeClass('dl');
		$('#Box1 .lesson-infor .timeandicon dd').removeClass('dd');
		$('#Box1 .timeandicon .zhongji').css('display','none');
		$('#Box1 .learn-number').css('display','none');
		$('#Box1 .lesson-infor .lessonicon-box').removeClass('classbox');
	});

	$('.study #Box2').mouseover(function(){
		$('#Box2 .lesson-infor').addClass('infor');
		$('#Box2 .lesson-infor .detail').css('display','block');
		$('#Box2 .lesson-infor .timeandicon dl').addClass('dl');
		$('#Box2 .lesson-infor .timeandicon dd').addClass('dd');
		$('#Box2 .lesson-infor .timeandicon dl dd').css('display','block');
		$('#Box2 .learn-number').css('display','block');
		$('#Box2 .learn-number').css('padding-top','18px');
		$('#Box2 .lesson-infor .lessonicon-box').addClass('classbox');
	}).mouseout(function(){
		$('#Box2 .lesson-infor').removeClass('infor');
		$('#Box2 .lesson-infor .detail').css('display','none');
		$('#Box2 .lesson-infor .detail').hide();
		$('#Box2 .lesson-infor .timeandicon dl').removeClass('dl');
		$('#Box2 .lesson-infor .timeandicon dd').removeClass('dd');
		$('#Box2 .timeandicon .zhongji').css('display','none');
		$('#Box2 .learn-number').css('display','none');
		$('#Box2 .lesson-infor .lessonicon-box').removeClass('classbox');
	});

	$('.study #Box3').mouseover(function(){
		$('#Box3 .lesson-infor').addClass('infor');
		$('#Box3 .lesson-infor .detail').css('display','block');
		$('#Box3 .lesson-infor .timeandicon dl').addClass('dl');
		$('#Box3 .lesson-infor .timeandicon dd').addClass('dd');
		$('#Box3 .lesson-infor .timeandicon dl dd').css('display','block');
		$('#Box3 .learn-number').css('display','block');
		$('#Box3 .learn-number').css('padding-top','18px');
		$('#Box3 .lesson-infor .lessonicon-box').addClass('classbox');
	}).mouseout(function(){
		$('#Box3 .lesson-infor').removeClass('infor');
		$('#Box3 .lesson-infor .detail').css('display','none');
		$('#Box3 .lesson-infor .detail').hide();
		$('#Box3 .lesson-infor .timeandicon dl').removeClass('dl');
		$('#Box3 .lesson-infor .timeandicon dd').removeClass('dd');
		$('#Box3 .timeandicon .zhongji').css('display','none');
		$('#Box3 .learn-number').css('display','none');
		$('#Box3 .lesson-infor .lessonicon-box').removeClass('classbox');
	});

	$('.study #Box4').mouseover(function(){
		$('#Box4 .lesson-infor').addClass('infor');
		$('#Box4 .lesson-infor .detail').css('display','block');
		$('#Box4 .lesson-infor .timeandicon dl').addClass('dl');
		$('#Box4 .lesson-infor .timeandicon dd').addClass('dd');
		$('#Box4 .lesson-infor .timeandicon dl dd').css('display','block');
		$('#Box4 .learn-number').css('display','block');
		$('#Box4 .learn-number').css('padding-top','18px');
		$('#Box4 .lesson-infor .lessonicon-box').addClass('classbox');
	}).mouseout(function(){
		$('#Box4 .lesson-infor').removeClass('infor');
		$('#Box4 .lesson-infor .detail').css('display','none');
		$('#Box4 .lesson-infor .detail').hide();
		$('#Box4 .lesson-infor .timeandicon dl').removeClass('dl');
		$('#Box4 .lesson-infor .timeandicon dd').removeClass('dd');
		$('#Box4 .timeandicon .zhongji').css('display','none');
		$('#Box4 .learn-number').css('display','none');
		$('#Box4 .lesson-infor .lessonicon-box').removeClass('classbox');
	});

	$('.study #Box5').mouseover(function(){
		$('#Box5 .lesson-infor').addClass('infor');
		$('#Box5 .lesson-infor .detail').css('display','block');
		$('#Box5 .lesson-infor .timeandicon dl').addClass('dl');
		$('#Box5 .lesson-infor .timeandicon dd').addClass('dd');
		$('#Box5 .lesson-infor .timeandicon dl dd').css('display','block');
		$('#Box5 .learn-number').css('display','block');
		$('#Box5 .learn-number').css('padding-top','18px');
		$('#Box5 .lesson-infor .lessonicon-box').addClass('classbox');
	}).mouseout(function(){
		$('#Box5 .lesson-infor').removeClass('infor');
		$('#Box5 .lesson-infor .detail').css('display','none');
		$('#Box5 .lesson-infor .detail').hide();
		$('#Box5 .lesson-infor .timeandicon dl').removeClass('dl');
		$('#Box5 .lesson-infor .timeandicon dd').removeClass('dd');
		$('#Box5 .timeandicon .zhongji').css('display','none');
		$('#Box5 .learn-number').css('display','none');
		$('#Box5 .lesson-infor .lessonicon-box').removeClass('classbox');
	});

	$('.study #Box6').mouseover(function(){
		$('#Box6 .lesson-infor').addClass('infor');
		$('#Box6 .lesson-infor .detail').css('display','block');
		$('#Box6 .lesson-infor .timeandicon dl').addClass('dl');
		$('#Box6 .lesson-infor .timeandicon dd').addClass('dd');
		$('#Box6 .lesson-infor .timeandicon dl dd').css('display','block');
		$('#Box6 .learn-number').css('display','block');
		$('#Box6 .learn-number').css('padding-top','18px');
		$('#Box6 .lesson-infor .lessonicon-box').addClass('classbox');
	}).mouseout(function(){
		$('#Box6 .lesson-infor').removeClass('infor');
		$('#Box6 .lesson-infor .detail').css('display','none');
		$('#Box6 .lesson-infor .detail').hide();
		$('#Box6 .lesson-infor .timeandicon dl').removeClass('dl');
		$('#Box6 .lesson-infor .timeandicon dd').removeClass('dd');
		$('#Box6 .timeandicon .zhongji').css('display','none');
		$('#Box6 .learn-number').css('display','none');
		$('#Box6 .lesson-infor .lessonicon-box').removeClass('classbox');
	});
});
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
