// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// Use rest parameters instead
const removeFromArray = function(arr, ...elems) {
    return arr.filter(item => !elems.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
