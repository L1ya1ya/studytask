//—————————————改变背景颜色和顶部透明度 
	function changeSkin(bgcolor,opacity) {
		document.body.style.background=bgcolor;
		document.getElementById('header').style.opacity = opacity;
//—————————————存储背景颜色和顶部透明度设置
		localStorage.setItem('bgcolor',bgcolor);
		localStorage.setItem('opacity',opacity);
	}

	if (localStorage) {
		changeSkin(localStorage.getItem('bgcolor'),localStorage.getItem('opacity'))
	}
//—————————————改变字体颜色
	function changeFontColor(fontcolor1,fontcolor2) {
		var orange=document.getElementsByClassName("orange")
		for(var i=0;i<orange.length;i++){
		orange[i].style.color= fontcolor1;
		}
		var green=document.getElementsByClassName("green")
		for(var i=0;i<green.length;i++){
		green[i].style.color= fontcolor2;
		}
//—————————————存储字体颜色设置
		localStorage.setItem('fontcolor1',fontcolor1);
		localStorage.setItem('fontcolor2',fontcolor2);
	}

	if (localStorage) {
		changeFontColor(localStorage.getItem('fontcolor1'),localStorage.getItem('fontcolor2'))
	}
//—————————————绑定onclick事件，点击颜色变换背景和字体颜色
	var one =document.getElementById('skin-cl1');
	one.onclick = function () {
		changeSkin("linear-gradient(to left, #FF5F6D , #FFC371)","0.6");
		changeFontColor("#FF5F6D","#FFC371");
	}

	var two =document.getElementById('skin-cl2');
	two.onclick = function () {
		changeSkin("#f39839","0.6");
		changeFontColor("#673ab7","#03a9f4");
	}

	var three =document.getElementById('skin-cl3');
	three.onclick = function () {
		changeSkin("#d8220d","0.6");
		changeFontColor("#4caf50","#843492");
	}

	var four =document.getElementById('skin-cl4');
	four.onclick = function () {
		changeSkin("#00989e","0.6");
		changeFontColor("#829842","#00bcd4");
	}
	
	var five =document.getElementById('skin-cl5');
	five.onclick = function () {
		changeSkin("#CFDEF3","0.6");
		changeFontColor("#3246e0","#32e0b1");
	}

	var six =document.getElementById('skin-cl6');
	six.onclick = function () {
		changeSkin("linear-gradient(#ffd89b , #19547b)","0.6");	
		changeFontColor("#691d1d","#b7154c");
	}
//—————————————还原
	var clear =document.getElementById('skin-clear');
	clear.onclick = function () {
		changeSkin("#f7f7f8","1");	
		changeFontColor("#f50","#099e6a");	
	}

