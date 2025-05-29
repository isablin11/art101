// index.js - Lab 8: Anon Functions and Callbacks
// Author: Isabelle Lin <ilin14@ucsc.edu>
// Date: May 28, 2025 

// Code from console 
function numbers(x) {
    return (x + 2 == 3);
}

// Array operations
const array = [1, 2, 3, 4, 5, 6, 7];

// Test function
const test1 = numbers(3); // false
const test2 = numbers(1); // true

// Mapping
const additionResults = array.map(numbers);
const subtractResults = array.map(x => x - 0.5);

// HTML output
let outputHTML = `
    <h3>Function Tests:</h3>
    <p>Does 3 plus 2 equal 3? ${test1}</p>
    <p>Does 1 plus 2 equal 3? ${test2}</p>
    
    <h3>Array Operations:</h3>
    <p>Original array: [${array.join(', ')}]</p>
    
    <h4>Addition Test Results:</h4>
    <p>[${additionResults.join(', ')}]</p>
    
    <h4>Subtraction Results (x - 0.5):</h4>
    <p>[${subtractResults.join(', ')}]</p>
`;

// Use jQuery to select the element by its ID and set the HTML content
$(document).ready(function() {
    $("#output").html(outputHTML);
    
});
