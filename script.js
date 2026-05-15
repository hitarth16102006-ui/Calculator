const display = document.getElementById("display");

function appendtodisplay(input) {
    if (!display) return;
    if (display.value === "" && input === "0") {
        return;
    }
    display.value = display.value + input;
}

function cleardisplay() {
    if (!display) return;
    display.value = "";
}

function calculate() {
    if (!display) return;
    const expression = display.value;

    if (expression === "") {
        return;
    }

    try {
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}