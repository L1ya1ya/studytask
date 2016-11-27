/**
 * Created by LUO on 2016/10/21.
 */
// 推荐区域的显示与隐藏
$(document).ready(function () {
    $('.right-hide').click(function () {
        $('.commendArea').fadeToggle(500);
    });
});
// END！推荐区

// 更多产品的显示
var baiDu={
    init:function(){
        this.baiduSetting();
    },
    baiduSetting:function(){
        $('.more,.all').mouseover(function(){
            $('.all').show();
        }).mouseout(function(){
            $('.all').hide();
        })
    }
}
//加载执行
$(function(){
    baiDu.init();
})
// END！更多产品

// 选项卡
// 选项卡头部
$(document).ready(function(){
    $('#com-menu-1').click(function () {
        $('#com-menu-1').addClass('com-menu-bg');
        $('#com-menu-2').removeClass('com-menu-bg');
        $('#com-menu-3').removeClass('com-menu-bg');
        $('#com-menu-4').removeClass('com-menu-bg');
        $('#com-menu-mine').removeClass('com-menu-bg');
    });
    $('#com-menu-2').click(function () {
        $('#com-menu-2').addClass('com-menu-bg');
        $('#com-menu-1').removeClass('com-menu-bg');
        $('#com-menu-3').removeClass('com-menu-bg');
        $('#com-menu-4').removeClass('com-menu-bg');
        $('#com-menu-mine').removeClass('com-menu-bg');
    });
    $('#com-menu-3').click(function () {
        $('#com-menu-3').addClass('com-menu-bg');
        $('#com-menu-1').removeClass('com-menu-bg');
        $('#com-menu-2').removeClass('com-menu-bg');
        $('#com-menu-4').removeClass('com-menu-bg');
        $('#com-menu-mine').removeClass('com-menu-bg');
    });
    $('#com-menu-4').click(function () {
        $('#com-menu-4').addClass('com-menu-bg');
        $('#com-menu-1').removeClass('com-menu-bg');
        $('#com-menu-2').removeClass('com-menu-bg');
        $('#com-menu-3').removeClass('com-menu-bg');
        $('#com-menu-mine').removeClass('com-menu-bg');
    });
    $('#com-menu-mine').click(function () {
        $('#com-menu-mine').addClass('com-menu-bg');
        $('#com-menu-1').removeClass('com-menu-bg');
        $('#com-menu-2').removeClass('com-menu-bg');
        $('#com-menu-3').removeClass('com-menu-bg');
        $('#com-menu-4').removeClass('com-menu-bg');
    });
});
// 选项卡内容
function tab(one,two,three,four,five) {
    document.getElementById("com-tab1").style.display=one;
    document.getElementById("com-tab2").style.display=two;
    document.getElementById("com-tab3").style.display=three;
    document.getElementById("com-tab4").style.display=four;
    document.getElementById("com-tab-mine").style.display=five;

}
    var menu1 = document.getElementById("com-menu-1");
    menu1.onclick=function () {
    tab("block","none","none","none","none");
    }


    var menu2 = document.getElementById("com-menu-2");
    menu2.onclick=function () {
    tab("none","block","none","none","none");
    }

    var menu3 = document.getElementById("com-menu-3");
    menu3.onclick=function () {
    tab("none","none","block","none","none");
    }

    var menu4 = document.getElementById("com-menu-4");
    menu4.onclick=function () {
    tab("none","none","none","block","none");
    }

    var menu5 = document.getElementById("com-menu-mine");
    menu5.onclick=function () {
    tab("none","none","none","none","block");
    }
// 返利
    $(document).ready(function () {
        $('.com-tab2-content .title1').mouseover(function () {
            $('.rebate').show();
        }).mouseout(function(){
            $('.rebate').hide();
        });
        $('.com-tab2-content .title2').mouseover(function () {
            $('.rebate1').show();
        }).mouseout(function(){
            $('.rebate1').hide();
        });
    });
//滚动后导航固定
$(function(){
    $(window).scroll(function(){
          height = $(window).scrollTop();
          if(height > 150){
            $('.fixArea-wrapper').fadeIn(500);
          }else{
            $('.fixArea-wrapper').hide();
          };
});
});
// 点击换肤
$(document).ready(function(){
    $('.right-skin').click(function(){
        $('.change-skin').fadeIn(500);
    });
    $('.close').click(function(){
        $('.change-skin').slideUp(500);
    });
    $('.commendArea').click(function(){
        $('.change-skin').slideUp(500);
    });
});

function bgChange(bgImg){
    document.body.style.background = bgImg;
}

var pic1 = document.getElementById('bgpic1');
pic1.onclick=function(){
    bgChange("url(image/12.jpg)");
    document.getElementById("logo").src="image/logo_white.png";
}

var pic2 = document.getElementById('bgpic2');
pic2.onclick=function(){
    bgChange("url(image/37.jpg)");
    document.getElementById("logo").src="image/logo_white.png";
}

var pic3 = document.getElementById('bgpic3');
pic3.onclick=function(){
    bgChange("url(image/44.jpg)");
    document.getElementById("logo").src="image/logo_white.png";
}
// 不使用皮肤时，换logo图
var pic4 = document.getElementById('bgpic4');
pic4.onclick=function(){
    bgChange("#fff");
    document.getElementById("logo").src="image/bd_logo1.png";
}


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
