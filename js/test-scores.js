//////////////////////////////////////////////////////////////////
// Name: Kate Baldwin                                           //
// Date: 05/18/2020                                             //
// Course: Web150 - Assignment5                                 //  
// Desc: This script takes test scores from the user until the  //
//   sentinel value is entered, then calculates the average.    // 
//                                                              //
//////////////////////////////////////////////////////////////////

//prompt user for initial input
var testScore = parseInt(prompt("Enter test score: \n Or 999 to end entries"), 10);
//initialize counter and total
var count = 0;
var total = 0;

//Using a while loop, add the current test score to the total and increment the count
//  until the sentinel is entered (999).
while(testScore != 999){
    total += testScore;
    count++;
    var testScore = parseInt(prompt("Enter test score: \n Or 999 to end entries"), 10);
}

//calculate and output the average test score
var average = Math.round(total/count);
alert("Average score is " + average);