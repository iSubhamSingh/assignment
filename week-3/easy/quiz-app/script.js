import { quizData } from './quizData.js'; // Adjust the path as necessary

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    scoreContainer.style.display = 'none';
    showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = ''; // Clear previous buttons
    Object.keys(question).forEach(key => {
        if (key !== 'question' && key !== 'correct') {
            const button = document.createElement('button');
            button.innerText = question[key];
            button.classList.add('btn');
            button.id = key;
            button.addEventListener('click', selectAnswer);
            answerButtons.appendChild(button);
        }
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const selectedAnswer = selectedButton.id;
    const correctAnswer = quizData[currentQuestionIndex].correct;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
        nextButton.style.display = 'none';
    } else {
        showScore();
    }
});

function showScore() {
    scoreElement.innerText = `${score} out of ${quizData.length}`;
    scoreContainer.style.display = 'block';
    questionElement.style.display = 'none';
    answerButtons.style.display = 'none';
    nextButton.style.display = 'none';
}

restartButton.addEventListener('click', startQuiz);

// Start the quiz when the page loads
startQuiz();