let emailElem = document.getElementById("email");
let emailValue = emailElem.value; 

let usernameElem = document.getElementById("username");
let usernameValue = usernameElem.value; 

let sub = document.getElementById("sub");

function validateEmail(emailValue) {
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(emailValue)) {
    document.getElementById("unameerror").textContent = "Enter a valid email address";
    return false;
  } else {
    getElementById("unameerror").textContent = "";
    return true;
  }
}

function validateUsername(usernameValue) {
  let usernamePattern = /^[a-zA-Z0-9]+$/;
  if (!usernamePattern.test(usernameValue)) {
    document.getElementById("unameerror").textContent = "The username must contain only letters and numbers";
    return false;
  } else {
    document.getElementById("unameerror").textContent = "";
    return true;
  }
}


