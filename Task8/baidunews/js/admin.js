// 打开后台页面，发送请求，刷新新闻列表
$(document).ready(function() {
	var $newsTable = $('#newstable tbody');

	refreshNews();
	// 添加新闻
	
	$('#btnsubmit').click(function(e){
		e.preventDefault();

		// 输入判断
		if ($('#newstitle').val()==="" || $('#newsimg').val()==="" || $('#newstime').val()==="" || $('#newsfrom').val()==="" ) {
			if ($('#newstitle').val()==="") {
				$('#newstitle').parent().addClass('has-error');
			}else{
				$('#newstitle').parent().removeClass('has-error');
			}
			if ($('#newsimg').val()==="") {
				$('#newsimg').parent().addClass('has-error');
			}else{
				$('#newsimg').parent().removeClass('has-error');
			}
			if ($('#newstime').val()==="") {
				$('#newstime').parent().addClass('has-error');
			}else{
				$('#newstime').parent().removeClass('has-error');
			}
			if ($('#newsfrom').val()==="") {
				$('#newsfrom').parent().addClass('has-error');
			}else{
				$('#newsfrom').parent().removeClass('has-error');
			}
			
		}else{
			var jsonNews = {
				newstitle:$('#newstitle').val(),
				newstype:$('#newstype').val(),
				newsimg:$('#newsimg').val(),
				newstime:$('#newstime').val(),
				newsfrom:$('#newsfrom').val(),
			};

			// 提交添加
			
			$.ajax({
				url:'./insert.php',
				type:'post',
				data:jsonNews,
				datatype:'json',
				success:function(data){
					console.log(data);
					refreshNews();
				}
			});
		}
	});
	// 删除新闻的功能
	var deleteId = null;
	$newsTable.on('click','.btn-danger',function(e){
		$('#deleteModal').modal('show');
		deleteId = $(this).parent().prevAll().eq(5).html();
	});
	$('#deleteModal #confirmDelete').click(function(e){
		if (deleteId) {
			$.ajax({
				url:'./delete.php',
				type:'post',
				data:{newsid:deleteId},
				datatype:'json',
				success:function(data){
					console.log('删除成功');
					$('#deleteModal').modal('hide');
					refreshNews();
				}
			});
		}
	});

	// 编辑新闻的功能

	var updateId = null;
	$newsTable.on('click','.btn-primary',function(e){
		$('#updateModal').modal('show');
		updateId = $(this).parent().prevAll().eq(5).html();
		
		$.ajax({
				url:'./curnews.php',
				type:'get',
				data:{newsid:updateId},
				datatype:'json',
				success:function(data){
					console.log(data);
					$('#unewstitle').val(data[0].newstitle);
					$('#unewstype').val(data[0].newstype);
					$('#unewsimg').val(data[0].newsimg);
					$('#unewsfrom').val(data[0].newsfrom);
					var utime = data[0].newstime.split(' ')[0];
					$('#unewstime').val(utime);
				}
			});
	});
	$('#updateModal #confirmUpdate').click(function(e){
		$.ajax({
				url:'./updata.php',
				type:'post',
				data:{
					newstitle:$('#unewstitle').val(),
					newstype:$('#unewstype').val(),
					newsimg:$('#unewsimg').val(),
					newstime:$('#unewstime').val(),
					newsfrom:$('#unewsfrom').val(),
					id:updateId
					},
				success:function(data){
					$('#updateModal').modal('hide');
					refreshNews();
				}
			});
	});

 	function refreshNews() {
	// // 清空表
	$newsTable.empty();

		$.ajax({
			type:'get',
			url:'./getnews.php',
			datatype:'json',
			error:  function(xml,e){
					console.log(xml);
					console.log(e);
				   },
			success:function (data) {
				data.forEach(function(item,index,array){
					var $tdid =$('<td>').html(item.id);
					var $tdtype =$('<td>').html(item.newstype);
					var $tdtitle =$('<td>').html(item.newstitle);
					var $tdimg =$('<td>').html(item.newsimg);
					var $tdtime =$('<td>').html(item.newstime);
					var $tdfrom =$('<td>').html(item.newsfrom);
					var $tdctrl =$('<td>');
					var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
					var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
					$tdctrl.append($btnupdate,$btndelete);
					var $tRow = $('<tr>');
					$tRow.append($tdid,$tdtype,$tdtitle,$tdimg,$tdfrom,$tdtime,$tdctrl);
					$newsTable.append($tRow);
				});
				console.log(data);
				
			}

		});
	}

});
