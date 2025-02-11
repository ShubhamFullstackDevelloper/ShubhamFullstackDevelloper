let displayValue = "";
let firstOperand = null;
let operator = null;

function appendNumber(num) {
    displayValue += num;
    updateDisplay();
}

function appendLetter(letter) {
    displayValue += letter;
    updateDisplay();
}

function setOperator(op) {
    if (displayValue === "") return;
    firstOperand = parseFloat(displayValue);
    operator = op;
    displayValue = "";
    updateDisplay();
}

function calculate() {
    if (firstOperand === null || displayValue === "") return;
    
    let secondOperand = parseFloat(displayValue);
    let result;

    switch (operator) {
        case "+": result = firstOperand + secondOperand; break;
        case "-": result = firstOperand - secondOperand; break;
        case "*": result = firstOperand * secondOperand; break;
        case "/": result = secondOperand !== 0 ? firstOperand / secondOperand : "Error"; break;
        default: return;
    }

    displayValue = result.toString();
    firstOperand = null;
    operator = null;
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").innerText = displayValue || "0";
}

// Initialize display
updateDisplay();
