const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,  // Exibir 4 slides por vez em telas grandes
    spaceBetween: 20,  // Espaçamento entre os slides
    loop: true,  // Permitir looping dos slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1, // 1 slide em telas muito pequenas
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2, // 2 slides em telas pequenas
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3, // 3 slides em tablets
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4, // 4 slides em desktops
            spaceBetween: 25,
        },
    },
});
