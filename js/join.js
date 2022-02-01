$('.slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
	autoplay: true,
  autoplaySpeed:2000,
  dots:true,
	arrows: true,
	infinite: true,
	responsive: [{
		breakpoint: 768,
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
	$('.fadein').each(function(){
			var elemPos = $(this).offset().top,
					scroll = $(window).scrollTop(),
					windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 50){
						$(this).addClass('scrollin');
					}
			});
	});