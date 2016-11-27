/**
 * Created by LUO on 2016/10/21.
 */
// 推荐区域的显示与隐藏
var Show={
    init:function(){
        this.showHide();
    },
    showHide:function(){
        $('.right-hide').click(function () {
        $('.commendArea').fadeToggle(500);
        });
    }
}
//加载执行
$(function(){
    Show.init();
})
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
// 单例模式
var Tab ={
    init:function(){
        this.render();
        this.bind();
    },
    render:function(ele){
        var a =this;
        this.btn = $(ele);
    },
    bind:function(){
        var a = this;
        for (var i = 1; i <= 5; i++) {
            $('#com-menu-'+i).click(
                function(){
                    console.log(this);
                    a.clickTab(this);
                }
            );
        }
        a.btn.click(function(){
            a.clickTab();
        });
    },
    clickTab:function(ele){
        for (var i = 1; i <= 5; i++) {
            $('#com-menu-'+i).removeClass('com-menu-bg');
        }
        $(ele).addClass('com-menu-bg');
    }
}
Tab.init();
// 选项卡内容
var TabContent ={
    init:function(){
        this.render();
        this.bind();
    },
    render:function(ele){
        var a =this;
        this.btn = $(ele);
    },
    bind:function(){
        var a = this;
        for (var i = 1; i <= 5; i++) {
            $('#com-menu-'+i).click(
                function(){
                    console.log(this);
                    a.TabC(this);
                }
            );
        }
        a.btn.click(function(){
            a.TabC();
        });
    },
    TabC:function(ele){
        var tempstr = ele.id.replace("com-menu-", "");
        for (var i = 1; i <= 5; i++) {
            $('#com-tab'+i).css({display:"none"});
        }
        $('#com-tab'+ tempstr).css({display:"block"});
    }
}
TabContent.init();
// 我的导航

var Setbar ={
    init:function(){
        this.render();
        this.bind();
    },
    render:function(){
        var a =this;
        this.btn = $('.title-content');
    },
    bind:function(){
        var a = this;
        a.btn.mouseover(function(){
            a.showC();
        });
    },
    showC:function(){
        $('.title-content').mouseover(function(){
            $('.s-setbar').show();
        }).mouseout(function(){
            $('.s-setbar').hide();
        });
    }
}
Setbar.init();

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

var Scroll ={
    init:function(){
        this.render();
        this.bind();
    },
    render:function(){
        var a =this;
        this.btn = $(window);
    },
    bind:function(){
        var a = this;
        a.btn.scroll(function(){
            a.fixNav();
        });
    },
    fixNav:function(){
        height = $(window).scrollTop();
          if(height > 150){
            $('.fixArea-wrapper').fadeIn(500);
          }else{
            $('.fixArea-wrapper').hide();
          };
    }
}
Scroll.init();

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
    localStorage.setItem('bgImg',bgImg);
}


if (localStorage) {
    bgChange(localStorage.getItem('bgImg'))
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

var goTop ={
    init:function(){
        this.render();
        this.bind();
    },
    render:function(){
        var a =this;
        this.btn = $(window);
    },
    bind:function(){
        var a = this;
        a.btn.scroll(function(){
            a.Top();
        });
    },
    Top:function(){
        height = $(window).scrollTop();
        if(height > 50){
          $('.top-feed').fadeIn(500);
        }else{
          $('.top-feed').hide();
        };
    }
}
goTop.init();
