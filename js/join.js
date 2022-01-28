$(document).ready(function () {
	$('.slider').slick({
	});
});

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
	autoplay: true,
  autoplaySpeed: 2000,
});

$(".js-menu").on("click", function () {
	$(this).next().slideToggle();
 });