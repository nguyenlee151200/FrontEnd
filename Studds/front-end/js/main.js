
new WOW().init();
$(document).ready(function () {
    paceOptions = {
        ajax: true,
        document: true,
        eventLag: false
    };
    Pace.on('done', function () {
        $('.page-loader-inner').delay(500).animate({ top: '-30%', opacity: '0' }, 3000, $.bez([0.19, 1, 0.22, 1]));


        $('#page-loader').delay(1500).animate({ top: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));

        TweenMax.from(".p", 2, {
            delay: 1.8,
            y: 10,
            opacity: 0,
            ease: Expo.easeInOut
        })
    });


    $('.mobile-search-trigger').click(function () {
        $('.search-form').toggleClass('open');
    })
    $('.mega-trigger').hover(function () {
        $('.mega-menu').show();
        returnValue();
        // if($('.mega-menu .trigger-nav-wrap trigger-nav li a').attr('data-target') == $('.mega-menu .col-lg-10 .mega-showcase-wrap').attr('id')){
        //     $('.mega-menu .mega-showcase-wrap').attr('id').show();
        // }
    })
    $('#scene .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        autoplay: true,
        // smartSpeed:1,
    });
    $('.special-month .owl-carousel').owlCarousel({
        dots: true
    })
    $('.gallery-slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        center: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            1000: {
                items: 3,
                dots: false,
            }
        }
    });
    $('.cat-slider-phone.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        center: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            1000: {
                items: 0,
                // dots:false,
            }
        }
    });
    $('.helmet-slider.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        autoplay: true,
    });
    $('.homeblog-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        center: true,
        margin: 40,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })
    $('.about-sing .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        dots: true,
        items: 1,
    })
    $('.award-sec .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        dots: false,
        center: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })
    $('.home-ray0.fixed-ray').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 2200) {
            $('.fixed-ray').show();
            $('.gototop').show();
        }
        else {
            $('.fixed-ray').hide();
            $('.gototop').hide();

        }
    })
    $('#back').click(function(){
        $('html, body').animate({scrollTop:0},'300');
    })
   
});
var data = $('.mega-menu  trigger-nav li a').attr('data-target');
var id1 = $('.mega-menu .col-lg-10 .mega-showcase-wrap').attr('id')
function returnValue() {
    $('.mega-menu .trigger-nav-wrap .trigger-nav li a').hover(function () {
        // if ( data == id1 ) {
        //     $('id1').show();
        // }
        console.log(id1);
        console.log(data);
    })
}

