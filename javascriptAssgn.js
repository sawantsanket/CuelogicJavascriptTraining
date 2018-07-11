// Date Manipulation ===================>
function printDate(){
	var tDate = new Date();
	console.log(tDate.getDate());

	var tDay = tDate.getDay();
	var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
	console.log("Today is: "+ dayList[tDay]);

	var tFormat = (tDate.getHours()>12)?"PM":"AM";
	var tTime = tDate.getHours() +":"+tDate.getMinutes()+":"+tDate.getSeconds()+" "+tFormat;
	console.log("Time is: " +tTime);

	var today = new Date();
	var dd = today.getDate();

	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();
	if(dd<10) 
	{
		dd='0'+dd;
	} 

	if(mm<10) 
	{
		mm='0'+mm;
	} 
	today = mm+'-'+dd+'-'+yyyy;
	console.log(today);
	today = mm+'/'+dd+'/'+yyyy;
	console.log(today);
	today = dd+'-'+mm+'-'+yyyy;
	console.log(today);


	document.getElementById("timeOutput").innerHTML = "Today is: "+ dayList[tDay] +"</br>"+"Time is: " +tTime +"</br>"+today
}
//printing current page ======================>

function printCurrentPage(){
  window.print();
}


// Rotate the string 'w3resource' in right direction by periodically 
// removing one letter from the end of the string and attaching it to the front.===================>

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

	setInterval(function () 
	{
	 text = text[text.length - 1] + text.substring(0, text.length - 1);
	  textNode.data = text;
	}, 500);
}

function isLeapYear(){
	var year = prompt("Enter the year");
	
	if(((year%4===0)&&(year%100!==0)) || (year%400===0))
	{
		alert("It is leap year");
	}
	else{
		alert("Not a leap year");
	}
}

function getYearForFirstJanSunday(){
	var date = 2014;
	var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
	var result = ""
	
	for (var i=date;i<=2050;i++)
	{
		var loopDate = new Date("01 January "+i);
		var loopDay = loopDate.getDay();
		
		if(dayList[loopDay] === "Sunday")
		{
			result += dayList[loopDay] +" " +i + " ";
		}	
	}
	
	alert(result);
}

function guessNumber(){
	var userInput = prompt("Enter number between 1 to 10");
	var rndNum = console.log(Math.ceil(Math.random()*10))

	if(userInput === rndNum)
		alert("Good work!");
	else
		alert("Try another number")
}



