const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  // Get user's guess
  const guess = parseInt(document.getElementById("guessInput").value);
  
  // Validate the guess
  if (isNaN(guess) || guess < 1 || guess > 100) {
    setMessage("Please enter a number between 1 and 100.", "black");
    return;
  }

  // Increment attempts
  attempts++;

  // Check if guess is correct
  if (guess === randomNumber) {
    setMessage(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`, "green");
    document.getElementById("guessInput").disabled = true;
  } else {
    // Provide hint
    const hint = guess < randomNumber ? "higher" : "lower";
    setMessage(`Incorrect! Try guessing ${hint}.`, "red");
  }
}

function setMessage(message, color) {
  document.getElementById("message").textContent = message;
  document.getElementById("message").style.color = color;
}