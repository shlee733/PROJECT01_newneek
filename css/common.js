const $ham = document.querySelector(".ham");
const $hd = document.querySelector(".hd");
$ham.addEventListener("click", function () {
  $hd.classList.toggle("on");
});

let slide1 = new Swiper(".slide1", {
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  slidesPerView: 1.5,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 50,
    },
  },
});
