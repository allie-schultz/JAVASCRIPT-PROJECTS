// keeps track of turns
let activePlayer = 'X';
// stores array of moves to determine win conditions
let selectedSquares = [];

// function to place x or o
function placeXOrO(squareNumber) {
    //condition ensures square hasn't been selected
    //.some() method used to check each element of selectSquare array
    //checks if it contains square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //returns id that was clicked
        let select = document.getElementById(squareNumber);
        //checks who's turn it is
        if (activePlayer === 'X') {
            //if active player is equal to 'X', x.png is placed
            select.style.backgroundImage = 'url("images/fish-o.jpg")';
            select.style.backgroundSize = '190px 190px';
            select.style.backgroundRepeat = 'no-repeat';
            //active player can only be x or o, so if not x, then must be o
        } else {
            //if activePlayer equal to 'O', o.png is placed
            select.style.backgroundImage = 'url("images/x-cat.jpg")';
            select.style.backgroundSize = '190px 190px';
            select.style.backgroundRepeat = 'no-repeat';
        }
        //sqaureNumber and activePlayer are concatenated and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //calls a function to check for win conditions
        checkWinConditions();
        //changing active player
        if (activePlayer === 'X') {
            //if active player is x then change to o
            activePlayer = 'O';
            //if active player is not x
        } else {
            //change active player to x
            activePlayer = 'X';
        }

        //This function plays placement sound
        audio('./media/set.mp3');
        //checks to see if computer's turn
        if (activePlayer === 'O') {
            //disables clicking for computer turn
            disableClick();
            //waits one sec before computer places img and enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //returning true is needed for computersTurn() function to work
        return true;
    }
    //random square selected by computer
    function computersTurn() {
        //boolean needed for white loop
        let success = false
        //variable stores random num between 0-8
        let pickASquare;
        //allows while loop to keep trying if a aquare is already selected
        while(!success) {
            //random number between 0-8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if number returns true, square hasn't been selected
            if (placeXOrO(pickASquare)) {
                //calls function
                placeXOrO(pickASquare);
                //changes boolean and ends loop
                success = true;
            };
        }
    }
}

//parses selectedSquares array to search for win conditions
//drawline() draws line on screen if condition is met
function checkWinConditions() {
    // X 0, 1 ,2 condition 
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 588, 100) }
    //X 3, 4, 5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304)}
     //X 6, 7, 8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508)}
    //X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558)}
    //X 1, 4, 7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558)}
    //X 2, 5, 8 condition 
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558)}
    //X 6, 4, 2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90)}
    //X 0, 4, 8 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520)}
    // O 0, 1 ,2 condition 
    if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 588, 100) }
    //O 3, 4, 5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304)}
     //O 6, 7, 8 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508)}
    //O 0, 3, 6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558)}
    //O 1, 4, 7 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558)}
    //O 2, 5, 8 condition 
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558)}
    //O 6, 4, 2 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90)}
    //O 0, 4, 8 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520)}

    console.log("selectedSquares:", selectedSquares);

    //Checks for a tie - if no conditions are met and 9 squares are selected 
   if (selectedSquares.length >= 9) {
        //plays tie game sound
        audio('./media/tieGame.mp3');
        //sets a .3 sec timer before resetGame is called
        setTimeout(function () { resetGame(); }, 500);
    }
    //checks if array includes 3 strings - used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //3 variables to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //returns true if all 3 variables passed in array return true
        //and else if executes drawLine() function
        if (a === true && b === true && c === true) { return true; }
    }
}

//makes body element temporarily unclickable
function disableClick() {
    //makes body unclickable
    body.style.pointerEvents = 'none';
    //makes unclickable again for 1 sec
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//takes a tring parameter of the path set earler for the placement sound mp3
function audio(audioURL) {
    //creates a new audio object and passes the path as a parameter
    let audio = new Audio(audioURL);
    //plays audio sound
    audio.play();
}

//utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //accesses our HTML canvas element
    const canvas = document.getElementById('win-lines');
    //gives access to methods and properties tp use on canvas
    const c = canvas.getContext('2d');
    //indicates where start of a lines x axis is
    let x1 = coordX1,
        //indicates where start of a lines y axis is
        y1 = coordY1,
        //indicates where end of a lines x axis is
        x2 = coordX2,
        //indicates where the end of a lines y axis is
        y2 = coordY2,
        //variable stores temp x axis data updated in animation loop
        x = x1,
        //variable stores temp y axis data we update in animation loop
        y = y1;
    //interacts with the canvas
    function animateLineDrawing() {
        //creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //clears content from last loop iteration
        c.clearRect(0, 0, 608, 608);
        //starts new path
        c.beginPath();
        //moves to starting point in line
        c.moveTo(x1, y1);
        //indicates end point in line
        c.lineTo(x, y);
        //sets line width
        c.lineWidth = 10;
        //sets line color
        c.strokeStyle = 'rgba(148, 33, 255, 0.8)';
        //draws line
        c.stroke();
        //check to reach endpoints
        if (x1 <= x2 && y1 <= y2) {
            //adds 10 to previous x endpoint
            if (x < x2) { x += 10; }
            //adds 10 to previous y endpoint
            if (y < y2) { y += 10; }
            //similar to above - needed for the 6, 4, 2 win condition
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //similar to above - needed for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
        console.log("x:", x, "y:", y, "x2:", x2, "y2:", y2);
    }
    //clears canvas after win line is drawn
    function clear() {
        //starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        //clears canvas
        c.clearRect(0, 0, 608, 608);
        //stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    //disallows clicking when win sounds is playing
    disableClick();
    //plays win sound
    audio('./media/win.mp3');
    //calls main animation loop
    animateLineDrawing();
    //waits 1 sec, then clears canvas, resets game, and allows clicking
    setTimeout(function () { clear(); resetGame(); }, 1000);
        
}

//resets games after tie or win
function resetGame() {
    //iterates through each html square element
    for (let i = 0; i < 9; i++) {
        //gets html element i
        let square = document.getElementById(String(i));
        //removes element backgroundImage
        square.style.backgroundImage = '';
    }
    //resets array to empty to start game over
    selectedSquares = [];
}

