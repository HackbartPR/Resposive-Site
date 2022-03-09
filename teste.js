//FUNÇÃO UTILIZADA PARA DESENVOLVER O SWIPER
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,

  mousewheel: true,
  keyboard: true,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  },
})
