// Hero Slider Swiper
const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 800,
});

// Reviews Slider Swiper// Initialize Swiper
const reviewsSwiper = new Swiper('.reviews-swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 1.1,
  grabCursor: true,
  centeredSlides: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: { slidesPerView: 1.1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

let resumeTimeout = null;

// Pause on button click
const viewMoreButtons = document.querySelectorAll('.swiper-slide .btn-black');

viewMoreButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    reviewsSwiper.autoplay.stop();

    // Clear any existing timeout
    clearTimeout(resumeTimeout);

    // Resume autoplay after 10 seconds
    resumeTimeout = setTimeout(() => {
      reviewsSwiper.autoplay.start();
      resumeTimeout = null;
    }, 6000);
  });
});

// Resume autoplay if clicked outside any .btn-black
document.addEventListener('click', (e) => {
  const isButtonClick = e.target.closest('.btn-black');
  if (!isButtonClick && resumeTimeout !== null) {
    clearTimeout(resumeTimeout);
    reviewsSwiper.autoplay.start();
    resumeTimeout = null;
  }
});
