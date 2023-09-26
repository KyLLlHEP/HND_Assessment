let menuselectElm = document.getElementById("menuselect");

menuselectElm.addEventListener("change",function(){
  let selectDay = menuselectElm.value.toUpperCase();

  if (selectDay === "MONDAY") {
    document.getElementById("msgout").innerHTML = "Monday's child is fair of face";
  } else if (selectDay === "TUESDAY") {
    document.getElementById("msgout").innerHTML = "Tuesday's child is full of grace";
  } else if (selectDay === "WEDNESDAY") {
    document.getElementById("msgout").innerHTML = "Wndnesday's child is full pf woe";
  } else if (selectDay === "THURSDAY") {
    document.getElementById("msgout").innerHTML = "Thursday's child has far to go";
  } else if (selectDay === "FRIDAY") {
    document.getElementById("msgout").innerHTML = "Firday's child is loving and giving";
  }
});

let resetBtn = document.getElementById("rst");

resetBtn.addEventListener("click",function(){
  document.getElementById("msgout").innerHTML = "";
})

