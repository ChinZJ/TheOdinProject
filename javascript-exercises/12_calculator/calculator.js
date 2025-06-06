const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(lst) {
	return lst.reduce(add, 0);
};

const multiply = function(lst) {
  return lst.reduce(function(a, b) {
    return a * b;
  });
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let total = 1;
  for (let i = 1; i <= a; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
