// index.js - Loops 
// Author: Isabelle Lin <ilin14@ucsc.edu>
// Date: May 19, 2025

function FizzBuzz() {
    let oneLongString = "";
    
    for (let i = 1; i <= 200; i++) {
        let output = "";
        
        // Check for multiples 
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        if (i % 7 === 0) output += "Boom";
        if (i % 9 === 0) output += "Bang";
        
        // If any multiples were found, add "!", otherwise use the number
        if (output) {
            output += "!";
            oneLongString += i + " " + output + "<br>";
        } else {
            oneLongString += i + "<br>";
        }
    }
    
    // Output the final string to the div
    $("#output").html(oneLongString);
}

// Call the function when the document is ready
$(document).ready(function() {
    FizzBuzz();
});

