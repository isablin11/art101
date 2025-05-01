// index.js - Lab 8: Anon Functions and Callbacks
// Author: Isabelle Lin <ilin14@ucsc.edu>
// Date: May 1, 2025 

// code from console
function numbers(x) { 
  return (x + 2 == 3);
}

// collect all output 
let output = "";

//test function 
console.log("does 3 plus 2 equal 3? ", numbers(3));
console.log("does 1 plus 2 equal 3? ", numbers(1)); 

array = [1, 2, 3, 4, 5, 6, 7]
console.log("My array", array); 

var result = array.map(numbers); 
console.log("Test of addition of array: ", result); 

var result = array.map(function(x){
  return x - 0.5;
})

console.log("array minus 0.5: ", result);

// Your map results data
var mapResults = "Your map results here";

// Use jQuery to select the element by its ID and set the HTML content
$(document).ready(function() { 
  $("#output").html(mapResults);
});