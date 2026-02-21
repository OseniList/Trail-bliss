// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function sliderOfferFunc() {
    const swiper = new Swiper('#swiper-offers', {
        // Optional parameters
        loop: true,
        grabCursor: true,
        spaceBetween: 30,

        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        
        navigation: {
            nextEl: "#offer-btn-next",
            prevEl: "#offer-btn-prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            760: {
                slidesPerView: 2,
            },
            820: {
                slidesPerView: 2,
            },
            1530: {
                slidesPerView: 3,
            }
        },

    });
}

export default sliderOfferFunc;
