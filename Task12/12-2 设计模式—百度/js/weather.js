$(function(){

	// app key of api
	var appKey = "2a400e201d8c495bf5b14bd745868ff3";

	// function that retrieve weather data and set in page
	var setWeather = function(data){
		$("#city").text(data.result.data.realtime.city_name);
		$("#temperature").text(data.result.data.realtime.weather.temperature + "℃");
		$("#air-condition").text(data.result.data.pm25.pm25.quality)
		$("#pm25").text(data.result.data.pm25.pm25.pm25);

		var $icon = $("#icon");
		switch(data.result.data.realtime.weather.info){
			case "晴":
				$icon.addClass("sunny");
				break;
			case "多云":
				$icon.addClass("cloudy");
				break;
			case "雨":
				$icon.addClass("raining");
				break;
			case "阵雨":
				$icon.addClass("raining");
				break;
			case "大雨":
				$icon.addClass("raining");
				break;
			case "暴雨":
				$icon.addClass("raining");
				break;
			case "中雨":
				$icon.addClass("raining");
				break;
			case "雪":
				$icon.addClass("snowing");
				break;
			case "阴":
				$icon.addClass("overcast");
				break;
			default:
				break;
		}
	};

	//ajax request
	$.ajax({
		url:"http://op.juhe.cn/onebox/weather/query",
		data:{
			cityname:"深圳",
			dtype:"json",
			key:appKey
		},
		dataType:'jsonp',
		success:function(data){
			setWeather(data);
		}
	});
});