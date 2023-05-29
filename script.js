// ...

var currentQuestion = 0;
var score = 0;
var answers = [];

// ...

function checkAnswer() {
  var answer = document.querySelector('input[name="answer"]:checked');
  if (!answer) {
    return false; // User hasn't selected an option
  }

  answers[currentQuestion] = answer.id;

  if (answers[currentQuestion] === questions[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;
  answer.checked = false;

  return true;
}

// ...

function showResult() {
  quizContainer.innerHTML = "<h2>Quiz Completed</h2>";

  var resultHtml = "<p>Your score:</p><ul>";
  for (var i = 0; i < questions.length; i++) {
    var questionHtml = "<li>" + questions[i].question + " - ";
    if (answers[i] === questions[i].correct) {
      questionHtml += "Correct";
    } else {
      questionHtml += "Incorrect";
    }
    questionHtml += "</li>";
    resultHtml += questionHtml;
  }
  resultHtml += "</ul>";

  var scoreElement = document.createElement("p");
  scoreElement.innerHTML = resultHtml;

  var reloadButton = document.createElement("button");
  reloadButton.textContent = "Reload Quiz";
  reloadButton.addEventListener("click", function () {
    location.reload();
  });

  quizContainer.appendChild(scoreElement);
  quizContainer.appendChild(reloadButton);
}

// ...
