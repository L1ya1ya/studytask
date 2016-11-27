<?php
	header("Content-type:application/json;charset=utf-8");

	require_once('db.php');

	if ($link) {
		// 插入新闻
		$newstype = $_POST['newstype'];
		$newstitle = $_POST['newstitle'];
		$newsimg = $_POST['newsimg'];
		$newstime = $_POST['newstime'];
		$newsfrom = $_POST['newsfrom'];
		$newsid = $_POST['id'];

		$sql = "UPDATE `news` SET `newstype`='{$newstype}',`newstitle`='{$newstitle}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newsfrom`='{$newsfrom}' WHERE `id`={$newsid}";

		mysqli_query($link,"SET NAMES utf8");
		$result = mysqli_query($link,$sql);

		echo json_encode(array('success' =>'ok'));
	}






?>