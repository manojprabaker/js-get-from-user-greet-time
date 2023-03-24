



var b1=parseInt(prompt("enter the hours in 24 hr format"));
const f = new Date();
f.setHours(b1);
var b=f.getHours(b1);

if(b<12)
	 {  
     console.log("Hey Its Morning");  
    }  
 else if(12<=b&& b<17)
	 {  
      console.log("Hey Its Afternoon");  
    } 
else if (17<=b && b<20) 
	{  
     console.log("Hey Its Evening");  
    } 
	else
	{  
     console.log("Hey Its Night");  
    }
	document.write("<br>");
	document.write("<br>");
	
	


