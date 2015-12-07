var getDay = function(dayofweek) {

if (daylist[dayofweek] < 0 && daylist[dayofweek] > 6 )
  {
    alert("Not Able to process the Day");
   }
else{
  console.log("Success");
}
    return daylist[dayofweek];
};

var daylist = ['Sunday',' Monday', 'Tuesday',' Wednesday ','Thursday', 'Friday', 'Saturday' ];

var d = new Date();

var dayofweek= d.getDay();
var myHrs = d.getHours();
var myMins = d.getMinutes();
var mySecs= d.getSeconds();
var setFlag= 'Default';
var myDay = getDay(dayofweek);


var time = function(myHrs){
  var that =this;
  var i=myHrs; 
  var result=0; 
  
  if(myHrs >= 24)
{
   throw "invalid time";
}  

if (i === 0) {
    
    myHrs = myHrs +12;
   
    
}




 if (myHrs >= 12 && myHrs < 24 ){  

 do{
    
   if(myHrs === 12 ) {
       result = 12;
       setFlag= 'am';
   }
  
   else{
       result= myHrs-12 ;
       setFlag = 'pm';
   }
 
 break;
 }  
while(i >= 13); 
 
     
 }


if(myHrs>=1 && myHrs < 12){
    
    result = myHrs;
    setFlag = 'am';
}


 return result;
}

 var ActualHrs=time(myHrs);


document.getElementById('mySpan1').innerHTML = 'Today is :&nbsp' +myDay;

document.getElementById('mySpan2').innerHTML = ' '+ActualHrs +' '+setFlag +'  : ' +myMins +' : '+mySecs  ;



