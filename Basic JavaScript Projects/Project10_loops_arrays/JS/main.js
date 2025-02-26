// while loop assignment
function Call_Loop() {
    var yay = "yay"
    var Y = 1;
    var letter = "y";
    while (Y < 16) {
        yay += letter;
        Y++;
    }
    document.getElementById("Loop").innerHTML = yay;
}

// string length assignment
function getLength() {
    var string = document.getElementById("sentence").innerHTML;
    var len = string.length;
    document.getElementById("sentence").innerHTML = len;
}

// for loop assignment
var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

// array assignment
function array_function() {
    var coffee = ["Espresso", "Red Eye", "Black Eye", "Americano", "Macchiato", "Cortado", "Cappuccino",
        "Flat White", "Cafe Latte", "Mocha"];
        document.getElementById("array").innerHTML = coffee[Math.floor(Math.random() * coffee.length)];
}

// const assignment
function constant_function(){
    const person = {name:"Allie", gender:"female", age:"18"};
    person.name = "Alexandra";
    person.height = "5' 6\"";
    document.getElementById("constant").innerHTML = "The person's name was changed from Allie to " + person.name +
    " and her height of " + person.height + " was added to the const object.";
}

// let assignment
let band = "We Three";
document.write(band + " is a great band!");

// return assignment 
let a = multiply(7, 9);
document.write("<br>" + a);

function multiply(x, y){
    return x * y;
}

// object assignment
document.addEventListener('DOMContentLoaded', (event) => {
let pet = {
    type: "cat",
    label: "Mori",
    age: "1.5",
    intro : function() {
        return "I have a " + this.type + " named " + this.label +
        " who is " + this.age + " years old.";
    }
};
document.getElementById("pet_object").innerHTML = pet.intro();
});

// break and continue assignment
document.addEventListener('DOMContentLoaded', (event) => {
let word = "";
for (var i = 1; i < 15; i ++) {
    Y = "y"
    if (i === 4) {continue; }
    if (i === 11) {break; }
    word += "hey " + i + "<br>";
}
document.getElementById("greet").innerHTML = word;
});





