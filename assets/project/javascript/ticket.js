function checkTicketPrice() {
    let input = document.getElementById("ageInput").value.trim();

    // Validate if input is empty or negative
    if (input === "" || isNaN(input) || input < 0) {
        document.getElementById("display").innerHTML = "Please enter a valid age.";
        return;
    }

    let age = Number(input);
    let output = (age < 17 || age > 70) ? "HALF TICKET" : "FULL TICKET";

    document.getElementById("display").innerHTML = output;
}

function clearDisplay() {
    document.getElementById("display").innerHTML = "Ticket Price will appear here";
    document.getElementById("ageInput").value = "";
}
