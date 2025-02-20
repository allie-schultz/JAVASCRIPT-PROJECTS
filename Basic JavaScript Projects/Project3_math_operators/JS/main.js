// mathmatics assignment
var num1 = 10;
var num2 = 25;

function addition(){
   var sum = num1 + num2;
   document.getElementById("math").innerHTML = "10 + 25 = " + sum;
}

// subtraction assignment
function subtract(){
    var difference = 10 - 4;
    document.getElementById("sub").innerHTML = "10 - 4 = " + difference;
}

document.addEventListener('DOMContentLoaded', function() {
    subtract();
});

// multiplication assignment
function multiply(){
    var product = 5 * 3;
    document.getElementById("mult").innerHTML = "5 * 3 = " + product;
}
document.addEventListener('DOMContentLoaded', function() {
    multiply();
});

// division assignment 
function divide(){
    var quotient = 15 / 3;
    document.getElementById("div").innerHTML = "15 / 3 = " + quotient;
}
document.addEventListener('DOMContentLoaded', function() {
    divide();
});


