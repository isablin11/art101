// index.js - JavaScript Events and Forms
// Author: Isabelle Lin <ilin14@ucsc.edu>
// Date: May 14, 2025

// Sorts the characters of a string in alphabetical order.
function anagram(inputString) {
// We have to convert our string to an array and back again to sort it
// Credits to DeepSeek
const arr = inputString.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr.join('');
}

// click listener for button
$("#submit").click(function(){

// get value of input field
const userName = $("#user-name").val();

// now let's sort it
userNameSorted = anagram(userName);

// append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});