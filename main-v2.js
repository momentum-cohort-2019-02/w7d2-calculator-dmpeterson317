var display = document.getElementById('display');
var error = false;

function setupDigitButton() {
    let digits = document.querySelectorAll('.digit')
    for (let el of digits) {
        el.addEventListener('click', function(event) {
            addToDisplay(event.target.innerText)
        })
    }
}

function setupOperatorButton() {
    let operators = document.querySelectorAll('.operator')
    for (let el of operators) {
        el.addEventListener('click', function(event) {
            addToDisplay(event.target.innerText)
        })
    }
}

function setupDecimalButton() {
    document.querySelector('#decimal').addEventListener('click', function(event) {



        addToDisplay(event.target.innerText);
    })
}

function setupClearButton() {
    let clear = document.querySelector('#clear')
    clear.addEventListener('click', function() {
        clearDisplay();
    })
}

function setupEqualButton() {
    document.querySelector('#equal').addEventListener('click', function(event) {
        calculateDisplay();

    })
}

function addToDisplay(eventInnerText) {
    display.innerText += eventInnerText;
}

function clearDisplay() {
    display.innerText = ''
}

function calculateDisplay() {
    display.innerText = eval(display.innerText);
}



document.addEventListener('DOMContentLoaded', function() {
    setupDigitButton();
    setupOperatorButton();
    setupEqualButton();
    setupClearButton();
    setupDecimalButton();
})
