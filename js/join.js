$(document).ready(function () {
	$('.slider').slick({
			autoplay: true
	});
});

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1
});