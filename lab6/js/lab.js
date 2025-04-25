// index.js - Lab 6: Arrays and Objects
// Author: Isabelle Lin <ilin14@ucsc.edu>
// Date: April 25, 2025 

// Define Variables
myTransport = ["car", " bus", " ebike"];

// Create an object for my main ride
myMainRide = {
  make: "Lexus", 
  model: "RH400h", 
  color: "white", 
  year: 2006, 
  age: function () {
    return 2025 - this.year;
  }
}

// output
document.writeln("Types of transportation I use: ", myTransport, "</br>");
document.writeln("My Car: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");



