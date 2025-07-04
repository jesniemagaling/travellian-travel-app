const swiper = new Swiper('.swiper', {
  slidesPreview: 1,
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: [0, 0, 0],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
  loop: true,
  direction: 'horizontal',

  autoplay: {
    delay: 6000,
  },

  speed: 600,
  spaceBetween: 100,
});
