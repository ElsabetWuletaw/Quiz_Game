const questions = [
  {
    question: "ዋት ኢስ ?",
    answer: [
      { text: "ስ", correct: false },
      { text: "ግ", correct: false },
      { text: "ህ", correct: false },
      { text: "ጅ", correct: true },
    ],
  },
  {
    question: "ዋት ኢስ?",
    answer: [
      { text: "ግ", correct: false },
      { text: "ህ", correct: false },
      { text: "ሀ", correct: false },
      { text: "ኢ", correct: true },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextbtn = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let initialTime = 10;
let timeElapsed = 0;
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    timeElapsed++;
    updateTimerDisplay();
    checkTimeLimit();
  }, 1000);
}
function updateTimerDisplay() {
  const remainingTime = initialTime - timeElapsed;
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = 
  `${minutes}:${seconds.toString().padStart(2, '0')}`;
  timerElement.textContent = formattedTime;
}

function checkTimeLimit() {
  if (timeElapsed >= initialTime) {
    clearInterval(timerInterval);
    showScore();
  }
}

function startQuiz() {
  initialTime = 10;
  timeElapsed = 0;
  startTimer();

  currentQuestionIndex = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNO = currentQuestionIndex + 1;
  questionElement.innerHTML = 
  questionNO + ". " + currentQuestion.question;

  currentQuestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextbtn.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtns.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbtn.style.display = "block";
}

function showScore() {
  clearInterval(timerInterval); // Stop the timer
  resetState();
  questionElement.innerHTML =
   `You scored ${score} out of ${questions.length}!`;
  nextbtn.innerHTML = "Play Again";
  nextbtn.style.display = "block";//to show hidden HTML element
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
    nextbtn.innerHTML = "Play Again";
  }
}

nextbtn.addEventListener("click", () => {
  if (nextbtn.innerHTML === "Play Again") {
    startQuiz();
  } else {
    handleNextButton(); 
  }
});

startQuiz();