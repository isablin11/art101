// index.js - JSON and APIs 
// Author: Isabelle Lin <ilin14@ucsc.edu>
// Date: June 4, 2025

// Make the AJAX request to fetch the comic data
$.ajax({
  url: 'https://xkcd.com/614/info.0.json', 
  method: 'GET',
  dataType: 'json',
  success: function(comicObj) {
    // Store the object in a variable as requested
    var comicObj = comicObj;
    
    // Create a container for the comic
    var comicContainer = $('<section>').addClass('comic-section');
    
    // Add the title
    var title = $('<h1>').text(comicObj.title);
    comicContainer.append(title);
    
    // Create and add the image
    var comicImg = $('<img>')
      .attr('src', comicObj.img)
      .attr('alt', comicObj.alt)
      .attr('title', comicObj.alt);
    comicContainer.append(comicImg);
    
    // Add the container to the webpage (you might want to specify where)
    $('body').append(comicContainer); 
  },
  error: function(xhr, status, error) {
    console.error('Error fetching comic:', error);
  }
});