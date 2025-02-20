// dictionary assignment
function gameDictionary(){
    var game = {
        title:"Builders of Blankenburg",
        type: "Euro Style Board Game",
        complexity: "2.07 / 5",
        players: "2 - 5",
        playtime: "60 - 90",
        //also did dictioonary challenge with identical keys
        //the one written last in the sript is what showed
    };
    delete game.title; // delete assignment
    document.getElementById("Dictionary").innerHTML = game.title;
}
