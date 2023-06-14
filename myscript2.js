document.addEventListener('DOMContentLoaded', function() {
    var addToTopButtons = document.querySelectorAll('.addToTop');
    var addToBottomButtons = document.querySelectorAll('.addToBottom');
    var themeToggle = document.getElementById('theme-toggle');
    var symbolsOutlined = themeToggle.querySelectorAll('.material-symbols-outlined');

  
    // Event listener for "Add to Top" buttons
    addToTopButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var photoSrc = this.closest('.image-wrapper').querySelector('img').getAttribute('src');
        var photoAddToTop = document.createElement('img');
        photoAddToTop.setAttribute('src', photoSrc);
  
        var imageGallery = document.getElementById('image-gallery');
        var h2Element = imageGallery.querySelector('h2');
        h2Element.insertAdjacentElement('afterend', photoAddToTop);
      });
    });
  
    // Event listener for "Add to Bottom" buttons
    addToBottomButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var photoSrc = this.closest('.image-wrapper').querySelector('img').getAttribute('src');
        var photoAddToBottom = document.createElement('img');
        photoAddToBottom.setAttribute('src', photoSrc);
  
        var imageGallery = document.getElementById('image-gallery');
        imageGallery.appendChild(photoAddToBottom);
      });
    });
  
    // Event listener for "Toggle Theme" button
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('darkMode');
      document.querySelectorAll('.darkMode').forEach(function(element) {
        element.style.transition = 'background-color 0.5s ease, color 0.5s ease';
      });
  
      symbolsOutlined.forEach(function(element) {
        if (element.textContent === 'dark_mode') {
          element.textContent = 'light_mode';
        } else {
          element.textContent = 'dark_mode';
        }
      });
    });
  });
  