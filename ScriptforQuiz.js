const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const hintButtonsContainer = document.getElementById("hint-buttons");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

const usedHints = {
  removeTwo: false,
  percentage: false,
  askPerson: false,
};

const questions = [
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the smallest unit of life?",
    answers: [
      { text: "Atom", correct: false },
      { text: "Cell", correct: true },
      { text: "Molecule", correct: false },
      { text: "Organ", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false },
      { text: "Jane Austen", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "NaCl", correct: false },
      { text: "O2", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "South Korea", correct: false },
      { text: "Thailand", correct: false },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Shark", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Quartz", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Who discovered gravity?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Isaac Newton", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Nikola Tesla", correct: false },
    ],
  },
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
      { text: "Brisbane", correct: false },
    ],
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "Amazon River", correct: true },
      { text: "Nile River", correct: false },
      { text: "Yangtze River", correct: false },
      { text: "Mississippi River", correct: false },
    ],
  },
];

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 60;
  nextButton.innerHTML = "Next";
  hintButtonsContainer.style.display = "flex";
  resetHintButtons();
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${
    currentQuestion.question
  }`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  resetState();
  questionElement.innerHTML = `Quiz Over! You scored ${score} out of ${questions.length}.`;
  nextButton.innerHTML = "Restart";
  nextButton.style.display = "block";
  hintButtonsContainer.style.display = "none";
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function resetHintButtons() {
  usedHints.removeTwo = false;
  usedHints.percentage = false;
  usedHints.askPerson = false;
  hintButtonsContainer.querySelectorAll(".hint").forEach((button) => {
    button.disabled = false;
    button.style.display = "inline-block";
  });
}

hintButtonsContainer.querySelectorAll(".hint").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerHTML === "-2" && !usedHints.removeTwo) {
      removeTwoWrongAnswers();
      usedHints.removeTwo = true;
      button.disabled = true;
    } else if (button.innerHTML === "Percentage" && !usedHints.percentage) {
      showAnswerPercentages();
      usedHints.percentage = true;
      button.disabled = true;
    } else if (button.innerHTML === "Ask a Person" && !usedHints.askPerson) {
      askAPerson();
      usedHints.askPerson = true;
      button.disabled = true;
    }
  });
});

function removeTwoWrongAnswers() {
  const buttons = Array.from(answerButtons.children);
  const wrongAnswers = buttons.filter(
    (button) => button.dataset.correct === "false"
  );

  for (let i = 0; i < 2 && wrongAnswers.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * wrongAnswers.length);
    wrongAnswers[randomIndex].style.display = "none";
    wrongAnswers.splice(randomIndex, 1);
  }
}

function showAnswerPercentages() {
  const buttons = Array.from(answerButtons.children);
  buttons.forEach((button) => {
    const percentage = Math.floor(Math.random() * 100);
    button.innerHTML += ` (${percentage}%)`;
  });
}

function askAPerson() {
  const names = ["Helen", "Aster", "Abebe", "Kebede"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const buttons = Array.from(answerButtons.children);
  const randomAnswer =
    buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
  alert(`${randomName} said the answer might be: ${randomAnswer}`);
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
