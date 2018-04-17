$(window).on('load', function() {
	$('.loading').fadeOut(function() {
		$(this).remove();
	});
});
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

	$('.count').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 6000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});
});