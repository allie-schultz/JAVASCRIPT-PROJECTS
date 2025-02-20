// ternary assignment
function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// ternary operators assignment
function vote(){
    var age, can_vote;
    var ageInput = document.getElementById("age"); //retrieves input
    age = Number(ageInput.value); //turns from string to number
    can_vote = (age < 18) ? "Sorry you are not eligable to vote in the United States":"Congatulations! You may vote in this election!";
    document.getElementById("vote_age").innerHTML = can_vote;
}

// argument assignment
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// new keyword assignment
var Allie = new Vehicle("Ford", "Focus", 2001, "White");
function newFunction(){
    document.getElementById("New_and_This").innerHTML =
    "Allie's car is a " + Allie.Vehicle_Year + " " + Allie.Vehicle_Make + 
    " " + Allie.Vehicle_Model + " in the color white."
}

// reserved keyword challenge
//tried and caused error that ruins page

//constructor challenge
class FordCars {
    constructor(car) {
    this.make = "Ford";
    this.model = car;
    }
}
var Person = new FordCars("Mustang");
document.write("I want a " + Person.make + " " + Person.model);

// nested functions assignment
function yay() {
    document.getElementById("Nested_Functions").innerHTML = add_y();
    function add_y() {
        var exclaimation = "Yay";
        function happy() {exclaimation += "y";}
        happy();
        return exclaimation;
    }
}

