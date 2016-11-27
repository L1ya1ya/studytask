 
// function setOp(op)  
// {                               
//     document.getElementById("x").value = "";   
//     document.getElementById("y").value = "";      
//     // document.getElementById("op").value = op;  

// }  
function calc()  
{  
    var x  = parseFloat(document.getElementById("x").value);   
    var y  = parseFloat(document.getElementById("y").value);  
    var op = document.getElementById("op").value; 
    var z =  "";
    if(isNaN(x,y)){
        z="输入的值非数字，不可计算";
    }
    else{
        switch(op)  
        {  
            case '+':  
                z = (x + y).toFixed(5);  
                break;  
            case '-':  
                z =(x - y).toFixed(5);  
                break;  
            case '*': ;  
                z =(x * y).toFixed(5);  
                break;  
            case '/': ;  
                if (y==0) {
                    z="被除数不可为0";
                }
                else{
                    z =(x / y).toFixed(5);
                }
                  
                break;  
            case '%': ;  
                if (y==0) {
                    z="被除数不可为0";
                }
                else{
                    z =(x % y).toFixed(5);
                }
            break; 
            default:  
                z = '';  
        } 
    } 
    console.log(x, op, y, '=', z);  
    document.getElementById("z").innerText = z;  
}  
