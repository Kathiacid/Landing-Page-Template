var slide = new Swiper(".carousel", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    autoplay: {
        delay: 1500, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: true, 
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1560: {
            slidesPerView: 3
        }
    }
});