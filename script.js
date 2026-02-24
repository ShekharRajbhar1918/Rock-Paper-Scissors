// Initialize user and computer scores
let userScore = 0;
let compScore = 0;

// Select all choice buttons (rock, paper, scissors)
const choices = document.querySelectorAll(".choice");

// Select message display element
const msg = document.querySelector("#msg");

// Select score display elements
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate computer's random choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // Available options
    const randIdx = Math.floor(Math.random() * 3); // Random index (0–2)
    return options[randIdx]; // Return random choice
};

// Function to handle draw condition
const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
};

// Function to show winner and update score
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // If user wins
        userScore++; // Increase user score
        userScorePara.innerText = userScore; // Update UI
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // If computer wins
        compScore++; // Increase computer score
        compScorePara.innerText = compScore; // Update UI
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Main game function
const playGame = (userChoice) => {

    // Generate computer choice
    const compChoice = genCompChoice();

    // Check for draw
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin;

        // Check all winning conditions for user
        if (
            (userChoice === "rock" && compChoice === "scissors") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissors" && compChoice === "paper")
        ) {
            userWin = true;
        } else {
            userWin = false;
        }

        // Show result
        showWinner(userWin, userChoice, compChoice);
    }
};

// Add click event listener to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        // Get the id of clicked element (rock/paper/scissors)
        const userChoice = choice.getAttribute("id");

        // Call main game function
        playGame(userChoice);
    });
});

// Reset Button functionality
const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {

    // Reset scores
    userScore = 0;
    compScore = 0;

    // Update score display
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;

    // Reset message
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
});