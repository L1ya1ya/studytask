
window.onload = function() {
	// 数字
	var aNum = document.getElementsByClassName('num');
	// 操作符（+-*/%）
	var aPer = document.getElementsByClassName('oper');

	var oText = document.getElementById('text');
	var oPer = document.getElementById('per');
	var oText1 = document.getElementById('text1');
	var oDeng = document.getElementsByClassName('deng')[0];
	var oZheng = document.getElementsByClassName('zheng')[0];
	var oDao = document.getElementsByClassName('dao')[0];
	var oSq = document.getElementsByClassName('sq')[0];
	var oCos = document.getElementsByClassName('cos')[0];
	var oSin = document.getElementsByClassName('sin')[0];
	var oOn = document.getElementsByClassName('on')[0];
	var bOnClick = false;
	var flag = false;
	
	for (var i = 0; i < aNum.length; i++) {
			aNum[i].onclick = function() {

				// 完成一次计算后不影响下次输入
				if (flag) {
					oText.value ="";
					flag=false;
				}
				// 只有一个小数点
				if (oText.value.indexOf('.') != -1) {
					if (this.innerHTML == '.') {
						return;
					}
				}
				// 把第一个值给text1，清空text，输入第二个值
				if (oPer.value && oText.value && oText1.value == '') {
					oText1.value = oText.value;
					oText.value = '';
				}
				oText.value += this.innerHTML;		
			}

			//符号部分的添加
			for (var j = 0; j < aPer.length; j++) {
				aPer[j].onclick = function() {

					if (oText.value && oPer.value && oText1.value) {
						var n = eval(oText1.value + oPer.value + oText.value);
						oText.value = n;
						oText1.value = '';
					}
					oPer.value = this.innerHTML;
				}

			}
			//点击等号的时候
			oDeng.onclick = function() {
				//+-*/%的情况
				if (oText1.value == '' && oPer.value == '' && oText.value == '') {
					return;
				}
				
				var n = parseFloat(eval(oText1.value + oPer.value + oText.value).toFixed(8));
            	// 被除数和取余时对“0”的检验
				if(oPer.value =="/")
			        {
			            if(oText.value == 0)
			            {
			                n = "NaN";
			               
			            }
			        }
		        if(oPer.value =="%")
		        {
		            if(oText.value == 0)
		            {
		                n = "NaN";
		               
		            }
		        }
			    
            	oText.value = n;
				oText1.value = '';
				oPer.value = '';
            	bClear = true;
            	flag = true;

            	// 连续混合运算
				if (oPer.value && oText1.value == '') {
					oText1.value = oText.value;
					oText.value = '';
				}
	
			}
			//点击开根号的时候
			oSq.onclick = function() {
				var m = Math.sqrt(oText.value);
				oText.value = m;
			}
			//点击cos的时候
			oCos.onclick = function() {
				var a = parseFloat(Math.cos(oText.value*Math.PI/180).toFixed(8));
				oText.value = a;
			}
			//sin的时候
			oSin.onclick = function() {
				var a =  parseFloat(Math.sin(oText.value*Math.PI/180).toFixed(8));
				oText.value = a;
			}
			// 点击正负数的时候
			oZheng.onclick =function(){
				if (oText.value>0) {
					oText.value = -oText.value;
				}
				else{
					oText.value = -oText.value;
				}
			}
			// 点击倒数的时候
			oDao.onclick = function(){
				var a =1 / oText.value;
				if (oText.value=='0') {
					a ="正无穷"
				}
				oText.value = a;
			}
			// on时
			oOn.onclick = function() {
				bOnClick = true;
				oText.value = '';
				oText1.value = '';
				oPer.value = '';
				
			}
		}
	}
	


