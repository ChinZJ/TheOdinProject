const palindromes = function (word) {
    // Convert to lowercase to standardize comparisons.
    word = word.toLowerCase();
    // Ignore word breaks and punctuation.
    word = word.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '');

    const mid = Math.floor(word.length / 2);
    for (let i = 0; i <= mid; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
