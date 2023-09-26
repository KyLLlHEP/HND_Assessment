// Create a string representing the alphabet
let alphabet = "abcdefghijklmnopqrstuvwxyz";

// Initialise the variable for counting the number of clicks
let clickCounter = 0;

// Get button elements from DOM
let genBtn = document.getElementById("genbtn");
let resetBtn = document.getElementById("reset");


// Add a click event handler for the generation button
genBtn.addEventListener("click", function() {
  // Generate a random number from 1 to 26
    let randomNumber = Math.floor(Math.random() * 26) + 1;

  // Get the element to output the generated number and set its value  
    let randNumberOutput = document.getElementById("rand_num");
    let letter = alphabet[randomNumber - 1];
    randNumberOutput.textContent = randomNumber;

  // Increase the click count and update the value on the page
    clickCounter++;
    let counterOutput = document.getElementById("counter_output");
    counterOutput.textContent = clickCounter;

  // Check the value of the generated number and return the corresponding message  
    let resultMessage = checkNumberValue(randomNumber);
    let greaterLessOutput = document.getElementById("greater_less");
    greaterLessOutput.textContent = resultMessage;

  // Create a new image element and set its source  
    let imageElement = document.createElement("img");
    imageElement.src = "images/" + letter + ".png";
  
  // Clear the image container and add a new image  
    let imageContainer = document.getElementById("image");
    imageContainer.innerHTML = ""; 
    imageContainer.appendChild(imageElement);
});


// Function to check the value of the generated number and return the corresponding message
function checkNumberValue(number) {
    if (number < 13) {
        return "The number generated is less than 13";
    } else if (number === 13) {
        return "The number generated is equal to 13";
    } else {
        return "The number generated is greater than 13";
    }
}

// Add event handler for the reset button
resetBtn.addEventListener("click", function() {
  // Reset the click counter to zero and clear the corresponding fields on the page
    clickCounter = 0;
    let counterOutput = document.getElementById("counter_output");
    let randNumberOutput = document.getElementById("rand_num");
    let greaterLessOutput = document.getElementById("greater_less");
    let imageContainer = document.getElementById("image");

    counterOutput.textContent = "";
    randNumberOutput.textContent = "";
    greaterLessOutput.textContent = "";
    imageContainer.innerHTML = ""; 
});
