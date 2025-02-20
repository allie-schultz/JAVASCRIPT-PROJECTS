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

// multiple opperation assignment
function multiple_opperations(){
    var answer = (25 + 10) / (5 * (7 - 3));
    document.getElementById("opperations").innerHTML = "25 plus 10, divided by the product of the number 5 multiplied by the difference of 7 and 3, is equal to " + answer;
}
document.addEventListener('DOMContentLoaded', function() {
    multiple_opperations();
});

// modulus opperator assignment
function modulus(){
    var remainder = 30 % 9;
    document.getElementById("remain").innerHTML = "When you divide 30 by 9, you are left with a remainder of: " + remainder;
}
document.addEventListener('DOMContentLoaded', function() {
    modulus();
});

// negation opperator assignment
function negate(){
    var num = 27;
    document.getElementById("neg").innerHTML = -num;
}
document.addEventListener('DOMContentLoaded', function() {
    negate();
});

// increment opperator assignment
function increment(){
    var x = 13
    x++;
    document.getElementById("increase").innerHTML = x;
}
document.addEventListener('DOMContentLoaded', function() {
    increment();
});

// decrement opperator assignment
function decrement(){
    var x = 13
    x--;
    document.getElementById("decrease").innerHTML = x;
}
document.addEventListener('DOMContentLoaded', function() {
    decrement();
});

// random number assignment
var rand_num = (Math.random() * 50)
document.getElementById("random").innerHTML = Math.trunc(rand_num);

// rmath object achallenge
var square_rt = (Math.sqrt(49))
document.getElementById("sqr").innerHTML = square_rt;



