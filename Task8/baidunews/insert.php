<?php
	header("Content-type:application/json;charset=utf-8");

	require_once('db.php');

	if ($link) {
		// 插入新闻
		$newstitle = addslashes(htmlspecialchars($_POST['newstitle']));
		$newstype = $_POST['newstype'];
		
		$newsimg = addslashes(htmlspecialchars($_POST['newsimg']));
		$newstime = $_POST['newstime'];
		$newsfrom = addslashes(htmlspecialchars($_POST['newsfrom']));

		$sql = "INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newsfrom`) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newsfrom}')";

		mysqli_query($link,"SET NAMES utf8");
		$result = mysqli_query($link,$sql);
	if ($result) {
		echo json_encode(array('success' =>'ok'));
	}
		
	}






?>