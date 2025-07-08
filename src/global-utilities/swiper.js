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

// Features banner
const featuresSwiper = new Swiper('.flight-features-swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 16,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loopedSlides: 20,
  breakpoints: {
    0: { slidesPerView: 1.5 },
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 5 },
    1440: { slidesPerView: 6 },
    1720: { slidesPerView: 8 },
  },
});
