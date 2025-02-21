// script.js
const quizArea = document.getElementById('quiz-area');
const submitBtn = document.getElementById('submit-btn');
const resultArea = document.getElementById('result-area');
const finalScore = document.getElementById('final-score');

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the highest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        answer: "Mount Everest"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        answer: "Mars"
    }
    // Add more questions here...
];

let score = 0;
let currentQuestion = 0;

function displayQuestion() {
    const questionData = questions[currentQuestion];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<h2>${questionData.question}</h2>`;

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');
    questionData.options.forEach(option => {
        optionsDiv.innerHTML += `
            <label>
                <input type="radio" name="q${currentQuestion}" value="${option}">
                ${option}
            </label>
        `;
    });

    questionDiv.appendChild(optionsDiv);
    quizArea.appendChild(questionDiv);
}

function checkAnswer() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selectedOption && selectedOption.value === questions[currentQuestion].answer) {
        score++;
    }
}

submitBtn.addEventListener('click', () => {
    checkAnswer(); // Check the answer of the current question before moving to the next
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quizArea.style.display = 'none';
    submitBtn.style.display = 'none';
    resultArea.style.display = 'block';
    finalScore.textContent = `Your final score is: ${score} out of ${questions.length}`;
}

displayQuestion();// Display the first question when the page loads