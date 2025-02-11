// List of student names
const studentList = ["shubham", "ayush", "lucky", "yash", "priya", "shiwani", "pooja", "shardha"];

// Function to search student
function searchStudent(event) {
    event.preventDefault(); // Prevent form submission

    let searchValue = document.getElementById("search-bar").value.trim().toLowerCase();
    let displayBox = document.getElementById("display");

    if (searchValue === "") {
        displayBox.innerHTML = "Please enter a name!";
        displayBox.style.backgroundColor = "#ffdddd";
        return;
    }

    // Check if the name exists in the array
    if (studentList.includes(searchValue)) {
        displayBox.innerHTML = "Student is found";
        displayBox.style.backgroundColor = "#90EE90"; // Light green
    } else {
        displayBox.innerHTML = "Student is not found";
        displayBox.style.backgroundColor = "#FF6347"; // Tomato red
    }
}

// Event listener for form submission
document.getElementById("search-form").addEventListener("submit", searchStudent);
