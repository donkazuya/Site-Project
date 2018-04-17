jQuery(document).ready(function($){
	$('#inicio').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	});

	$('.equipe').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false
	});
});