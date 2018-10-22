 $(function () {


 // Modal window

    $('.button, .btn-footer').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    }); 

 // Smooth movement

    $('.go_to').click( function(){ 
        var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); 
        }
        return false;
    });

 // Parallax-bg

    if ($(window).width() > 760) { 
        $window = $(window);
        $('[data-type="background"]').each(function(){
            var $bgobj = $(this); 
            $(window).scroll(function() {
                var yPos = -($window.scrollTop() / $bgobj.data('speed'));
                var coords = '50% '+ yPos + 'px';
                $bgobj.css({ backgroundPosition: coords });
            });
       }); 
    }

// Slik slider

   $('.reviews__slider').slick({
        dots: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

});