function input(x) {
    equivalentCheck(); // reset display if last result is showing
    const display = document.getElementById('result');
    if (display.value === "0") {
        display.value = x;
    } else {
        display.value += x;
    }
}

function decimalpoint() {
    const display = document.getElementById('result');
    equivalentCheck(); // reset if a result is currently displayed
    if (!display.value.includes(".")) {
        display.value += ".";
    }
}

function storeOperand() {
    const display = document.getElementById('result');
    const operand = document.getElementById('operand');
    operand.value = display.value;
    display.value = "0"; // prepare for next input
}

function calculateResult() {
    const operand = parseFloat(document.getElementById('operand').value);
    const current = parseFloat(document.getElementById('result').value);
    const op = parseInt(document.getElementById('operation').value);
    let result = 0;

    switch (op) {
        case 1: result = operand + current; break;
        case 2: result = operand - current; break;
        case 3: result = operand * current; break;
        case 4: result = current !== 0 ? operand / current : "Error"; break;
        default: result = current;
    }

    document.getElementById('result').value = result;
    document.getElementById('operand').value = "";
    document.getElementById('operation').value = "";
    document.getElementById('equivalent').value = 1; // mark that result is showing
}

function operators(op) {
    document.getElementById('operation').value = op;
    storeOperand();
}

function allClear() {
    document.getElementById('result').value = "0";
    document.getElementById('operand').value = "";
    document.getElementById('operation').value = "";
    document.getElementById('equivalent').value = "0";
}

function plusminus() {
    const display = document.getElementById('result');
    display.value = parseFloat(display.value) * -1;
}

function percent() {
    const display = document.getElementById('result');
    display.value = parseFloat(display.value) * 0.01;
}

function square() {
    const display = document.getElementById('result');
    const value = parseFloat(display.value);
    display.value = value * value;
}

function equals() {
    calculateResult();
}

function equivalentCheck() {
    // This allows the last result to clear on next number entry
    if (parseInt(document.getElementById('equivalent').value)) {
        document.getElementById('equivalent').value = 0;
        document.getElementById('result').value = 0;
    }
}




