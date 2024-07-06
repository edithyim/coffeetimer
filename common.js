
function get_nearest(in_no, mode){
	
	if ((in_no%mode)> (mode/2)) {
	
		out_no= (Math.floor( (in_no/mode) ) *mode) + Number(mode)
	}else{
		out_no= Math.floor( (in_no/mode) ) * mode
	} 
	return out_no
}



function sec_2_min(totalSeconds){
	minString= String("0" + Math.floor(totalSeconds/60)).slice(-2);  
	secString= String("0" + Math.floor(totalSeconds)%60).slice(-2);  
	
	output = minString+ ":" + secString
	return output
}




function DisplayClock(totalSeconds)
{
	clockBox = document.getElementById("showClock"); 
	clockBox.innerHTML = sec_2_min(totalSeconds) ;
	 
}
 

function hightlightTable(sectionId){
	var myTable = document.getElementById('myTablePlan'); 
	if(myTable) {
		Array.from(myTable.rows).forEach((td, rowIdx) => {
			Array.from(td.cells).forEach((cell, cellIdx) => {
				cell.style.backgroundColor = 'White';  
			});
		});
		  
		var x = myTable.rows[sectionId].cells
		for (let i =0; i< x.length ; i++){
			x[i].style.backgroundColor = 'yellow';  
		}
		
	}	
}
 

function checkStatus(totalSeconds){
	sectionId=1;
	for (let i=coffeeTable.length-1; i >= 1 ; i--){
	
		if (totalSeconds > coffeeTable[i-1][3]){
			sectionId= i+1;
			break;
		} 
	}
	if (totalSeconds >= coffeeTable[coffeeTable.length-1][3] ){
		Done=1; 
	}else{
		Done=0;
	}	 
	return [sectionId, Done]

}



function playAudio() {
        var audio = document.getElementById("audio");
        audio.play();
}
function stopAudio() {
        var audio = document.getElementById("audio");
        audio.pause();
		audio.currentTime = 0;
}	



function setTime() { 

    totalSeconds+=0.5;
	let [sectionId, Done] = checkStatus(totalSeconds)  
	if (sectionId != prevSection)
	{
		playAudio()
		prevSection=sectionId
	}
	 
	DisplayClock(totalSeconds)
	hightlightTable(sectionId)
	
	if (Done==1){
		clearInterval(my_int);  
		playAudio()
		var secMsgBox = document.getElementById('showClock'); 
		secMsgBox.innerHTML +=" DONE";
		
	} 
}
  
function ResetTimer(){
	totalSeconds=0
	prevSection=1
	clearInterval(my_int);	
	stopAudio()
	DisplayClock(totalSeconds)
	document.getElementById("playBtt").disabled = false;
	document.getElementById("pauseBtt").disabled = true;
	
}

function StartTimer()
{ 
	playAudio() 
	my_int = setInterval(function() {setTime()}, 500);
	document.getElementById("playBtt").disabled = true;
	document.getElementById("pauseBtt").disabled = false;
}

function PauseTimer()
{ 
	clearInterval(my_int);
	stopAudio()
	document.getElementById("playBtt").disabled = false;
	document.getElementById("pauseBtt").disabled = true;	
}
 
 
function updateWeight()
{ 
	if ( document.getElementById("weight1").checked == true ) {
		document.getElementById("weightFinal").value = 10
	}
	
	if ( document.getElementById("weight2").checked == true ) {
		document.getElementById("weightFinal").value = 15
	}

	if ( document.getElementById("weight3").checked == true ) {
		document.getElementById("weightFinal").value = 20
	}	
	
}
  

