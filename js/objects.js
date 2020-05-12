//////////////////////////////////////////////////////////////////
// Name: Kate Baldwin                                           //
// Date: 05/04/2020                                             //
// Course: Web150 - Assignment3                                 //  
// Desc: This script creates a template for an object using the //
//   constructor notation, then creates and displays instances  // 
//   of that object.                                            //
//////////////////////////////////////////////////////////////////

//Create the template for a car object using constructor notation.
function Car (year, make, model, tankSize, milesPerTank){
    //Define the Car's properties
    this.year = year;
    this.make = make;
    this.model = model;
    this.tankSize = tankSize;
    this.milesPerTank = milesPerTank;

    //Define the Car's method. This method calculates miles per gallon of the car,
    // then rounds and returns a whole number. 
    this.milesPerGallon = function() {
        return Math.round(this.milesPerTank / this.tankSize);
    }
} 

//Create instances of the car object
var toyotaCorolla = new Car(2007, 'Toyota', 'Corolla', 12, 350);
var subaruOutback = new Car(2015, 'Subaru', 'Outback', 18, 410);
var fordEscape    = new Car(2012, 'Ford', 'Escape', 17, 350);

//Create a variable to hold the message containing all the information about the first car object.
var car1msg = '<h3> ' + toyotaCorolla.year + ' ' + toyotaCorolla.make + ' ' + toyotaCorolla.model + '</h3>';
car1msg += '<p>Miles Per Gallon: ' + toyotaCorolla.milesPerGallon() + '</p>';
//Create a variable to hold the element whose ID is Car1
var car1element = document.getElementById('Car1');
//Write the message into the Car1 element 
car1element.innerHTML = car1msg;

//Repeat the above steps for car2
var car2msg = '<h3> ' + subaruOutback.year + ' ' + subaruOutback.make + ' ' + subaruOutback.model + '</h3>';
car2msg += '<p>Miles Per Gallon: ' + subaruOutback.milesPerGallon() + '</p>';
var car2element = document.getElementById('Car2');
car2element.innerHTML = car2msg;

//Repeat the above steps for car3
var car3msg = '<h3> ' + fordEscape.year + ' ' + fordEscape.make + ' ' + fordEscape.model + '</h3>';
car3msg += '<p>Miles Per Gallon: ' + fordEscape.milesPerGallon() + '</p>';
var car3element = document.getElementById('Car3');
car3element.innerHTML = car3msg;