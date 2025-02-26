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

// getElementbyClass() assignment
function sentenceFunc(){
 var sent = document.getElementsByClassName("sentence");
 sent[1].innerHTML = "Now that the function has been called, the text has changed.";   
}

//calls draw() after DOM loaded so it properly displays
document.addEventListener("DOMContentLoaded", function() {
    draw();
});
// html canvas assignment
function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas && canvas.getContext) { //added null check on canvas.
      var ctx = canvas.getContext("2d");
      console.log(ctx);
  
      ctx.fillStyle = "rgb(217, 187, 17)";
  
      // bezier curve heart
      ctx.beginPath();
      ctx.moveTo(75, 40);
      ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
      ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
      ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
      ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
      ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
      ctx.bezierCurveTo(85, 25, 75, 37, 75, 40); // Corrected line
      ctx.fill();
    } 
    else {
      console.error("canvas not found or geContext not supported by your browset");
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
  // gradient color challenge
  const gradient = document.getElementById("gradient");
  const ctx = gradient.getContext("2d");

  // creates gradient
  const grd = ctx.createLinearGradient(0, 0, 0, 250);
  grd.addColorStop(0, "green");
  grd.addColorStop(1, "blue");

  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 250, 250);
  });

 

