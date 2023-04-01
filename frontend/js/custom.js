/* Theme Name: Blogen - Blog & Portfolio HTML Template
   Version: 1.0
   Created: July 2019
   File Detail: Core JS file of the template
*/

(function ($) {

        'use strict';
      	
		$("body").on("click", "#menu-open-btn", function() {  	
          $('#menu-content').css('width', '100%');
        });

		$("body").on("click", "#menu-close-btn", function() {  		
            $('#menu-content').css('width', '0%');
        });

		$("body").on("click", "#search-open-btn", function() {  		
          $('#search-content').css('width', '100%');
        });

		$("body").on("click", "#search-close-btn", function() {  		
            $('#search-content').css('width', '0%');
        });
   
        $('.home-main-slider').owlCarousel({
          animateOut: 'fadeOut',
          autoplay:false,
          loop:true,
          nav:true,
          navText: ["<i class='mdi mdi-chevron-double-left'></i>", "<i class='mdi mdi-chevron-double-right'></i>"],
          dots:false,
          items:1,
          margin:0,
          stagePadding:0,
          smartSpeed:1000
        });

        $('#menu-all-pages').unwrap();
        $( "#fullwidthmenu li.menu-item-has-children>a" ).after("<span class='menu-arrow'></span>" );
        $('.menu-arrow').on('click', function(){
          var element = $(this).parent('li');
          if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(200);
          }
          else {
            element.addClass('open');
            element.children('ul').slideDown(200);
            element.siblings('li').children('ul').slideUp(200);
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(200);
          }
        });

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        }); 

		$("body").on("click", ".back-to-top", function() { 	
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });

        $(window).on('load', function() {
          var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            columnWidth: 160,
            horizontalOrder: true
            });
          
        $("body").on("click", ".port-filter a", function() { 		  
            $('.port-filter a.current').removeClass('current');
            $(this).addClass('current');
            var filterValue = $( this ).attr('data-filter');
            $grid.isotope({ filter: filterValue });
          });
        });
})(jQuery)