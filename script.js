document.addEventListener('DOMContentLoaded', () => {
  //CRIAR FUNÇÃO PARA ABRIR OU FECHAR O ICONES DE MENU
  const buttonsToggleMenu = document.querySelectorAll('.toggleMenu')
  buttonsToggleMenu.forEach((element) => {
    element.addEventListener('click', toggleMenu)
  })
  //CRIAR FUNÇÃO PARA ABRIR OU FECHAR OS LINKS DO MENU
  const buttonsCloseMenu = document.querySelectorAll('.closeMenu')
  buttonsCloseMenu.forEach((element) => {
    element.addEventListener('click', closeMenu)
  })

  //CRIAR FUNÇÃO PARA EFEITOS DO SCROLL DA PÁGINA
  window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY

    //APARECER SHADOW APÓS O SCROLL TIVER UM TAMANHO MAIOR QUE O HEADER
    const header = document.getElementById('header')
    const headerHeight = header.offsetHeight
    scrollHeight > headerHeight
      ? header.classList.add('shadow')
      : header.classList.remove('shadow')

    //ADICIONAR A FUNÇÃO DE APARECER E ESCONDER O BUTON BACK TO TOP
    const buttonBackToTop = document.getElementById('buttonBackToTop')
    const homeHeight = document.getElementById('home').offsetHeight
    scrollHeight > homeHeight
      ? buttonBackToTop.classList.add('show')
      : buttonBackToTop.classList.remove('show')

    //ATIVAR OS LINKS MENU QUANDO A SEÇÃO ESTIVER EM FOCUS
    const checkPoint = window.scrollY + 150
    const sections = document.querySelectorAll('main section[id]')

    sections.forEach((section) => {
      let sectionTop = section.offsetTop
      let sectionHeight = section.offsetHeight
      let sectionBottom = sectionTop + sectionHeight - 200
      let sectionId = section.getAttribute('id')

      if (checkPoint >= sectionTop && checkPoint <= sectionBottom) {
        document
          .querySelector('#headerMenu ul li a[href*=' + sectionId + ']')
          .classList.add('onFocus')
      } else {
        document
          .querySelector('#headerMenu > ul > li a[href*=' + sectionId + ']')
          .classList.remove('onFocus')
      }
    })
  })
})

//ADICIONAR OU REMOVER A CLASSE SHOW DO MENU
function toggleMenu() {
  const divHeader = document.getElementById('divHeader')
  divHeader.classList.toggle('showMenu')
}

function closeMenu() {
  const divHeader = document.getElementById('divHeader')
  divHeader.classList.remove('showMenu')
}

//FUNÇÃO UTILIZADA PARA DESENVOLVER O SWIPER
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,

  mousewheel: true,
  keyboard: true,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
      slidesPerGroup: 2,
    },
  },
})

//FUNÇÃO PARA ATIVAR A API SCROLL REVIEW
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500,
  reset: true,
})
scrollReveal.reveal(
  `#header,
   #divImageHome, #divTextHome,
   #divImageAbout, #divTextAbout,
   #divTextServices, #divCards ul li,
   #divTextTestimonials, #testimonials .swiper,
   #divTextContact, #divAddressContact,
   #divTextFooter, #divAddressFooter`
)
