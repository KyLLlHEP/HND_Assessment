let alphabet = "abcdefghijklmnopqrstuvwxyz";

let clickCounter = 0;
let genBtn = document.getElementById("genbtn");
let resetBtn = document.getElementById("reset");

genBtn.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 26) + 1;
    let randNumberOutput = document.getElementById("rand_num");
    let letter = alphabet[randomNumber - 1];
    randNumberOutput.textContent = randomNumber;

    clickCounter++;
    let counterOutput = document.getElementById("counter_output");
    counterOutput.textContent = clickCounter;

    let resultMessage = checkNumberValue(randomNumber);
    let greaterLessOutput = document.getElementById("greater_less");
    greaterLessOutput.textContent = resultMessage;

    let imageElement = document.createElement("img");
    imageElement.src = "images/" + letter + ".png";
    
    let imageContainer = document.getElementById("image");
    imageContainer.innerHTML = ""; 
    imageContainer.appendChild(imageElement);
});

function checkNumberValue(number) {
    if (number < 13) {
        return "The number generated is less than 13";
    } else if (number === 13) {
        return "The number generated is equal to 13";
    } else {
        return "The number generated is greater than 13";
    }
}

resetBtn.addEventListener("click", function() {
    clickCounter = 0;
    let counterOutput = document.getElementById("counter_output");
    let randNumberOutput = document.getElementById("rand_num");
    let greaterLessOutput = document.getElementById("greater_less");
    let imageContainer = document.getElementById("image");

    counterOutput.textContent = "";
    randNumberOutput.textContent = "";
    greaterLessOutput.textContent = "";
    imageContainer.innerHTML = ""; 
