// Add this script to your existing script or create a new one

document.addEventListener("DOMContentLoaded", function() {
    var introductionElements = document.querySelectorAll(".Introduction");
  
    window.addEventListener("scroll", function() {
      introductionElements.forEach(function(element) {
        // Check if the element is in the viewport
        var bounding = element.getBoundingClientRect();
        if (bounding.top >= -250 && bounding.bottom - 250 <= window.innerHeight) {
          element.classList.add("active");
        }
      });
    });
  });
  