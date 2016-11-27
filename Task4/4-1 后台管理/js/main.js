;$(function() {

	'use strict';


	var sideBar = $('#sideBar'), 
		menu = $('#menu');


	function hideSideBar()
	{
		sideBar.css('left',-210px);
	}

	function showSideBar()
	{
		sideBar.css('left', sideBar.width());
	}

	menu.on('click', hideSideBar)
	
})