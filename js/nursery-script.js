// Get the item of the drop-down menu by its ID
let menuselectElm = document.getElementById("menuselect");

// Add an event handler when the value of the dropdown menu changes
menuselectElm.addEventListener("change",function(){
  let selectDay = menuselectElm.value.toUpperCase();
// Get the selected value and convert it to upper case  

// Check which day has been selected and display the corresponding message
  if (selectDay === "MONDAY") {
    document.getElementById("msgout").innerHTML = "Monday's child is fair of face";
  } else if (selectDay === "TUESDAY") {
    document.getElementById("msgout").innerHTML = "Tuesday's child is full of grace";
  } else if (selectDay === "WEDNESDAY") {
    document.getElementById("msgout").innerHTML = "Wndnesday's child is full of woe";
  } else if (selectDay === "THURSDAY") {
    document.getElementById("msgout").innerHTML = "Thursday's child has far to go";
  } else if (selectDay === "FRIDAY") {
    document.getElementById("msgout").innerHTML = "Friday's child is loving and giving";
  }
});

// Get RESET button element by its ID
let resetBtn = document.getElementById("rst");

// Add an event handler for the RESET button to clear the output on the page
resetBtn.addEventListener("click",function(){
  document.getElementById("msgout").innerHTML = "";
})

