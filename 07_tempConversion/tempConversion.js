const convertToCelsius = function(farenheit) {


    let celcius = farenheit - 32;
    return Math.round(celcius);
};

const convertToFahrenheit = function(celcius) {

    let farenheit = celcius + 32;
    return Math.round(farenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
