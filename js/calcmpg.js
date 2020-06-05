//////////////////////////////////////////////////////////////////
// Author: Kate Baldwin                                           //
// Created: 06/02/2020                                             //
// Course: Web150 - Assignment7                                 //  
// Desc: This script creates a miles per gallon calculator.     //
//                                                              //
//////////////////////////////////////////////////////////////////

//get input from the form
var mpgform = document.querySelector('form');

//function to calc MPG
function calcmpg(event) {
    //prevent default tells the browser to stay on the current page after the submit button is clicked. 
    event.preventDefault();

    //To get and set the values from the input fields, use the value property.
    var mpgform = event.target;
    var miles_input = mpgform.querySelector('#miles').value;
    var gallons_input = mpgform.querySelector('#gallons').value;

    //calc mpg
    var mpg = miles_input / gallons_input;

    //change the value of mpg on the form
    var mpg_output = mpgform.querySelector('#mpg');
    mpg_output.value = mpg;

    //can use this instead of event.target above
    // var miles = this.miles;
    // var mpg = this.miles / this.gallons;
}

//when the user clicks on submit button, call the function to calculate MPG.
//event listener must come after the function that it calls. 
mpgform.addEventListener('submit', calcmpg);

//form validation goes here