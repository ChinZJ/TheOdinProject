const repeatString = function(string, numTimes) {
    if (numTimes < 0) {
        return "ERROR";
    }
    let answer = "";
    for (let i = 0; i < numTimes; i++) {
        answer += string;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
