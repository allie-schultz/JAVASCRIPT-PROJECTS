function validate(){
    let x = document.forms["form"]["name"].value;
    let y = document.forms["form"]["email"].value;
    let z = document.forms["form"]["email"].value;
    if(x == "") {
        alert("Please enter name.");
        return false
    }
    else if(y == ""){
        alert("Please provide an email.");
        return false;
    }
    else if(z == ""){
        alert("Please don't leave message blank.");
    }
    else {
        alert("Thank you for filling out the form");
    }
}