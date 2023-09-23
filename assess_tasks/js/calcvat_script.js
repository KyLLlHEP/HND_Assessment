
let amount = document.getElementById('amount');
let calculateVatButton = document.getElementById('calcbtn');


function isValidInput(input) {
  let hasDecimalPoint = false;

  for(let i = 0; i < input.length; i++) {
    let char = input[i];

    if(char === '.' && !hasDecimalPoint) {
      hasDecimalPoint = true;
      continue;
    }
    if(!Number.isFinite(+char)) {
      return false;
    }
  }
  return true;
}

function calculateVAT() {
  // let amountValue = +amount.value; 
  let amountValue = parseFloat(amount.value);

  if(!isValidInput(amount.value)) {
    alert("Put a number please.");
    amount.style.borderColor= 'red';
    return;
  } else {
    amount.style.borderColor = "";
  }

  let vat22 = amountValue * 0.22;
  let vat = document.getElementById('vat');
  vat.value = vat22.toFixed(2);

  let grandTotal = amountValue + vat22;
  let total = document.getElementById('total');
  total.value = grandTotal.toFixed(2);

}

calculateVatButton.addEventListener('click', calculateVAT);

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetValues);

function resetValues() {
  let amount = document.getElementById('amount');
  let vat = document.getElementById('vat');
  let total = document.getElementById('total');

  amount.value = "";
  vat.value = "";
  total.value = "";
}