// import Swiper bundle with all modules installed
// import styles bundle
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function initTestimonialsSwiper() {
    const testimonialsSwiper = document.querySelector('#swiper-testimonials');
    if ( !testimonialsSwiper === undefined ) return;

    const swiper = new Swiper(testimonialsSwiper, {
        // Optional parameters
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        spaceBetween: 24,

        breakpoints: {
            821: {
                slidesPerView: 2,
                centeredSlides: false,
            },
        },

        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: "#testimonials-btn-next",
            prevEl: "#testimonials-btn-prev",
        },
    });
}

export default initTestimonialsSwiper;
