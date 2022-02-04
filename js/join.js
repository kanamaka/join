var Swiper = new Swiper(".swiper", {
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false,
  },

  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

$(".js-menu").on("click", function () {
  $(this).next().slideToggle();
});

$(window).scroll(function () {
  $(".fadein").each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 50) {
      $(this).addClass("scrollin");
    }
  });
});
