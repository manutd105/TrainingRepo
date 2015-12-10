
function biggerNum() {
	var number1 = document.getElementById("num1").value;
	var number2 = document.getElementById("num2").value;
	var element3 = document.getElementById("num3");

	var message = "The Greater number of " + number1 + " and " + number2 + " is ";

	console.log(number1, number2);
	if (number1 > number2) {
        message = message + number1;       
        
    } else {
        message = message + number2;             
        
    }
    console.log(message); 
    element3.innerHTML = message;
}

//console.log(biggerNum(67,68));
//console.log(biggerNum(97,80));



