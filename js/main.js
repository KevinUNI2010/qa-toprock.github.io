console.log("main");

var swiper = new Swiper(".swiper__home", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    //     el: ".swiper-pagination",
    clickable: true,
  },

  //   on: {
  //     slideNextTransitionEnd: function (index) {
  //       let numero_equipos = document.querySelectorAll(".swiper-slide").length;
  //       if (index.activeIndex == numero_equipos - 1) {
  //         swiper.disable();
  //         swiper.slideTo(3, 0, false);
  //       }
  //       console.log("index.activeIndex", index.activeIndex);
  //       console.log("numero equipos", numero_equipos);
  //     },
  //   },
});

// $(document).ready(function () {
//   console.log("jquery");
//   window.addEventListener("scroll", function () {
//     const scrollPosition = window.scrollY;
//     const windowHeight = window.innerHeight;
//     const documentHeight = document.documentElement.scrollHeight;

//     // Si el usuario se desplaza cerca del final de la página, carga más contenido
//     if (scrollPosition + windowHeight >= documentHeight - 100) {
//       cargarMasContenido();
//     }
//   });

// });

// header
let header__hamburger = document.getElementById("header__hamburger");
header__hamburger.addEventListener("click", (e) => {
  if (header__hamburger.classList.contains("header__hamburger-active")) {
    header__hamburger.classList.remove("header__hamburger-active");
    header__enlaces.classList.remove("header__enlaces-active");
  } else {
    header__hamburger.classList.add("header__hamburger-active");
    header__enlaces.classList.add("header__enlaces-active");
  }
});

// data aos
// AOS.init();
// document.addEventListener("aos:out", ({ detail }) => {
//   console.log("animated out", detail);
// });

//  deswvanecer
const checkpoint = 300;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".front").style.opacity = opacity;

  //header
  if (currentScroll >= screen.height - 150) {
    document.querySelector(".header__conocenos").classList.add("active");
  } else {
    document.querySelector(".header__conocenos").classList.remove("active");
  }
});

// galeria
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper__galeria = new Swiper(".swiper__galeria", {
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination__galeria",
    type: "progressbar",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
  //   navigation: {
  //     nextEl: ".swiper-button-next__galeria",
  //     prevEl: ".swiper-button-prev__galeria",
  //   },
});
