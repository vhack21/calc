let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "AC") {
      screen.value = "";
      screenValue = "";
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else if (buttonText == "C") {
      screenValue = screenValue.slice(0, -1);
      screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
