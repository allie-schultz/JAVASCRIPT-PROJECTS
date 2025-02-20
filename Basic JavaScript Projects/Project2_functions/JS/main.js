// first function assignment
function buttonText() {
    var text = "Why did you click it!!!"; // creates string variable
    document.getElementById("paragraph_text").innerHTML = text; // assigns variable value to HTML element with id "btn_text"
}

// concatenate with opperant assignment
function buttonText2(){
    var text2 = "Seriously? Again!?";
    text2 += " I said no buttons!"; // concatenate with opperand
    document.getElementById("paragraph_text").innerHTML = text2;
}

var num1 = 7;
var num2 = 8;
var product;
function multiply() {
    product = 7 * 8;
    document.getElementById("multiply").innerHTML = "The product of " + num1 + " and " + num2 + " is: " + product;;
}

multiply();