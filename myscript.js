/**
 * Write your code here
 */

$(document).ready(function(){
    
    $('.addToTop').on('click', function(){
        let photoSrc = $(this).closest('.image-wrapper').find('img').attr('src');
        
        let photoAddToTop = $('<img>').attr('src', photoSrc);

        $('#image-gallery').children('h2').after(photoAddToTop);
        
        
    });

    $('.addToBottom').on('click', function(){
        let photoSrc = $(this).closest('.image-wrapper').find('img').attr('src');
        
        let photoAddToButtom = $('<img>').attr('src', photoSrc);

        $('#image-gallery').append(photoAddToButtom);
        
        
    });


    $('#theme-toggle').click(function() {
        $('body').toggleClass('darkMode');

        $(".darkMode").css({
            transition: "background-color 0.5s ease, color 0.5s ease"
          })
    
        $(this).children('.material-symbols-outlined').text(function(index, currentText) {
            if (currentText === 'dark_mode') {
                return 'light_mode';
            } else {
                return 'dark_mode';
            }
        });
    }); 

});


    
