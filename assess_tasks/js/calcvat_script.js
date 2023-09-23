
let amount = document.getElementById('amount');
let calculateVatButton = document.getElementById('calcbtn');

function calculateVAT() {
  // let amountValue = +amount.value; 
  let amountValue = parseFloat(amount.value);

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