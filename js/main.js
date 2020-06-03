(function ($) {
    "use strict";


    var $body = $("body"),
            $window = $(window);


    /*===========================================preload===========================================*/


    $(window).on('load', function () {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");
        ;
    });

    /*===========================================counter-up===========================================*/

    $('.Count').each(function () {
        "use strict";
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 15000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });



    /*============================= Navigation Section ==============================*/



    $window.on('scroll', function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-default").addClass("small");
        } else {
            $(".navbar-default").removeClass("small");
        }
    });


    /*============================= Smoothscroll js ==============================*/

    $('.navbar-default').on('click', 'a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 1
        }, 1000);
        event.preventDefault();
    });


    /*====================================== jquery scroll spy ========================================*/

    $body.scrollspy({
        target: ".navbar-collapse",
        offset: 15

    });

    /*============================================carousel==========================================*/

    $('.carousel').carousel({
        interval: 3000
    });

    /*============================================ gallery photo party==========================================*/

    $('.works-slideshow .team-item').each(function() {
        var slider = $(this);
        slider.slick({
            arrows: false,
            dots: true,
            accessibility: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
                {
                    breakpoint: 565,
                    settings: {
                        arrows: true,
                        dots: false,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        arrows: true,
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        var sLightbox = $(this);
        sLightbox.slickLightbox({
            src: 'src',
            itemSelector: '.team-image img'
        });
    });

    /*============================================ gallery video party==========================================*/

    $('#main-slider-video').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        arrows: false,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                autoplay: true,
            }
        },
            {
            breakpoint: 565,
            settings: {
                arrows: true,
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    autoplay: true,
                }
            }
        ]
    });

    /*============================================ gallery logo clients==========================================*/

    $('.our-clients').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 6000,
        infinite: true,
        adaptiveHeight: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /*============================================ clients reviews ==========================================*/


    // Init fancyBox
    $().fancybox({
        selector : '.slick-slide:not(.slick-cloned)',
        hash     : false
    });

    // Init Slick
    $('.my-gallery').slick({
        slidesToShow   : 3,
        slidesToScroll : 3,
        infinite : true,
        dots     : false,
        arrows   : false,
        responsive : [
            {
                breakpoint : 960,
                settings : {
                    slidesToShow   : 1,
                    slidesToScroll : 1
                }
            }
        ]
    });

    /*============================================ bootstrap - datepicker ==========================================*/



})(jQuery);






