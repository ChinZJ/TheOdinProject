function fibRecurse(num) {
    if (num <= 1) {
        return num;
    } else {
        return fibRecurse(num - 1) + fibRecurse(num - 2);
    }
}

const fibonacci = function(num) {
    if (+num < 0) {
        return "OOPS";
    } else {
        return fibRecurse(+num);
    }
};



// Do not edit below this line
module.exports = fibonacci;
