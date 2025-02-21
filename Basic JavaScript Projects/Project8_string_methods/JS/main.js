// concat() method assignment
function join(){
   var fragment1 = "A fragment cannot ";
   var fragment2 = "stand alone "
   var fragment3 = "becasue it isn't ";
   var fragment4 = "a complete sentence ";
   var sentence = fragment1.concat(fragment2, fragment3, fragment4);
   document.getElementById("full_sentence").innerHTML = sentence;
}

// slice() method assignment
function slice_Function(){
    var sentence = "Hello there.";
    var section = sentence.slice(6, 11);
    document.getElementById("slice").innerHTML = section
}

// more methods challenge
function find_waldo(){
    var waldo = document.getElementById("search").innerHTML;
    var find = waldo.toUpperCase().search("WALDO");
    document.getElementById("search").innerHTML = "Waldo is in character space " + find + " of the sentence.";
}

// number methods assignment
function makeString() {
    var num = document.getElementById("number").value.toString();
    var text = document.getElementById("message").innerHTML = "Your number " + num + " is now stored as a string.";
}

// toPrecision() method assignment
function round() {
    var digits = 123.456789;
    var rounded = digits.toPrecision(5);
    document.getElementById("precision").innerHTML = rounded.toString();
}

// new methods challenge
function new_methods(){
    var x = 3.14159;
    var y = x.valueOf();
    document.write(y.toFixed(2));
}
new_methods(); //calls above function