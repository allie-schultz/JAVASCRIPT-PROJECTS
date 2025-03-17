//NUMBER FACT
function getNumberFact() {
    fetch('http://numbersapi.com/random/trivia')
    .then(response => response.text())
    .then(fact => {
        document.getElementById('factDisplay').textContent = fact;
    })
    .catch(error => {
        document.getElementById('factDisplay').textContent = "Error fetching fact.";
    });
}

//CAT FACT
function getCatFact() {
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
        document.getElementById('catFact').textContent = data.fact;
    })
    .catch(error => {
        document.getElementById('catFact').textContent = "Error fetching fact.";
    });
}

//MINION API
function getTranslation() {
    var input = document.getElementById('input').value.trim();

    let encodedInput = encodeURIComponent(input);

    fetch(`https://api.funtranslations.com/translate/minion.json?text=${encodedInput}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('translate').textContent = data.contents?.translated;
    })
    .catch(error => {
        document.getElementById('translate').textContent = "Error translating.";
    });
}

//DOG PIC
function getDogPic() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        var image = document.getElementById('dogPic');
        if (image) {
            image.src = data.message;
        }
    })
    .catch(error => {
        document.getElementById('dogPic').textContent = "Error fetching dog picture.";
    });
}