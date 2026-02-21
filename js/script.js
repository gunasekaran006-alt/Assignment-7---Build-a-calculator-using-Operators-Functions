let display = document.getElementById("display");

// Function to add numbers/operators to the screen
function appendToDisplay(input) {
    display.value += input;
}


// Function to clear the screen (C button)
function clearDisplay() {
    display.value = "";
}

// Function to calculate basic arithmetic (+, -, *, /)
function calculateResult() {
    try {
        // eval() automatically processes the math string
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Function to calculate Square (x²)
function getSquare() {
    let num = parseFloat(display.value);
    display.value = num * num;
}

// Function to calculate Cube (x³)
function getCube() {
    let num = parseFloat(display.value);
    display.value = num * num * num;
}