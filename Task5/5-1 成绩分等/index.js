
function res()  
    {   
        var score  = document.getElementById("Score").value;
        var result;
        if (isNaN(score)) {
        	result="输入的值非数";
        }
        else{
        	if (score=="") {
        	result="输入为空";
        	}
        	else{
        		if (score.indexOf(" ") >=0) {
        			result="输入为空格";
        		}
        		else{
					switch(true){
					case score>100:
						result="超出100分";
						break;
					case score<=100 && score>=90:
						result="1等生"; 
					break;
					case score<90 && score>=80:
						result="2等生";
					break;
					case score<80 && score>=70:
						result="3等生";
					break;
					case score<70 && score>=60:
						result="4等生";
					break;
					case score<60 && score>=50:
						result="5等生";
					break;
					case score<50 && score>=0:
						result="成绩太差，劝退";
					break;
					case score<0:
						result="输入值不可为负数";
					break;
					default:
						result="输入的值有误";
					}
        		}
			
        	}
    	} 
		document.getElementById("result").innerHTML=result;
	}