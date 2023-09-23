
//Get the input element for the amount
let amount = document.getElementById('amount');
//Get the button element for VAT calculation
let calculateVatButton = document.getElementById('calcbtn');

// Function to check if the input is valid
function isValidInput(input) {
  //Variable to track the presence of a decimal point in the input string
  let hasDecimalPoint = false;

  //Loop through each character of the input string
  for(let i = 0; i < input.length; i++) {
    let char = input[i];

//Check if the string has only one decimal point
    if(char === '.' && !hasDecimalPoint) {
      hasDecimalPoint = true;
      continue;
    }

//Check if the character is numeric

    if(!Number.isFinite(+char)) {
      return false; //Return false if the character isn't numeric
    }
  }
  return true; // Return true if all characters are valid
}

//Function to calculate VAT
function calculateVAT() {
  // let amountValue = +amount.value; 
  let amountValue = parseFloat(amount.value);//Convert the input value

//Check valid input
  if(!isValidInput(amount.value)) {
    alert("Put a number please.");//Input field message 
    amount.style.borderColor= 'red';// Style red board input
    return;//Exit function
  } else {
    amount.style.borderColor = "";//Reset style input field
  }
//Calculate VAT
  let vat22 = amountValue * 0.22;
  let vat = document.getElementById('vat');
  vat.value = vat22.toFixed(2);//Display VAT value with two decimal places 

  //Calculate the grand total
  let grandTotal = amountValue + vat22;
  let total = document.getElementById('total');
  total.value = grandTotal.toFixed(2);//Display the grand total with two decimal places

}
//Add an event listener for the VAT calculation button
calculateVatButton.addEventListener('click', calculateVAT);
//Get the reset button element
let resetButton = document.getElementById('reset');
//Add an event listener for the reset button
resetButton.addEventListener('click', resetValues);
//Function to reset the values
function resetValues() {
  //Get form element
  let amount = document.getElementById('amount');
  let vat = document.getElementById('vat');
  let total = document.getElementById('total');
//Clear the values of the form elements
  amount.value = "";
  vat.value = "";
  total.value = "";
}