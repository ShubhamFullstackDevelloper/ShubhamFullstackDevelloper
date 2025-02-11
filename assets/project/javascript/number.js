// Function to check if the number is positive, negative, or zero
function checkNumber() {
    const numberInput = document.getElementById("number").value;
    const display = document.getElementById("display");
  
    const number = Number(numberInput);
  
    let result;
    if (isNaN(number) || numberInput.trim() === "") {
      result = "Please enter a valid number.";
    } else if (number > 0) {
      result = "The number is POSITIVE.";
    } else if (number < 0) {
      result = "The number is NEGATIVE.";
    } else {
      result = "The number is ZERO.";
    }
  
    display.innerHTML = result;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById("display").innerHTML = "";
    document.getElementById("number").value = "";
  }
  