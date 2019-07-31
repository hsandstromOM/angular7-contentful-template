var MobileMenu = function() {
  'use strict';

  // Handle Timeline
  var handleMobileMenu = function() {

    setTimeout(() => {
      const button = document.querySelector(".main-circle");
      const circles = document.querySelectorAll(".circles");
      const cross = document.querySelector(".cross");
      const crossbg = document.querySelector(".bg");
      const boxicons = document.querySelectorAll(".icons a");
      button.addEventListener("click", function() {
        cross.classList.toggle("show");
        crossbg.classList.toggle("show");
        circles.forEach(element => {
          element.classList.toggle("show");
        });
        boxicons.forEach(element => {
          element.classList.toggle("colorchange");
        });
      });

    }, 500);

  }

  return {
    init: function() {
      handleMobileMenu(); // initial setup for timeline
    }
  }
}();

$(document).ready(function() {
  MobileMenu.init();
});
