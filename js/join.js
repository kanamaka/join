$(document).ready(function () {
	$('.slider').slick({
	});
});



$('.slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
	autoplay: true,
  autoplaySpeed:2000,
  dots:true,
	arrows: true,
	infinite: true,
	responsive: [{
		breakpoint: 900,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}]
});


$('.js-menu').on("click", function () {
	$(this).next().slideToggle();
 });


 $(window).scroll(function (){
	$('.fadein-top').each(function(){
			var elemPos = $(this).offset().top,
					scroll = $(window).scrollTop(),
					windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 100){
						$(this).addClass('scrollin');
					}
			});
	});

 $(window).scroll(function (){
	$('.fadein').each(function(){
			var elemPos = $(this).offset().top,
					scroll = $(window).scrollTop(),
					windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 100){
						$(this).addClass('scrollin');
					}
			});
	});