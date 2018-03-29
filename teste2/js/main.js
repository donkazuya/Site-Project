jQuery(document).ready(function($) {
	//botão moblie
	$('.burger').click(function () {
  $(this).toggleClass('open');
});
	$('.burger').click(function(event) {
		$('.menu-mobile').slideToggle();	
	});
	//esconder menu
	
});