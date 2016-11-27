var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
	host:'localhost',
  	port:3306,
  	user:'root',
  	password:'123',
  	database:'baidunews'
});
/* 后台路由页面 */

// 获取新闻列表
router.get('/getnews', function(req, res,next) {
  connection.query("SELECT * FROM `news`",function(err,rows){
  	res.json(rows);
  });
});

// 点击确认更新

router.post('/updata', function(req,res) {
	var newsid =req.body.id,
	    newstype =req.body.newstype,
	    newstitle =req.body.newstitle,
	    newsimg = req.body.newsimg,
	    newstime =req.body.newstime,
	    newsfrom =req.body.newsfrom;

  connection.query("UPDATE `news` SET `newstype`=?,`newstitle`=?,`newsimg`=?,`newstime`=?,`newsfrom`=? WHERE `id`=?",[newstype,newstitle,newsimg,newstime,newsfrom,newsid],function(err,rows){
  	console.log(rows.changeRows);
  	res.json(rows); 
  });
});

// 模态框取值

router.get('/curnews', function(req,res) {
	var newsid =req.query.newsid;

  connection.query("SELECT * FROM `news` WHERE `id` = ?",[newsid],function(err,rows){
  	res.json(rows);
  });
});

// 删除新闻
router.post('/delete', function(req,res) {
	var newsid =req.body.newsid;

  connection.query("DELETE FROM `news` WHERE `news`.`id` = ?",[newsid],function(err,result){
  	console.log(result.affectedRows);
  	res.json(result);
  });
});

// 提交新闻
router.post('/insert', function(req,res) {
	var newstype =req.body.newstype,
	    newstitle =req.body.newstitle,
	    newsimg = req.body.newsimg,
	    newstime =req.body.newstime,
	    newsfrom =req.body.newsfrom;
	    

  connection.query("INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newsfrom`) VALUES (?,?,?,?,?)",[newstitle,newstype,newsimg,newstime,newsfrom],function(err,result){
  	if (!err) {
  		console.log(result.insertId); 
  		res.json(result);
  	}
  });
});

module.exports = router;
