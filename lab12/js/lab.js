// index.js - Conditionals 
// Author: Isabelle Lin <ilin14@ucsc.edu>
// Date: May 19, 2025

function sortingHat(num) {
    // Get remainder when divided by 4
    let remainder = num % 4; 
    let str = "";
    // Assign houses with descriptions based on the remainder
    if (remainder == 0) {
        str = "Air: emphasizes fluidity, speed, and freedom. Airbenders represent freedom, peace, and spiritual connection.";
     } else if (remainder == 1) {
        str = "Water: emphasizes fluid and graceful movements, drawing power from the moon. Waterbenders represent constant change and adaptation.";
     } else if (remainder == 2) {
        str = "Earth: emphasizes solidity, grounded strength, and stability. Earthbenders represent endurance, patience, and resilience.";
     } else if (remainder == 3) {
        str = "Fire: emphasizes passion and energy, drawing powers from the sun. Firebenders represent strong emotions through power and aggressive movements.";
     }
     return str;
}

// attach click handlers to submit button
$("#button").click(function(){
    //get the value in the #input text box, assign to a variable name
    let name = $("#input").val()
    console.log(name);
    //get the length of the name
    let nameLength = name.length;
    console.log(nameLength);
    //get the house
    let house = sortingHat(nameLength); 
    console.log(house);
    //add house to output div
    $("#output").html("<h2 style='font-family: Georgia, sans-serif; color: black;'>" + house + "</h2>");
})
