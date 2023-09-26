let emailElem = document.getElementById("email");
let usernameElem = document.getElementById("username");
let sub = document.getElementById("sub");

function validateEmail(emailValue) {
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(emailValue)) {
    document.getElementById("emailerror").textContent = "Enter a valid email address";
    return false;
  }
  document.getElementById("emailerror").textContent = "";
  return true;
}

function validateUsername(usernameValue) {
  let usernamePattern = /^[a-zA-Z0-9]+$/;
  if (!usernamePattern.test(usernameValue)) {
    document.getElementById("unameerror").textContent = "The username must contain only letters and numbers";
    return false;
  }
  document.getElementById("unameerror").textContent = "";
  return true;
}

sub.addEventListener("click", function(event) {
  event.preventDefault();

  let emailValue = emailElem.value;
  let usernameValue = usernameElem.value;
  
  if (validateEmail(emailValue) && validateUsername(usernameValue)) {
    window.location.href = "subbed.html";
  }
});

let btnReset = document.getElementById("btn");

btnReset.addEventListener("click", function(event) {
  event.preventDefault();
  emailElem.value = "";
  usernameElem.value = "";
  document.getElementById("emailerror").textContent = "";
  document.getElementById("unameerror").textContent = "";
});
