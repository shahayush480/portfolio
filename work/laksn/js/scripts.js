/*
Author       : Themes_Mountain
Template Name: Alice - App Landing Page HTML Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/*START MENU JS*/
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

			$(window).on('scroll', function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/ 

		/*START SCREENSHOT SLIDER JS*/	
		 $('.center slider').slick({
			 dots: true,
			 infinite: true,
			 centerMode: true,
			 slidesToShow: 5,
			 slidesToScroll: 3
		  });
		  
		$('.center').slick({
		  centerMode: true,
		  centerPadding: '60px',
		  slidesToShow: 3,
		  responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			  }
			}
		  ]
		});	
		/*END SCREENSHOT SLIDER JS*/

		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/		
		
		/* START FEATURE JS */
			$("#feature-slider").owlCarousel({
			    items:1,
				itemsDesktop:[1000,1],
				itemsDesktopSmall:[980,1],
				itemsTablet:[768,1],
				itemsMobile:[650,1],
				pagination:true,
				navigation:false,
				slideSpeed:1000,
				autoPlay:false
			});
		/* END TESTIMONIAL JS */
		
		/* START TESTIMONIAL JS */
			$("#testimonial-slider").owlCarousel({
			    items:1,
				itemsDesktop:[1000,1],
				itemsDesktopSmall:[980,1],
				itemsTablet:[768,1],
				itemsMobile:[650,1],
				pagination:true,
				navigation:false,
				slideSpeed:1000,
				autoPlay:false
			});
		/* END TESTIMONIAL JS */	
	
		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 5,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/
		
	}); 		
	
	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */	
	
	/*START WOW ANIMATION JS*/
	   AOS.init();
	/*END WOW ANIMATION JS*/	
				
})(jQuery);


  

