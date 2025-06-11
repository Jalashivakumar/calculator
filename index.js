// CALCULATOR PROGRAM

const display = document.getElementById("display");

// Add input to the display
function appendToDisplay(input) {
    display.value += input;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Evaluate the expression
function calculate() {
    try {
        // Use Function constructor for slightly safer evaluation
        display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch (error) {
        display.value = "Error";
    }
}
