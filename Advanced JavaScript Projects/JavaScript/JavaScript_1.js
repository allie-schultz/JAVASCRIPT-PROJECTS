// switch statement assignment
function candy_function() {
    var candy_choice ;
    var candy = document.getElementById("candy_input").value;
    var response = "...always a tasty choice.";
    switch(candy) {
        case "Snickers":
            candy_choice = "Snickers" + response;
        break;
        case "Reese's":
            candy_choice = "Reese's" + response;
        break;
        case "Twix":
            candy_choice = "Twix" + response;
        break;
        case "Butterfinger":
            candy_choice = "Butterfinger" + response;
        break;
        case "Kit Kat":
            candy_choice = "Kit Kat" + response;
        break;
        default:
            candy_choice = "Please enter a cnady exactly as shown in the list.";
    }
    document.getElementById("output").innerHTML = candy_choice;
}
