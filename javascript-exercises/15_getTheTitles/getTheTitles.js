const getTheTitles = function(bookLst) {
    let titleLst = [];
    for (let book of bookLst) {
        titleLst.push(book.title);
    }
    return titleLst;
};

// Do not edit below this line
module.exports = getTheTitles;
