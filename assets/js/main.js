// fixed header
// $(window).scroll(function () {
//     var scrollTop = $(window).scrollTop();
//     if (scrollTop >= 200) {
//         $("body").addClass("fixed-header");
//     } else {
//         $("body").removeClass("fixed-header");
//     }
// });

//Service Slider Js
$('.service-items-wrapper').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,    
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1000: {
            items: 4
        }
    }
});


//Airlines Slider Js
$('.airlines-items-wrapper').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,    
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});
