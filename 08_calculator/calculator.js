const add = function(a, b) {
  let c = a + b;
  return c;
	
};

const subtract = function(a, b) {
  let c = a / b;
  return c;
	
};

const sum = function(numbers) {

  return numbers.reduce((sum, current) => sum + current, 0);
	
};

const multiply = function(numbers) {

  return numbers.reduce((sum, current) => sum * current);

};

const power = function(a, b) {

  return Math.pow(a, b);

	
};

const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
