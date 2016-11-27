$(document).ready(function () {
	$(window).on("load", function(){
		imgLocation();
		var dataImg = {"data":[{"src":"11.JPEG"},{"src":"12.jpeg"},{"src":"13.jpeg"},{"src":"14.jpeg"},{"src":"15.jpeg"},{"src":"16.jpeg"}]}
		window.onscroll = function(){
			if (scrollside()) {
				$.each(dataImg.data,function (index,value) {
					var box = $("<div>").addClass('box').appendTo($('.container'));
					var content = $("<div>").addClass('content').appendTo(box);
					$("<img>").attr("src","image/"+$(value).attr("src")).appendTo(content);
				});
				imgLocation();
			}
		};	
	});
	$(window).on("resize",function(){
		imgLocation();
	});
});
function scrollside() {
	var box = $('.box');
	var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var documentHeight = $(document).width();
	var scrollHeight = $(window).scrollTop();
	return(lastboxHeight<scrollHeight+documentHeight)?true:false;

}
function imgLocation(){
	var box = $('.box');
	// box.css({
 //    	position: 'relative',
 //    	top: '0',
 //    	left: '0'
 //    });
	var boxWidth = box.eq(0).width();
	var num = Math.floor($('.container').width()/boxWidth);
	var boxArr = [];
	box.each(function(index,value){
		var boxHeight = box.eq(index).height();
		if (index<num) {
			boxArr[index]= boxHeight;
		}else{
			var minboxHeight = Math.min.apply(null,boxArr);
			var minboxIndex = $.inArray(minboxHeight,boxArr);
			$(value).css({
				"position":"absolute",
				"top":minboxHeight+Math.floor((index+1)/num)*5,
				"left":box.eq(minboxIndex).position().left
			});
		boxArr[minboxIndex]+=box.eq(index).height();
		}
	});
}