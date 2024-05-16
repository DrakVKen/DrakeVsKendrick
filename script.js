// Define your dictionaries of questions and options

const questions = {
    1: "If you were a guy, would you wear a sexy red dress?",
    2: "If you were a 31 year old, would you hangout with a 14 year old?",
    3: "What's a prince to a king?",
    4: "Would you have a secret child and neglect them?",
    5: "Would you rather be Canadian or American?",
    6: "Domestic violence or domestic silence?",
    7: "Which chord are you striking?",
    8: "How big is your cock?",
    9: "Would you flee the country if something happened to you?",

    // Add more questions as needed
};

const options = {
    1: ["Yes", "No"],
    2: ["Yes", "No"],
    3: ["Son", "Successor"],
    4: ["Yes", "No"],
    5: ["Canadian", "American"],
    6: ["Domestic Silence", "Domestic Violence"],
    7: ["A Minor", "A Major"],
    8: ["12 inches", "9 inches"],
    9: ["Yes", "No"],
    // Add more options for each question
};

let currentQuestion = 1; // Start with the first question
let drake = 0;
let kendrick = 0;
var winner = '';

// Function to display the current question and options
function displayQuestion() {
    document.getElementById('question').innerText = questions[currentQuestion];

    const optionsArray = options[currentQuestion];
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = ''; // Clear previous options

    optionsArray.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => {
            handleChoice(option);
        };
        optionsDiv.appendChild(button);
    });
}

// Function to handle user choice
function handleChoice(choice) {
    // Update to the next question or do something else
    if (choice == options[currentQuestion][0]){
        drake++;
    } else {
        kendrick++;
    }
    currentQuestion++;
    if (questions[currentQuestion]) {
        displayQuestion(); // Display the next question
    } else {
        if (drake > kendrick){
            winner = 'drake';
        } else {
            winner = 'kendrick';
        }
        localStorage.setItem('winner', winner);
        window.location.href = 'result.html';
        // You can perform some action here when all questions are answered
    }
}

// Initial display of the first question
displayQuestion();
