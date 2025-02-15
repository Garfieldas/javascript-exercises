const getTheTitles = function(books) {

    let newArray = books.map(book => (book["title"]))
    return newArray;

};

// Do not edit below this line
module.exports = getTheTitles;
