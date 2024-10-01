// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the <p> tag in the HTML
    const paragraph = document.querySelector('p');
    const btn=document.querySelector('button');
    // Add a click event listener to the paragraph
    btn.addEventListener('click', function() {
        // Toggle the color of the paragraph between red and the original color
        if (paragraph.style.color === 'red') {
            paragraph.style.color = '#555';  // Revert to original color
        } else {
            paragraph.style.color = 'red';   // Change color to red
        }
    });

    // Log a message when the script is loaded
    console.log('Sample webpage loaded and ready');
});
