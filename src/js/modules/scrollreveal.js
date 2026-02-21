import ScrollReveal from "scrollreveal";

// Базовые настройки
ScrollReveal({
    distance: '60px',
    duration: 1000,
    reset: true,
    delay: 100,

    // Сброс стилей transform and z-index
    afterReveal: function (el) {
        el.style.transform = 'none'; // Сбрасываем трансформацию
        el.style.zIndex = '1';      // Принудительно задаем слой, если нужно
    }
})

// Сброс стилей аналогичный вариант
// function myCallback (el) {
//     el.classList.remove('is-animating');
//     el.classList.add('is-visible');
// }

function scrollrevealFunc() {
    ScrollReveal().reveal('.header__list-1', {
        origin: 'left',
    });
    ScrollReveal().reveal('.header__list-2', {
        origin: 'right',
    });
    ScrollReveal().reveal('.logo', {
        origin: 'top',
    });
    ScrollReveal().reveal('.header__mobile-btn', {
        origin: 'top',
        afterReveal: function (el) {
            el.style.zIndex = '999';      // Принудительно задаем слой, если нужно
        }
    });
    ScrollReveal().reveal('.hero__title', {
        origin: 'left',
    });
    ScrollReveal().reveal('.hero__desc', {
        origin: 'right',
    });
    ScrollReveal().reveal('.hero__desc-wrapper', {
        origin: 'right',
        delay: 0,
    });
    ScrollReveal().reveal('.hero-btn', {
        origin: 'top',
        delay: 500,
    });
    ScrollReveal().reveal('.hero__slider', {
        origin: 'top',
    });
    ScrollReveal().reveal('.mission__desc-wrapper', {
        origin: 'left',
    });
    ScrollReveal().reveal('.mission__img-wrapper', {
        origin: 'right',
    });
    ScrollReveal().reveal('.feature__heading', {
        origin: 'top',
    });
    ScrollReveal().reveal('.feature__cards', {
        origin: 'bottom',
    });
    ScrollReveal().reveal('.mission__content', {
        origin: 'left',
    });
    ScrollReveal().reveal('.mission__content', {
        origin: 'left',
    });
    ScrollReveal().reveal('.mission__picture', {
        origin: 'right',
    });
    ScrollReveal().reveal('.offer__title ', {
        origin: 'left',
    });
    ScrollReveal().reveal('.offer__controls ', {
        origin: 'right',
    });
    ScrollReveal().reveal('.testimonials__heading', {
        origin: 'left',
    });
    ScrollReveal().reveal('.testimonials__swiper-wrapper', {
        origin: 'right',
    });
    ScrollReveal().reveal('.faq__title-wrapper', {
        origin: 'top',
    });
    ScrollReveal().reveal('.faq__picture', {
        origin: 'left',
    });
    ScrollReveal().reveal('.faq__content', {
        origin: 'right',
    });
    ScrollReveal().reveal('.footer__copyright', {
        origin: 'left',
    });
    ScrollReveal().reveal('.footer__socials', {
        origin: 'right',
    });

}

export default scrollrevealFunc;