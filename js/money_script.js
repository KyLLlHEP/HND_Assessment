// Get DOM elements
let currencyElem = document.getElementById("currency");

let calculateBtn = document.getElementById("currencybtn");

let showResult50 = document.getElementById("output50");
let showResult20 = document.getElementById("output20");
let showResult10 = document.getElementById("output10");

// Function for calculating the number of coins of different denominations from a given amount in pence
function calculateCoins(pence) {
  let coins50 = Math.floor(pence / 50);// Number of 50p coins
  // Update the amount by reducing it by the number of 50p coins already calculated
  
  let coins20 = Math.floor(pence / 20);// Number of 20p coins
 // Update the amount by reducing it by the number of 20p coins already calculated
  
  let coins10 = Math.floor(pence / 10);// Number of 10p coins
 // Update the amount by reducing it by the number of 10p coins already calculated
  
  
  return {
      coins50: coins50,
      coins20: coins20,
      coins10: coins10
  };
}

// Click event handler for the calculateBtn button
calculateBtn.addEventListener("click", function() {
  // Convert the value from the input field to a number and convert this amount to pence
    let totalPounds = parseFloat(currencyElem.value);
    let totalPence = totalPounds * 100;
  // Call the calculateCoins function to get the number of coins
  let results = calculateCoins(totalPence);
  
  // Display results on the page
    showResult50.textContent = `There are ${results.coins50} fifty pence pieces in £${totalPounds}`;
    showResult20.textContent = `There are ${results.coins20} twenty pence pieces in £${totalPounds}`;
    showResult10.textContent = `There are ${results.coins10} ten pence pieces in £${totalPounds}`;
})
