// Numeric and string value conflict to string value 
var price1 = '20';
var price2 = 40;

var totalPrice = price1 + price2;

// console.log(totalPrice); 

//----- convert  number type string to numeric--------//

var price1number = parseInt(price1);
// console.log(price1);
// console.log(price1number);
// console.log(totalPrice);
// var totalPrice = price1number + price2;
// console.log(totalPrice);

var gpa = '3.41';
var gpaNumber = parseInt(gpa);
console.log(gpaNumber);
var gpaNumber = parseFloat(gpa);
console.log(gpaNumber);
