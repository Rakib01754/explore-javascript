//----------- variable types checker -------------//
// Number 
var price = 100;
console.log(typeof price);

// String 
var price = '100';
console.log(typeof price);

// Boolean 
var hungry = true;
console.log(typeof hungry);

// undefined 
var resultOut;
console.log(typeof resultOut);

// tofixed variable value 

var number1 = 0.1;
var number2 = 0.2;
var sumOfNumber = number1 + number2;
sumOfNumber = sumOfNumber.toFixed(3);
var sumOfNumber = parseFloat(sumOfNumber);
console.log(sumOfNumber);
