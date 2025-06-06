const display = document.querySelector(".display");
let numbers = ["0"];
let operations = [];
let currEquation = numbers[0];
let hasOperator = false;
let hasDecimal = false;
let isCalculated = false;
let isUndefined = false;
toDisplay(currEquation);

const MAX_DISPLAY = 8; // Arbitrary.

const buttonLst = document.querySelectorAll("button");
for (let button of buttonLst) {
    button.addEventListener("click", (event) => {
        parseButton(button.textContent);
    });
}

document.addEventListener("keydown", (event) => {
    parseButton(event.key);
});

function parseButton(content) {
    switch (content) {
        case ("AC"):
        case ("Escape"):
            resetAll();
            break;
        case ("DEL"):
        case ("Backspace"):
            removeOne();
            break;
        case ("="):
        case ("Enter"):
            solveEquation();
            break;
        case ("/"):
        case ("*"):
        case ("+"):
        case ("-"):
            addOperator(content);
            break;
        case("0"):
        case ("1"):
        case ("2"):
        case ("3"):
        case ("4"):
        case ("5"):
        case ("6"):
        case ("7"):
        case ("8"):
        case ("9"):
            addNumber(content);
            break;
        case ("."):
            addDecimal();
            break;
        default:
            console.log("Something wrong!");
    }
}

function toDisplay(number) {
    if (isCalculated && (number.toString().length > MAX_DISPLAY) && !isUndefined) {
        display.textContent = Number.parseFloat(number).toExponential(MAX_DISPLAY);
    } else {
        display.textContent = number;
    }
    
    display.scrollLeft = display.scrollWidth;
}

function resetAll(number = 0) {
    numbers = [`${number}`];
    operators = [];
    currEquation = numbers[0];
    hasOperator = false;
    
    if (currEquation.includes(".")) {
        hasDecimal = true;
    } else {
        hasDecimal = false;
    }

    toDisplay(currEquation);
}

function removeOne() {
    if (isCalculated || isUndefined) {
        isCalculated = false;
        isUndefined = false;
        resetAll();
    }

    if (currEquation !== "0") {
        let currNumber;

        if (hasOperator) {
            hasOperator = false;

            operations.pop();
        } else {
            currNumber = numbers[numbers.length - 1];
            // If number can be completely deleted.
            if (currNumber.length === 1) {
                if (numbers.length === 1) {
                    return resetAll();
                } 
                // Number can be popped. 
                // Must be followed by an operation.
                numbers.pop();
                hasOperator = true;
                hasDecimal = false;
            } else {
                // Remove latest character.
                currNumber = currNumber.slice(0, -1);
                numbers[numbers.length - 1] = currNumber;
            }
        }

        if (!hasOperator) {
            // Check if existing number contains a decimal.
            currNumber = numbers[numbers.length - 1];
            if (currNumber.includes(".")) {
                hasDecimal = true;
            } else {
                hasDecimal = false;
            }
        }
        
        currEquation = currEquation.slice(0, -1);
        toDisplay(currEquation);
    }
}

function solveEquation() {
    // Special case: incomplete expression.
    if (!hasOperator) {
        isCalculated = true;

        let tempNumbers = [];
        let tempOperators = [];

        while (operations.length > 0) {
            // Greedily solve all multiplications and divisions.
            let operator = operations.shift();
            if (operator === "*") {
                let operandOne = numbers.shift();
                let operandTwo = numbers.shift();
                let result = operandOne * operandTwo;

                numbers.unshift(result)
            } else if (operator === "/") {
                let operandOne = numbers.shift();
                let operandTwo = numbers.shift();

                if (+operandTwo === 0) {
                    isUndefined = true;

                    return resetAll("Undefined");
                }

                let result = operandOne / operandTwo;

                numbers.unshift(result)
            } else {
                tempOperators.unshift(operator);
                tempNumbers.unshift(numbers.shift());
            }
        }

        // There should be one operand left in numbers and the rest in temp.
        // Greedily evaluate the rest.
        let result;
        if (tempNumbers.length > 0) {
            result = tempNumbers.pop();
        } else {
            result = numbers.pop();
        }
        while (tempOperators.length > 0) {
            let operator = tempOperators.pop();
            let oeprand;
            if (tempNumbers.length > 0) {
                operand = tempNumbers.pop();
            } else {
                operand = numbers.pop();
            }
            if (operator === "+") {
                result = +result + +operand;
            } if (operator === "-") {
                result = +result - +operand;
            }
        }
        console.log(result);
        resetAll(result);
    }
}

function addOperator(content) {
    if (isUndefined) {
        return;
    }

    if (isCalculated) {
        isCalculated = false;
    }

    if (hasOperator) {
        operations.pop();
        operations.push(content);

        currEquation = currEquation.slice(0, -1);
    } else {
        hasOperator = true;

        operations.push(content);
    }
    hasDecimal = false;

    currEquation += content;

    toDisplay(currEquation);
}

function addNumber(content) {
    if (isCalculated || isUndefined) {
        isCalculated = false;
        isUndefined = false;
        resetAll();
    }

    if (hasOperator) {
        hasOperator = false;

        // Guaranteed number.
        numbers.push(content);
        currEquation += content;
    } else {
        let currNumber = numbers[numbers.length - 1];
        // Special case: existing number is 0.
        if (currNumber === "0") {
            // Input number is 0: do nothing.
            if (content !== "0") {
                numbers[numbers.length - 1] = content;

                if (currEquation.length > 1) {
                    currEquation = currEquation.slice(0, -1);
                    currEquation += content;
                } else {
                    currEquation = content;
                }
            }
        }  else {
            currNumber += content;

            numbers[numbers.length - 1] = currNumber;
            currEquation += content;
        } 
    }
    toDisplay(currEquation);
}

function addDecimal() {
    if (isCalculated || isUndefined) {
        isCalculated = false;
        isUndefined = false;
        resetAll();
    }

    if (!hasDecimal) {
        hasDecimal = true;

        if (hasOperator) {
            hasOperator = false;
            
            numbers.push("0.");
            currEquation += "0.";
        } else {
            numbers[numbers.length - 1] = numbers[numbers.length - 1] + ".";
            currEquation += ".";
        }
    }
    toDisplay(currEquation);
}
