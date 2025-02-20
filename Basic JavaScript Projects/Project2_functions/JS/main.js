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