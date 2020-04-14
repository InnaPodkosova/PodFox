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
            arrows: true,
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
                    breakpoint: 520,
                    settings: {
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
        autoplay: false,
        autoplaySpeed: 6000,
        dots: false,
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
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    autoplay: true,
                }
            }
        ]
    });

    /*============================================ gallery logo clients==========================================*/


    $('.our-clients').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false
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


tabControl();

/*
We also apply the switch when a viewport change is detected on the fly
(e.g. when you resize the browser window or flip your device from
portrait mode to landscape). We set a timer with a small delay to run
it only once when the resizing ends. It's not perfect, but it's better
than have it running constantly during the action of resizing.
*/
var resizeTimer;
$(window).on('resize', function(e) {
    // disactive tabs if mobile view
    ifMobileView();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {

        tabControl();


    }, 250);
});

/*
The function below is responsible for switching the tabs when clicked.
It switches both the tabs and the accordion buttons even if
only the one or the other can be visible on a screen. We prefer
that in order to have a consistent selection in case the viewport
changes (e.g. when you esize the browser window or flip your
device from portrait mode to landscape).
*/
// disactive tabs if mobile ver
const  minWidth = 376;
function ifMobileView() {
    // disactive tabs if mobile view
    if (window.screen.width < minWidth){

        // corporate_tab1 > remove  active
        document.getElementById("corporate_tab1").classList.remove('active');
        //  > remove  active
        document.getElementById("family_tab1").classList.remove('active');
        //  > remove  active
        document.getElementById("maci_tab1").classList.remove('active');
    }
}

function tabControl() {
    var tabs = $('.tabbed-content').find('.tabs');
    if(tabs.is(':visible')) {
        tabs.find('a').on('click', function(event) {
            event.preventDefault();
            var target = $(this).attr('href'),
                tabs = $(this).parents('.tabs'),
                buttons = tabs.find('a'),
                item = tabs.parents('.tabbed-content').find('.item');
            buttons.removeClass('active');
            item.removeClass('active');
            $(this).addClass('active');
            $(target).addClass('active');
        });
    } else {
        $('.item').off('click');
        $('.item').on('click', function() {
            // console.log(this,$(this).hasClass('active'))
            if($(window).width() < 800) {
                if ($(this).hasClass('active')) {
                    let container = $(this).parents('.tabbed-content'),
                        currId = $(this).attr('id'),
                        items = container.find('.item');
                    container.find('.tabs a').removeClass('active');
                    items.removeClass('active');
                } else {
                    let container = $(this).parents('.tabbed-content'),
                        currId = $(this).attr('id'),
                        items = container.find('.item');
                    container.find('.tabs a').removeClass('active');
                    items.removeClass('active');
                    $(this).addClass('active');
                    container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
                }
            }else{
                let container = $(this).parents('.tabbed-content'),
                    currId = $(this).attr('id'),
                    items = container.find('.item');
                container.find('.tabs a').removeClass('active');
                items.removeClass('active');
                $(this).addClass('active');
                container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
            }
        });
    }
}




