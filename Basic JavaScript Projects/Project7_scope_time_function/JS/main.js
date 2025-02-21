// local and global variable assignment
var global = "I am a global variable"; //global

function display_global(){
    var local = "I am a local variable"; //local
    document.write(global);
}
function display_local(){
    document.write("<br>" + local); //doesn't display because "local" is
                                    //is a local variable in a different function
}
display_global();
display_local();

// date method assignment
function displayTime(){
    if (new Date().getHours() < 12) {
        document.getElementById("time").innerHTML = "Good Morning!";
    }
}

// if statement assignment
function likes_Cats(){
    var input_ans = document.getElementById("answer");
    if (input_ans.value.toLowerCase() === "no") {
            text = "Wrong answer, try again... :(";
    }
    // else statement assignment
    else{
        text = "Yay, cats are amazing! :)";
    }
    document.getElementById("response").innerHTML = text;
}

// else if assignment
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}