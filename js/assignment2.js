//This script gets input from the user, calculates a total, and outputs that value. 

//prompt input from the user
var person = prompt("Let's play the sum game. \n Please enter your name");
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");

//calculate total
var total = parseInt(num1, 10) + parseInt(num2, 10);

//output total
document.write("Hi " + person + "! The sum of " + num1 + " + " 
  + num2 + " is " + total);