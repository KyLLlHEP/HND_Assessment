// To make the code more readable and easy to maintain, the main logic was split into several functions.
//   Dividing the code into small functions makes it easy to track each validation step and simplifies possible future revisions.
//   Each function performs its own specific task, which avoids code duplication and makes it easier to understand.



let emailElem = document.getElementById("email");
let usernameElem = document.getElementById("username");
let sub = document.getElementById("sub");

//Email format validation
function validateEmail(emailValue) {
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(emailValue)) {
    document.getElementById("emailerror").textContent = "Enter a valid email address";
    return false;
  }
  document.getElementById("emailerror").textContent = "";
  return true;
}

// User name validation (only letters and numbers are allowed)
function validateUsername(usernameValue) {
  let usernamePattern = /^[a-zA-Z0-9]+$/;
  if (!usernamePattern.test(usernameValue)) {
    document.getElementById("unameerror").textContent = "The username must contain only letters and numbers";
    return false;
  }
  document.getElementById("unameerror").textContent = "";
  return true;
}



// Event handler of the event of pressing the "Subscribe" button
sub.addEventListener("click", function(event) {
  event.preventDefault();

  let emailValue = emailElem.value;
  let usernameValue = usernameElem.value;
  
   // If both fields pass validation, redirect the user to the subbed.html page
  if (validateEmail(emailValue) && validateUsername(usernameValue)) {
    window.location.href = "subbed.html";
  }
});

let btnReset = document.getElementById("btn");

// Event handler of the event of pressing the "Reset" button
btnReset.addEventListener("click", function(event) {
  event.preventDefault();
  emailElem.value = "";
  usernameElem.value = "";
  document.getElementById("emailerror").textContent = "";
  document.getElementById("unameerror").textContent = "";
});
