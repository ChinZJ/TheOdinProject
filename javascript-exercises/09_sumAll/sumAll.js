const sumAll = function(numOne, numTwo) {
    if ((numOne < 0) || (!Number.isInteger(numOne)) ||
            (numTwo < 0) || (!Number.isInteger(numTwo))) {
        return "ERROR";
    }

    let start, end;
    if (numOne > numTwo) {
        start = numTwo;
        end = numOne;
    } else {
        start = numOne;
        end = numTwo;
    }

    let accumulator = 0;
    for (; start <= end; start++) {
        accumulator += start;
    }
    return accumulator;
};

// Do not edit below this line
module.exports = sumAll;
