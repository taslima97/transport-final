(function ($) {
    "use strict";
    $('.product-d-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.thumbnail_slider',

    });
    $('.thumbnail_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-d-slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        margin: 10,
    }); 
})(jQuery);