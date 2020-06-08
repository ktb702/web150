//////////////////////////////////////////////////////////////////
// Author: Kate Baldwin                                         //
// Created: 06/02/2020                                          //
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

    //form validation - if either input is not a number, alert the user and reset the form
    if (isNaN(miles_input)|| isNaN(gallons_input)){
        alert("Both entries must be numeric");   
        mpgform.reset(); //clear entries so that the user has a empty form to re-enter data
    }
    else{
        //calc mpg
        var mpg = miles_input / gallons_input;

        //change the value of mpg on the form
        var mpg_output = mpgform.querySelector('#mpg');
        mpg_output.value = mpg.toFixed(1); //round to one decimal place
    }
}

//when the user clicks on submit button, call the function to calculate MPG.
//event listener must come after the function that it calls. 
window.onload = function() {
    mpgform.addEventListener('submit', calcmpg);
};

