//For Loop
var output = "";
var j;
for (j = 2; j < 12; j++) {
output += "The number is " + j + "<br>";
//output += "The number is " + j *2 + "<br>";
}
document.getElementById("forloop").innerHTML = output;

//While Loop
var output = "";
var j = 0;
while (j < 11) {
output += "<br>The number is " + j;
//output += "<br>The number is " + j *2;
j++
}
document.getElementById("whileloop").innerHTML = output;

//Do-While Loop
var output = "";
var j = 0;
do {
output += "<br>The number is " + j;
//output += "<br>The number is " + j *2;
j++
}
while (j < 11)
document.getElementById("dowhileloop").innerHTML = output
