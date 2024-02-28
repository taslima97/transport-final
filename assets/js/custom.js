 

(function ($) {
    "use strict";

    $(".banner_slider_wrapper").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        dots:true,
        loop: true,
        margin: 0,
        nav: false,
        singleItem: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 6000,
        navText: [
            '<span class="fas fa-angle-left"></span>',
            '<span class="fas fa-angle-right"></span>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });

    // home two banner slider 
    $(".banner-slider-wrapper-two").owlCarousel({
        animateOut: 'fadeOut', // Animation effect for slide out
        animateIn: 'fadeIn',
        dots:false,
        loop: true,
        margin: 0,
        nav: true,
        singleItem: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 6000,
        navText: [
            '<span class="fas fa-angle-left"></span>',
            '<span class="fas fa-angle-right"></span>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });



    // service slider 
    $('.service_slider_wrapper').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    

    // home team slider 
    $('.team_slider_wrapper').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

    // home-two service slider 
    $('.home_two_service_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: true,
        navText: [
            '<span class="fas fa-angle-left"></span>',
            '<span class="fas fa-angle-right"></span>'
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3
            }
        }
    });

    // home-2 testimonial slider
    $('.home_two_testi_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: true,
        navText: [
            '<span class="fas fa-angle-left"></span>',
            '<span class="fas fa-angle-right"></span>'
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1
            }
        }
    });

    // home-2 partner slider 
    $('.partner_slider_wrapper').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 100,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 5
            }
        }
    });


        // counter
        jQuery(document).ready(function ($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
})(jQuery);