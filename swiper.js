const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
    navigation: {
        nextEl: ".swipe-right",
        prevEl: ".swipe-left",
    },


    breakpoints: {
        500: {
            slidesPerView: 1.5,
        },
        800: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3.5,
        },
    }
});