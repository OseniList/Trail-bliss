// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function sliderHeroFunc() {

    const swiper = new Swiper('#swiper-hero', {
        // Optional parameters
        slidesPerView: 1,
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        spaceBetween: 30,

        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });
}

export default sliderHeroFunc;
