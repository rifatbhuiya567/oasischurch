(function() {
    "use strict";

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 80) {
            $(".main-header").addClass("sticky-nav");
        } else {
            $(".main-header").removeClass("sticky-nav");
        }
    });
    // Window Scroll

    var scrollLink = $(".scroll-link");

    $(scrollLink).on("click", function (event) {
        event.preventDefault();
        $("html,body").animate(
            {
            scrollTop: $(this.hash).offset().top - 120,
            },
            300
        );
    });

    $(window).on("scroll", function () {
        var scrollTop = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionhead = $(this.hash).offset().top - 120;
            if (scrollTop >= sectionhead) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        });
    });
    // Scroll Spay Navigation

    function gallerySlide() {
        let slide = $('.gallery-slide');

        slide.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: '.next',
            prevArrow: '.prev',
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }
    gallerySlide();
    // Gallery Slider
}(jQuery));