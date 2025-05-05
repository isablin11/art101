// index.js - Libraries & jQuery
// Author: Isabelle Lin <ilin14@ucsc.edu>
// Date: May 5, 2025 

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});

// add button to problems section
$("#problems").append("<button id='button-problems'>Make Special</button>");

// add a click listener to the problems button
$("#button-problems").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#problems").toggleClass("special");
});

// add button to reflection section
$("#reflection").append("<button id='button-reflection'>Make Special</button>");

// add a click listener to the reflection button
$("#button-reflection").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#reflection").toggleClass("special");
});

// add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the problems button
$("#button-results").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#results").toggleClass("special");
});