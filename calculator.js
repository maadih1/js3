const resultInput = document.getElementById("result");
const buttons = document.querySelectorAll("button");
const buttonSound = document.getElementById("buttonSound");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        playButtonSound();
        
        if (buttonText === "=") {
            calculateResult();
        } else if (buttonText === "C") {
            clearCalculator();
        } else if (isNumber(buttonText)) {
            currentInput += buttonText;
            updateDisplay();
        } else if (isOperator(buttonText)) {
            handleOperator(buttonText);
        }
    });
});

function playButtonSound() {
    buttonSound.currentTime = 0;
    buttonSound.play();
}
function updateDisplay() {
    if (operator !== "") {
        resultInput.value = previousInput + " " + operator + " " + currentInput;
    } else {
        resultInput.value = currentInput;
    }
}


function calculateResult() {
    if (operator && currentInput !== "") {
        previousInput = parseFloat(previousInput);
        currentInput = parseFloat(currentInput);

        switch (operator) {
            case "+":
                currentInput = previousInput + currentInput;
                break;
            case "-":
                currentInput = previousInput - currentInput;
                break;
            case "*":
                currentInput = previousInput * currentInput;
                break;
            case "/":
                if (currentInput !== 0) {
                    currentInput = previousInput / currentInput;
                } else {
                    currentInput = "Error";
                }
                break;
            default:
                currentInput = "Error";
                break;
        }

        operator = "";
        previousInput = currentInput;
        updateDisplay();
    }
}

function handleOperator(op) {
    if (currentInput !== "") {
        operator = op;
        previousInput = currentInput;
        currentInput = "";
    }
}

function clearCalculator() {
    currentInput = "";
    operator = "";
    previousInput = "";
    updateDisplay();
}

function isNumber(text) {
    return /^[0-9]+$/.test(text);
}

function isOperator(text) {
    return /^[+\-*/]+$/.test(text);
}
