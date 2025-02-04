const sumAll = function(num, step) {

    let sum=0;
    for (let i =0; i < step; i++){
        sum += num;
        num++;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
