const swiper = new Swiper('.reviews', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 4,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});