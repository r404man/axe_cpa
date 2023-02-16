const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: true,
});

const swiper2 = new Swiper(".products-slider", {
  loop: true,
  slidesPerView: 4,
  autoplay: true,
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 4,
    },
  },
});
