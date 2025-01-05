// const questions = [
//   {
//     question: "What is the capital of France?",
//     answer: [
//       { text: "Berlin", correct: false },
//       { text: "Madrid", correct: false },
//       { text: "Paris", correct: true },
//       { text: "Rome", correct: false },
//     ],
//   },
//   {
//     question: "Who wrote 'Romeo and Juliet'?",
//     answer: [
//       { text: "William Shakespeare", correct: true },
//       { text: "Charles Dickens", correct: false },
//       { text: "Jane Austen", correct: false },
//       { text: "Mark Twain", correct: false },
//     ],
//   },
//   {
//     question: "What is the largest planet in our solar system?",
//     answer: [
//       { text: "Earth", correct: false },
//       { text: "Mars", correct: false },
//       { text: "Jupiter", correct: true },
//       { text: "Saturn", correct: false },
//     ],
//   },
//   {
//     question: "What is the smallest unit of life?",
//     answer: [
//       { text: "Atom", correct: false },
//       { text: "Cell", correct: true },
//       { text: "Molecule", correct: false },
//       { text: "Organ", correct: false },
//     ],
//   },
//   {
//     question: "How many continents are there on Earth?",
//     answer: [
//       { text: "5", correct: false },
//       { text: "6", correct: false },
//       { text: "7", correct: true },
//       { text: "8", correct: false },
//     ],
//   },
//   {
//     question: "Who painted the Mona Lisa?",
//     answer: [
//       { text: "Leonardo da Vinci", correct: true },
//       { text: "Vincent van Gogh", correct: false },
//       { text: "Pablo Picasso", correct: false },
//       { text: "Claude Monet", correct: false },
//     ],
//   },
//   {
//     question: "What is the chemical symbol for water?",
//     answer: [
//       { text: "H2O", correct: true },
//       { text: "CO2", correct: false },
//       { text: "NaCl", correct: false },
//       { text: "O2", correct: false },
//     ],
//   },
//   {
//     question: "What is the largest mammal in the world?",
//     answer: [
//       { text: "Elephant", correct: false },
//       { text: "Blue Whale", correct: true },
//       { text: "Giraffe", correct: false },
//       { text: "Hippopotamus", correct: false },
//     ],
//   },
//   {
//     question: "What is the fastest land animal?",
//     answer: [
//       { text: "Cheetah", correct: true },
//       { text: "Lion", correct: false },
//       { text: "Horse", correct: false },
//       { text: "Leopard", correct: false },
//     ],
//   },
//   {
//     question: "Which gas do plants primarily use for photosynthesis?",
//     answer: [
//       { text: "Oxygen", correct: false },
//       { text: "Nitrogen", correct: false },
//       { text: "Carbon Dioxide", correct: true },
//       { text: "Hydrogen", correct: false },
//     ],
//   },
//   {
//     question: "Which country is known as the Land of the Rising Sun?",
//     answer: [
//       { text: "China", correct: false },
//       { text: "Japan", correct: true },
//       { text: "South Korea", correct: false },
//       { text: "Thailand", correct: false },
//     ],
//   },
//   {
//     question: "What is the square root of 64?",
//     answer: [
//       { text: "6", correct: false },
//       { text: "8", correct: true },
//       { text: "10", correct: false },
//       { text: "12", correct: false },
//     ],
//   },
//   {
//     question: "Who was the first President of the United States?",
//     answer: [
//       { text: "Abraham Lincoln", correct: false },
//       { text: "George Washington", correct: true },
//       { text: "Thomas Jefferson", correct: false },
//       { text: "John Adams", correct: false },
//     ],
//   },
//   {
//     question: "What is the primary ingredient in sushi?",
//     answer: [
//       { text: "Rice", correct: true },
//       { text: "Bread", correct: false },
//       { text: "Pasta", correct: false },
//       { text: "Potato", correct: false },
//     ],
//   },
//   {
//     question: "What is the boiling point of water at sea level?",
//     answer: [
//       { text: "90°C", correct: false },
//       { text: "100°C", correct: true },
//       { text: "110°C", correct: false },
//       { text: "120°C", correct: false },
//     ],
//   },
// ];

// const questionElement = document.getElementById("question");
// const answerBtns = document.getElementById("answer-buttons");
// const nextbtn = document.getElementById("next-btn");
// const timerElement = document.getElementById("timer");

// let currentQuestionIndex = 0;
// let score = 0;
// let initialTime = 10;
// let timeElapsed = 0;
// let timerInterval;

// function startTimer() {
//   timerInterval = setInterval(() => {
//     timeElapsed++;
//     updateTimerDisplay();
//     checkTimeLimit();
//   }, 100000);
// }

// function updateTimerDisplay() {
//   const remainingTime = initialTime - timeElapsed;
//   const minutes = Math.floor(remainingTime / 60);
//   const seconds = remainingTime % 60;
//   const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
//   timerElement.textContent = formattedTime;
// }

// function checkTimeLimit() {
//   if (timeElapsed >= initialTime) {
//     clearInterval(timerInterval);
//     showScore();
//   }
// }

// function startQuiz() {
//   initialTime = 10;
//   timeElapsed = 0;
//   startTimer();

//   currentQuestionIndex = 0;
//   score = 0;
//   nextbtn.innerHTML = "Next";
//   showQuestion();
// }

// function showQuestion() {
//   resetState();
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNO = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

//   currentQuestion.answer.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     answerBtns.appendChild(button);
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//   });
// }

// function resetState() {
//   nextbtn.style.display = "none";
//   while (answerBtns.firstChild) {
//     answerBtns.removeChild(answerBtns.firstChild);
//   }
// }

// function selectAnswer(e) {
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//     score++;
//   } else {
//     selectedBtn.classList.add("incorrect");
//   }
//   Array.from(answerBtns.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });
//   nextbtn.style.display = "block";
// }

// function showScore() {
//   clearInterval(timerInterval); // Stop the timer
//   resetState();
//   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//   nextbtn.innerHTML = "Play Again";
//   nextbtn.style.display = "block"; //to show hidden HTML element
// }

// function handleNextButton() {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     showQuestion();
//   } else {
//     showScore();
//     nextbtn.innerHTML = "Play Again";
//   }
// }

// nextbtn.addEventListener("click", () => {
//   if (nextbtn.innerHTML === "Play Again") {
//     startQuiz();
//   } else {
//     handleNextButton();
//   }
// });

// startQuiz();
