// swiperHero
const swiperHero = new Swiper('.swiperHero', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',
});

// swiperRoom
const swiperRooms = document.querySelectorAll('.swiperRoom');

swiperRooms.forEach(function (swiperRoom, index) {
    const swiper = new Swiper(swiperRoom, {
        loop: true,
        pagination: {
            el: swiperRoom.querySelector('.swiper-pagination'),
            clickable: true,
        },
        autoplay: false,
    });

    swiperRoom.addEventListener('mouseenter', function () {
        swiper.params.autoplay = {
            delay: 1500,
            disableOnInteraction: false,
        };
        swiper.autoplay.start();
        swiper.slideNext(500);
    });

    swiperRoom.addEventListener('mouseleave', function () {
        swiper.autoplay.stop();
    });
});

// fancybox
Fancybox.bind("[data-fancybox]", {});