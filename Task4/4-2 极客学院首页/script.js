var search={
	init: function(){
		this.moreSearch();
	}
	moreSearch:function(){
		$('#search').mouseover(function(){
			$('#moreSearch').show();
		}).mouseout(function(){
			$('#moreSearch').hide();
		})
	}
}