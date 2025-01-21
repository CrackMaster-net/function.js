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
