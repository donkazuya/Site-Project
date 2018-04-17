$(window).on('load', function() {
	$('.loading').fadeOut(function() {
		$(this).remove();
	});
});

function contador() {
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
}

$(window).scroll(function() {
   var hT = $('#facts').offset().top,
       hH = $('#facts').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
     contador(); 
   } 
});

jQuery(document).ready(function($){

		//Menu Burger Open
		$('.burger').click(function () {
	  		$(this).toggleClass('open');
		});

		//Show Menu
		$('.burger').click(function(event) {
			$('.menu-mobile').slideToggle();	
		});

	$('#inicio').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	});

	$('.equipe').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1,
		        infinite: true
		      }
		    }
		  ]
	});



});