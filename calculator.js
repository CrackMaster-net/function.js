function addition() { // start creating a function
    var x, y, z; // declare variables
    var x = Number(document.getElementById("number1").value); // get the value of the first input field
    var y = Number(document.getElementById("number2").value); // get the value of the second input field
    var z = x + y; // add the two number together
    document.getElementById("result").innerHTML = z; // display the result
}

function subtraction() {
    var x, y, z;
    var x = Number(document.getElementById("number1").value);
    var y = Number(document.getElementById("number2").value);
    var z = x - y;
    document.getElementById("result").innerHTML = z;
}

function multiplication() {
    var x, y, z;
    var x = Number(document.getElementById("number1").value);
    var y = Number(document.getElementById("number2").value);
    var z = x * y;
    document.getElementById("result").innerHTML = z;
}

function division() {
    var x, y, z;
    var x = Number(document.getElementById("number1").value);
    var y = Number(document.getElementById("number2").value);
    var z = x / y;
    document.getElementById("result").innerHTML = z;
}



//This JavaScript has a "if-else" condition
// calling a function
function addition() { //start creating a function
   var x = Number(document.getElementById("number1").value); // get the first number of the first input
   var y = Number(document.getElementById("number2").value); // get the first number of the first input
   var z = x + y; // adding the two input
   document.getElementById("resultInAddition").value = z; // display the result 
}
function subtraction() {
	var x = Number(document.getElementById("number1").value);
	var y = Number(document.getElementById("number2").value);
	var z = x - y;
	document.getElementById("resultInSubtraction").value = z;
}
function multiplication() {
	var x = Number(document.getElementById("number1").value);
	var y = Number(document.getElementById("number2").value);
	var z = x * y;
	document.getElementById("resultInMultiplication").value = z;
}
function division() {
	var x = Number(document.getElementById("number1").value);
	var y = Number(document.getElementById("number2").value);
	if (y === 0) {
		document.getElementById("resultInDivision").value = "SyntaxError";
	}
	else {
		z = (x / y).toFIxed(); //limiting the decimal point (1- 20)
		document.getElementById("resultInDivision").value = z;
	}	
}
