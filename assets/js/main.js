  $(document).ready(function() {
    // Toggle the 'show' class on nav-list when nav-toggle-btn is clicked
    $('.nav-toggle-btn').on('click', function(event) {
        event.stopPropagation();
        $('.nav-items-wrapper').toggleClass('show');
    });

    // Remove the 'show' class when clicking anywhere else on the body
    $('body').on('click', function() {
        $('.nav-items-wrapper').removeClass('show');
    });

    // Prevent the event from bubbling up to body when clicking nav-items-wrapper
    $('.nav-items-wrapper').on('click', function(event) {
        event.stopPropagation();
        $(this).removeClass('show');
    });
});

// fixed header
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 200) {
        $("body").addClass("fixed-header");
    } else {
        $("body").removeClass("fixed-header");
    }
});

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
            items: 3
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

var swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'coverflow',
    centeredSlides: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 3,
    initialSlide: 3,
    keyboardControl: true,
    mousewheelControl: false,
    lazyLoading: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 3,
        }
    }
});