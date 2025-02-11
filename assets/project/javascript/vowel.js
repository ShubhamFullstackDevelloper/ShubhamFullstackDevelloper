function checkAlphabet() {
    let input = document.getElementById("demo").value.trim();

    if (input.length !== 1 || !input.match(/^[A-Za-z]$/)) {
        document.getElementById("display").innerHTML = "Please enter a single letter.";
        return;
    }

    let letter = input.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = vowels.includes(letter) ? "VOWEL" : "CONSONANT";

    document.getElementById("display").innerHTML = result;
}

function clearDisplay() {
    document.getElementById("display").innerHTML = "";
    document.getElementById("demo").value = "";
}
