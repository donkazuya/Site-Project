jQuery(document).ready(function($) {
	$('#carregando').fadeOut('slow');

	//Menu Burger Open
	$('.burger').click(function () {
  		$(this).toggleClass('open');
	});

	//Show Menu
	$('.burger').click(function(event) {
		$('.menu-mobile').slideToggle();	
	});
	

	$("#carousel-main .owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 4000,
		smartSpeed: 1000,
		touchDrag: false,
		mouseDrag: false,
		freeDrag: true,
		responsive: {
			0:{
				nav: false
			},
			768:{
				nav: true
			}
		}
	});

	$(".portfolio-text .owl-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 1000,
		responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items:1
		    },
		    768 : {
		        items: 3
		    }
		}
	});

	
});