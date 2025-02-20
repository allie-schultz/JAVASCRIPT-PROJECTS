// typeof assignment
document.write(typeof "The Tech Academy");

// type coercion assignment
document.write("<br>7" + 9);

// NaN challenge
function nan_challenge(){
    document.getElementById("nan").innerHTML = 0 / 0;
    document.getElementById("true").innerHTML = isNaN('Definetly not a number');
    document.getElementById("false").innerHTML = isNaN('2500');
}

// infinity assignment
function infinity(){
    document.getElementById("infinity").innerHTML = 2E310;
    document.getElementById("neg_infinity").innerHTML = -7E310;
}

// boolean assignment
document.write("<br>" + (27 > 23)); //true
document.write("<br>" + (27 < 23)); //false

// double equal assignment
document.write("<br>" + (27 == 23)) //false
document.write("<br>" + (27 == 27)); //true

// triple equal assignment
document.write("<br>" + (23 === 23)) //true
document.write("<br>" + ("hi" === 7)); //false
document.write("<br>" + ("13" === 13)); //false
document.write("<br>" + (27 === 23)); //false

// AND OR opperator assignment
document.write("<br>" + (5 > 2 && 7 > 3)); //true
document.write("<br>" + (5 > 2 && 7 < 3)); //false
document.write("<br>" + (5 > 2 || 7 < 3)); //true
document.write("<br>" + (4 > 5 || 8 < 7)); //fasle

//NOT opperator assignment
function not_opperand(){
    document.getElementById("not").innerHTML = ! (4 > 6); //true
    document.getElementById("neg_not").innerHTML = ! (6 > 4); //false
}

// calls the functions to display when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    nan_challenge();
    infinity();
    not_opperand();
});

// console.log assignment
console.log(13 + 6);

// boolean challenge
console.log(9 > 15);



