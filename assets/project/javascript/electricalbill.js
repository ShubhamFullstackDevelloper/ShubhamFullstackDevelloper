function calculateBill() {
    // Input
    let units = parseInt(document.getElementById('units').value);

    let bill = 0;

    // Conditions for bill calculation
    if (units <= 50) {
        bill = units * 0.5;
    } else if (units <= 150) {
        bill = 50 * 0.5 + (units - 50) * 0.75;
    } else if (units <= 250) {
        bill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.25;
    } else {
        bill = 50 * 0.5 + 100 * 0.75 + 100 * 1.25 + (units - 250) * 2.0;
    }

    if (bill > 251) {
        bill += bill * 0.2; // Adding 20% surcharge
    }

    // Output
    document.getElementById("result").innerText = "Total Bill: ₹ " + bill.toFixed(2);
}
