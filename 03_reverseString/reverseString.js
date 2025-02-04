const reverseString = function(word) {

    let splitedString = word.split("");
    splitedString = splitedString.reverse();
    splitedString = splitedString.join("");

    return splitedString;

};

// Do not edit below this line
module.exports = reverseString;
