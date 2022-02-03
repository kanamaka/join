$(document).ready(function () {
  var time = 2;
  var $bar, $slick, isPause, tick, percentTime;

  $slick = $(".slider");
  $(".slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $bar = $(".slider-progress .progress");
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 9);
      $bar.css({
        width: percentTime + "%",
      });
      if (percentTime >= 100) {
        $slick.slick("slickNext");
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    $bar.css({
      width: 0 + "%",
    });
    clearTimeout(tick);
  }
  startProgressbar();
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
