;(function($){
    
    // header slider
    $('.header_main_slider_area, .holinger_single_slider_main').owlCarousel({
        items:1,
        margin:0,
        stagePadding:0,
        dots: true,
        smartSpeed:450,
        mouseDrag:false,
        autoplay: true
    }); 
    
    // header carousel 
    $('.feature_carusol').owlCarousel({
        items:3,
        margin:0,
        stagePadding:0,
        dots: false,
        smartSpeed:450,
        nav:true,
        mouseDrag:false,
        navText: ['',''],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            991:{
                items:3
            },
            1000:{
                items:3
            },
        }
    }); 
    
    // best area slider
    $(window).load(function() {
        // The slider being synced must be initialized first
        $('#best_area_carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 200,
            itemMargin: 5,
            asNavFor: '#best_area_slider',
            controlsContainer: $(".custom-controls-container"),
            customDirectionNav: $(".custom-navigation a"),
            responsive:{
                0:{
                    items:1
                },
                700:{
                    items:4
                },
                991:{
                    items:3
                },
                1000:{
                    items:3
                },
            }
        });

        $('#best_area_slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#best_area_carousel",
            directionNav: false,
            responsive:{
                0:{
                    items:1
                },
                700:{
                    items:4
                },
                991:{
                    items:3
                },
                1000:{
                    items:3
                },
            }
        });
    });
    
    
    
    // cours slider R
    $('.cours_slider_carousel').owlCarousel({
        items:4,
        margin:30,
        stagePadding:0,
        dots: true,
        smartSpeed:450,
        nav:true,
        mouseDrag:true,
        autoplay: false,
        navText: ['',''],
        responsive:{
            0:{
                items:1
            },
            570:{
                items:2
            },
            700:{
                items:2
            },
            991:{
                items:3
            },
            1200:{
                items:4
            },
        }
        
    }); 
    
    // Bootstrap Tab
    $('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
    })
    
    // isotop plugin area
    $(window).on('load', function(){
        
        // Activate isotope in container
        $(".facilities_works-item").imagesLoaded( function() {
            $(".facilities_works-item").isotope({
                itemSelector: ".single_facilities",
                layoutMode: "fitRows",
            }); 
        });        
        
        // Add isotope click function
        $(".facilities_works-filter li").on('click',function(){
            $(".facilities_works-filter li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr("data-filter");
            $(".facilities_works-item").isotope({
                filter: selector,
                animationOptions: {
                    duration: 450,
                    easing: "linear",
                    queue: false,
                }
            });
            return false;
        });
    });
    
    // counter count js
    $(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

    $('.client_slider').owlCarousel({
        items:5,
        margin:0,
        stagePadding:0,
        dots: false,
        smartSpeed:450,
        nav:true,
        mouseDrag:true,
        navContainer: ".client_carousel",
        itemWidth: 226,
        navText: ['',''],
        responsive:{
            0:{
                items:1
            },
            360:{
                items:2
            },
            480:{
                items:3
            },
            767:{
                items:5
            }
        }
    }); 
    
    // blog slider 
    $('.simple_blog_feature_img').owlCarousel({
        items:1,
        margin:0,
        stagePadding:0,
        smartSpeed:450,
        nav:true,
        mouseDrag:true,
        navContainer: ".simple_blog_feature_img",
        navText: ['','']
    }); 
    
    // blog slider 2
    $('.simple_blog_feature_slider').owlCarousel({
        items:1,
        margin:0,
        stagePadding:0,
        smartSpeed:450,
        nav:true,
        mouseDrag:true,
        navContainer: ".simple_blog_feature_slider",
        navText: ['','']
    }); 

    
    
    // preloader js
    $(window).load(function() { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});
    })
    
    
})(jQuery);
