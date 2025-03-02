let currentInput = '';
let operator = '';
let firstValue = '';
let secondValue = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function clearScreen() {
    currentInput = '';
    operator = '';
    firstValue = '';
    secondValue = '';
    document.getElementById('result').value = '';
}

function setOperator(op) {
    if (firstValue !== '') {
        calculateResult();
    }
    operator = op;
    firstValue = currentInput;
    currentInput = '';
}

function calculateResult() {
    secondValue = currentInput;
    let result;

    if (firstValue !== '' && secondValue !== '') {
        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue);

        switch (operator) {
            case '+':
                result = firstValue + secondValue;
                break;
            case '-':
                result = firstValue - secondValue;
                break;
            case '*':
                result = firstValue * secondValue;
                break;
            case '/':
                result = firstValue / secondValue;
                break;
            default:
                result = 'Error';
                break;
        }
        document.getElementById('result').value = result;
        firstValue = result;
        currentInput = result.toString();
        operator = '';
    }
}