

var i = 0;

function countNumbers(){
	
    if(i < 5000){
        i = i + 10;
        postMessage("My Number Count is :: " + i);
    }
    // Wait for sometime before running this script again
    setTimeout("countNumbers()", 3000);
}

countNumbers();