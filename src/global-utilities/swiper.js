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
  on: {
    init: function () {
      // Fix centering at start
      this.slideToLoop(0, 0);
    },
  },
});

// Available Rooms Slider Swiper
const roomsSwiper = new Swiper('.rooms-swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 2,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.rooms-swiper-button-next',
    prevEl: '.rooms-swiper-button-prev',
  },
  on: {
    init: function () {
      // Fix centering at start
      this.slideToLoop(0, 0);
    },
  },
});

// document
//   .querySelector('.rooms-swiper-button-next')
//   .addEventListener('click', () => {
//     if (roomsSwiper.isEnd) {
//       setTimeout(() => {
//         roomsSwiper.slideTo(0, 500); // slide to first with smooth 500ms animation
//       }, 150);
//     }
//   });

// document
//   .querySelector('.rooms-swiper-button-prev')
//   .addEventListener('click', () => {
//     if (roomsSwiper.isBeginning) {
//       setTimeout(() => {
//         roomsSwiper.slideTo(roomsSwiper.slides.length - 1, 500);
//       }, 150);
//     }
//   });

// Amenities slider
const amenitiesSwiper = new Swiper('.amenities-swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  grabCursor: true,
  slideToClickedSlide: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.amenities-swiper-button-next',
    prevEl: '.amenities-swiper-button-prev',
  },
  pagination: {
    el: '.amenities-swiper-pagination',
    clickable: true,
  },
});

// Testimonials slider
const testimonialSwiper = new Swiper('.testimonials-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.testimonials-swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: (number) => (number < 10 ? `${number}` : number),
    formatFractionTotal: (number) => (number < 10 ? `${number}` : number),
  },
  navigation: {
    nextEl: '.testimonials-swiper-button-next',
    prevEl: '.testimonials-swiper-button-prev',
  },
});

// Initialize modal Swipers and apply custom next/prev looping behavior
document.querySelectorAll('.modal-swiper').forEach((swiperEl) => {
  const nextBtn = swiperEl.parentElement.querySelector(
    '.modal-swiper-button-next'
  );
  const prevBtn = swiperEl.parentElement.querySelector(
    '.modal-swiper-button-prev'
  );
  const pagination = swiperEl.parentElement.querySelector(
    '.modal-swiper-pagination'
  );

  const modalSwiper = new Swiper(swiperEl, {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 16,
    grabCursor: true,
    centeredSlides: true,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    pagination: {
      el: pagination,
      clickable: true,
    },
  });

  // Custom looping: Go to first if next is clicked at end
  nextBtn.addEventListener('click', () => {
    if (modalSwiper.isEnd) {
      setTimeout(() => {
        modalSwiper.slideTo(0, 500);
      }, 150);
    }
  });

  // Custom looping: Go to last if prev is clicked at beginning
  prevBtn.addEventListener('click', () => {
    if (modalSwiper.isBeginning) {
      setTimeout(() => {
        modalSwiper.slideTo(modalSwiper.slides.length - 1, 500);
      }, 150);
    }
  });
});

// Initialize allrooms-swiper for main room switching
const allRoomsSwiper = new Swiper('.allrooms-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  grabCursor: true,
  navigation: {
    nextEl: '.room-button-next',
    prevEl: '.room-button-prev',
  },
});
