jQuery(document).ready(function($) {
	//Menu Burger Open
	$('.burger').click(function () {
  		$(this).toggleClass('open');
});
	//Show Menu
	$('.burger').click(function(event) {
		$('.menu-mobile').slideToggle();	
	});
	
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 4000,
		smartSpeed: 1000
	});
});