// index.js - Lab 7: Functions
// Author: Isabelle Lin <ilin14@ucsc.edu>
// Date: April 28, 2025 

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
  var userName = window.prompt("Hi! Tell me your name so I can fix it.");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string 
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted; 
}

// output 
document.writeln("Oh look, I've fixed your name: ", 
    sortUserName(), "</br>"); 




