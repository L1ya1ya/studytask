<?php
	header("Content-type:application/json;charset=utf-8");

	require_once('db.php');
	if($link){
		// 执行成功的过程

		if (array_key_exists("newstype",$_GET)) {
			$newstype = $_GET['newstype'];
			$sql = "SELECT * FROM `news` WHERE `newstype` = '{$newstype}' ";
			
			mysqli_query($link,"SET NAMES utf8");
			$result = mysqli_query($link,$sql);

			$senddata = array();
			while ($row = mysqli_fetch_assoc($result)) {
				array_push($senddata,array(
											'id'=>$row['id'],
											'newstype'=>$row['newstype'],
											'newstitle'=>$row['newstitle'],
											'newsimg'=>$row['newsimg'],
											'newstime'=>$row['newstime'],
											'newsfrom'=>$row['newsfrom'],
				));
			}
			echo json_encode($senddata);
		}else{

			$sql = "SELECT * FROM `news` ";
			mysqli_query($link,"SET NAMES utf8");
			$result = mysqli_query($link,$sql);

			$senddata = array();
			while ($row = mysqli_fetch_assoc($result)) {
				array_push($senddata,array(
											'id'=>$row['id'],
											'newstype'=>$row['newstype'],
											'newstitle'=>$row['newstitle'],
											'newsimg'=>$row['newsimg'],
											'newstime'=>$row['newstime'],
											'newsfrom'=>$row['newsfrom'],
				));
			}
			echo json_encode($senddata);
		}
	}else{
		echo json_encode(array('是否成功' =>'否'));
	}

	mysqli_close($link);


	// $arr = array(
	// 			'newstype'=> '百家',
	// 			'newsImg'=> 'image/2.jpg',
	// 			'newsText'=> '动态获取新闻标题',
	// 			'newsTime'=> '2016-11-3',
	// 			'newsFrom'=> '腾讯网'
	// 	);
	// echo json_encode($arr);

?>