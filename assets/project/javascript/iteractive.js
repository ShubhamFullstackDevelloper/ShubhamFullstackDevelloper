function displayText() {
    let input = document.getElementById("input").value.trim();

    // Validate input
    if (input === "" || isNaN(input) || input <= 0) {
        document.getElementById("display").innerHTML = "Please enter a valid positive number.";
        return;
    }

    let num = Number(input);
    let output = "<strong>Multiplication Table of " + num + ":</strong><br>";

    for (let i = 1; i <= 10; i++) {
        output += `${num} × ${i} = ${num * i}<br>`;
    }

    document.getElementById("display").innerHTML = output;
}

function clearText() {
    document.getElementById("display").innerHTML = "Table will appear here";
    document.getElementById("input").value = "";
}
