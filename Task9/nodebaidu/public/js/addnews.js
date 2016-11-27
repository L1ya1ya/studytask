$(document).ready(function(){
	refreshNews('推荐');

	$('nav a').click(function(e){
		e.preventDefault();
		var type =$(this).text();
		refreshNews(type);
	});
	
});
function refreshNews(type){
	var $lists = $('article ul');
	$lists.empty();

	$.ajax({
			url:'/news',
			type:'get',
			datatype:'json',
			data:{newstype:type},
			success:function(data){
				data.forEach(function(item,index,array){
					var $list = $('<li></li>').addClass('news-list').prependTo($lists);
					var $newsimg = $('<div></div>').addClass('news-img').appendTo($list);
					var $img = $('<img>').attr('src',item.newsimg).appendTo($newsimg);
					var $newstitle = $('<div></div>').addClass('news-text').appendTo($list);
					var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newstitle);
					var $p = $('<p></p>').appendTo($newstitle);
					var $newstime = $('<span></span>').addClass('news-time').html(moment(item.newstime).format("YYYY-MM-DD")).appendTo($p);
					var $newsfrom = $('<span></span>').addClass('news-from').html(item.newsfrom).appendTo($p);

				});
				
			}
		});

	

	
}