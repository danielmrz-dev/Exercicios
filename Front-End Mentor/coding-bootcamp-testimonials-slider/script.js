const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
