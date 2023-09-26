let alphabet = "abcdefghijklmnopqrstuvwxyz";
let imageElem = document.getElementById("image");
let clickCounter = 0;
let genBtn = document.getElementById("genbtn");

genBtn.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 26) + 1;
    let randNumberOutput = document.getElementById("rand_num");
    randNumberOutput.textContent = randomNumber;

    let letter = alphabet[randomNumber - 1]; 
    let imageName = letter + ".png";
    let imagePath = "images/" + imageName;

    let imgTag = document.createElement("img");
    imgTag.src = imagePath;
    imgTag.alt = "Alphabet Letter";

    
    imageElem.appendChild(imgTag);

    clickCounter++;
    let counterOutput = document.getElementById("counter_output");
    counterOutput.textContent = clickCounter;

    let resultMessage = checkNumberValue(randomNumber);
    let greaterLessOutput = document.getElementById("greater_less");
    greaterLessOutput.textContent = resultMessage;
})

function checkNumberValue(number) {
    if (number < 13) {
        return "The number generated is less than 13";
    } else if (number === 13) {
        return "The number generated is equal to 13";
    } else {
        return "The number generated is greater than 13";
    }
}
