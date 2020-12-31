/* ===================================================================
    
    Author          : AuCreative Theme
    Template Name   : Spendora - Responsive Multi-Purpose HTML5 Template
    Version         : 1.0
    
* ================================================================= */

(function($) {
    "use strict";

    $(window).on('load', function() {
        $('.loading').fadeOut();
    });


    /* ==================================================
        # Wow Init
        ===============================================*/
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();

    // --------------------------------------------------
    // Back To Top
    // --------------------------------------------------
    var offset = 450;
    var duration = 1000;
    var upToTop = $("#back-to-top");
    upToTop.hide();
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > offset) {
            upToTop.fadeIn(duration);
        } else {
            upToTop.fadeOut(duration);
        }
    });
    upToTop.on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });

    $(".scroll-slider1").on('click', function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".scroll-section").offset().top - 100
        }, 1000);
    });

    /*Hamburger Button*/
    $('.hamburger').on("click", function() {
        $(this).toggleClass("is-active");
        $('.au-nav-mobile').slideToggle(200, 'linear');
    });

    $('.nav-icon').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        // $('.nav-box').slideToggle(200, 'linear');
        $('.nav-box').toggleClass('active');
    });

    $('.nav-close').on('click', function (e) {
        e.preventDefault();
        $(this).parent().removeClass('active');
    });

    $('.search-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        // $('.nav-box').slideToggle(200, 'linear');
        $('.search-box').toggleClass('active');
    });

    // Navbar menu dropdown
    $('.au-navbar-menu li .arrow').on('click', function(e) {
        $(this).siblings('.sub-menu').slideToggle(200, 'linear');
        $(this).toggleClass('clicked');
        e.stopPropagation();
    });
    // Pull Header
    $('.header-pull menu ul li.menu-item-has-children > a').on('click', function () {
        var dropdown = $(this).siblings('ul.sub-menu');
        $(dropdown).slideToggle('500');
        return false;
    });

    $('#au_rev_slider').show().revolution({
        responsiveLevels: [1200, 992, 768, 480],
        gridwidth: [1200, 992, 768, 480],
        autoHeight: 'on',
        sliderLayout: 'fullscreen',
        delay: 5000,
    });
    $('#au_rev_slider_1').show().revolution({
        responsiveLevels: [1200, 992, 768, 480],
        gridwidth: [1200, 992, 768, 480],
        autoHeight: 'on',
        sliderLayout: 'fullscreen',
        delay: 5000,
        spinner: 'spinner0',
        /* basic navigation arrows and bullets */
        navigation: {
            onHoverStop: "off",
            arrows: {
                enable: false,
                style: 'gyges',
                hide_onleave: false,
                hide_onmobile: true,
                hide_under: 768,
            },

            bullets: {
                enable: true,
                style: 'persephone',
                hide_onleave: false,
                direction: 'vertical',
                h_align: "right",
                v_align: "center",
                h_offset: 35,
                v_offset: 0,
                space: 35,
                tmp: '<span class="bullet-arrow arrow-top"></span><span class="tp-bullet-title">{{title}}</span>',
            }
        }
    });

    $('#au_rev_slider_3').show().revolution({
        responsiveLevels: [1200, 992, 768, 480],
        gridwidth: [1200, 992, 768, 480],
        autoHeight: 'on',
        sliderLayout: 'fullscreen',
        delay: 5000,
        spinner: 'spinner0',
        /* basic navigation arrows and bullets */
        navigation: {
            onHoverStop: "off",
            arrows: {
                enable: false,
                style: 'gyges',
                hide_onleave: false,
                hide_onmobile: true,
                hide_under: 768,
                left: {
                    container: 'slider',
                    h_align: 'left',
                    v_align: 'center',
                    h_offset: 30,
                    v_offset: -75
                },
         
                right: {
                    container: 'slider',
                    h_align: 'right',
                    v_align: 'center',
                    h_offset: 30,
                    v_offset: -75
                },
            },


            bullets: {
                enable: true,
                style: 'persephone',
                hide_onleave: false,
                direction: 'vertical',
                h_align: "right",
                v_align: "center",
                h_offset: 35,
                v_offset: 45,
                space: 35, 
                tmp: '<span class="bullet-arrow arrow-top"></span><span class="tp-bullet-title">{{title}}</span>',
            }
        }
    });
    // fixed navbar when scroll
    var navbarFix = $("#js-navbar-fixed");
    if(navbarFix.length) {
        var headerOffset = navbarFix.offset().top + 1;
        $(window).on('scroll',function() {
            if ($(window).scrollTop() > headerOffset) {
                navbarFix.addClass('fixed');
            } else {
                navbarFix.removeClass("fixed");
            }
        });
    }

    $('.partner-content').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '10px',
                  slidesToShow: 3
                }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
              }
            }
        ]
    });

    $('.clients-list .row').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                  arrows: false,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                  arrows: false,
                  centerPadding: '10px',
                  slidesToShow: 2
                }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerPadding: '10px',
                slidesToShow: 1
              }
            }
        ]
    });
    $('.projects-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  arrows: false,
                  centerPadding: '10px',
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerPadding: '10px',
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });

    $('.single-portfolio-slider .portfolio-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false
    });
    $('.feature-img-gallery, .testimonials-fullpage-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
              breakpoint: 575,
              settings: {
                arrows: false,
                dots : true
              }
            }
        ]
        // fade: true,
    });
    $('.home3-testimonials-content .row').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
              }
            }
        ]
    });
    $('.product-gallery .product-gallery-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.woocommerce-product-slider'
    });
    $('.woocommerce-product-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-gallery .product-gallery-wrapper',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.projects-flip-content').slick({
        centerMode: true,
        slidesToShow: 3,
        centerPadding: "0px",
        arrows: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 1
            }
          }
        ]
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.pagepiling').slick('setPosition');
    });
    var executed = false;
    var waypointSelector = $('.js-waypoint');
    if (waypointSelector) {
        waypointSelector.waypoint(function () {
            if (!executed) {
                executed = true;
                /*progress bar*/
                $('.au-progress-1 .au-progress-bar').progressbar({
                    update: function (current_percentage, $this) {
                        $this.find("span").html(current_percentage + '%');
                    }
                });
            }
        }, {offset: '50%'});
    }

    /*Couter up*/
    var counterUp = $(".counterUp");
    if (counterUp) {
        counterUp.counterUp({
            delay: 10,
            time: 1000
        });
    }
    

    /*==================================================================
    [ Play video 01 ]*/
    $.fn.bmdIframe = function( options ) {
        var self = this;
        var settings = $.extend({
            classBtn: '.bmd-modalButton',
            defaultW: 640,
            defaultH: 360
        }, options );
      
        $(settings.classBtn).on('click', function(e) {
          var allowFullscreen = $(this).attr('data-bmdVideoFullscreen') || false;
          
          var dataVideo = {
            'src': $(this).attr('data-bmdSrc') + "?autoplay=1",
            'height': $(this).attr('data-bmdHeight') || settings.defaultH,
            'width': $(this).attr('data-bmdWidth') || settings.defaultW
          };
          
          if ( allowFullscreen ) dataVideo.allowfullscreen = "";
          
          // stampiamo i nostri dati nell'iframe
          $(self).find("iframe").attr(dataVideo);
        });
      
        // se si chiude la modale resettiamo i dati dell'iframe per impedire ad un video di continuare a riprodursi anche quando la modale è chiusa
        this.on('hidden.bs.modal', function(){
          $(this).find('iframe').html("").attr("src", "");
        });
      
        return this;
    };
    var mediaElements = document.querySelectorAll('audio');

	for (var i = 0, total = mediaElements.length; i < total; i++) {
		new MediaElementPlayer(mediaElements[i], {
			features: ['prevtrack', 'playpause', 'nexttrack', 'current', 'progress', 'duration', 'volume', 'playlist', 'shuffle', 'loop', 'fullscreen'],
		});
	}
    jQuery("#modal-video-01").bmdIframe();
	// video popup

    // Video
	$('.vimeo a,.youtube a').on('click',function (e) {
		e.preventDefault();
		var videoLink = $(this).attr('href');
		var classeV = $(this).parent();
		var PlaceV = $(this).parent();
		if ($(this).parent().hasClass('youtube')) {
			$(this).parent().wrapAll('<div class="video-wrapper">');
			$(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="100%"></iframe>');
		} else {
			$(this).parent().wrapAll('<div class="video-wrapper">');
			$(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=cfa144" width="100%" height="300" frameborder="0"></iframe>');
		}
    });
    function n() {
        var c = {
            touchbehavior: true,
            cursoropacitymax: 1,
            cursorborderradius: "0",
            background: "transparent",
            cursorwidth: "2px",
            cursorborder: "0px",
            cursorcolor: "#191919",
            autohidemode: false,
            bouncescroll: false,
            scrollspeed: 120,
            mousescrollstep: 90,
            grabcursorenabled: true,
            horizrailenabled: true,
            preservenativescrolling: true,
            cursordragontouch: false,
            railpadding: {
                top: -10,
                right: 0,
                left: 0,
                bottom: 0
            }
        };
        $(".section-content").niceScroll(c);
        var d = $(".grids");
        d.imagesLoaded(function(e) {
            var f = {
                itemSelector: ".item",
                layoutMode: "packery",
                packery: {
                    isHorizontal: true,
                    gutter: 0
                },
                resizable: true,
                transformsEnabled: true,
                transitionDuration: "700ms"
            };
            var g = {
                itemSelector: ".item",
                layoutMode: "packery",
                packery: {
                    isHorizontal: false,
                    gutter: 0
                },
                resizable: true,
                transformsEnabled: true,
                transitionDuration: "700ms"
            };
            if ($(window).width() < 778) {
                d.isotope(g);
                d.isotope("layout");
                if ($(".section-content").getNiceScroll()) $(".section-content").getNiceScroll().remove();
    
            } else {
                d.isotope(f);
                d.isotope("layout");
                $(".section-content").niceScroll(c);
            }
        });

        d.isotope("on", "layoutComplete", function(a, b) {
            var b = a.length;
        });
    }
    $(window).on('load', function () { 
        n();
    });

    $(window).on('load', function () {
        var $grid_item = $('.projects-grid').isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });
        // bind filter button click
        $('.filter-projects li span').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid_item.isotope({ filter: filterValue });
        });
        // change is-checked class on buttons
        $('.filter-projects li span').on('click',function() {
            $('.filter-projects li').find('.is-checked').removeClass("is-checked");
            $(this).addClass("is-checked");
        });
    });
    $(window).on('load', function () {
        var $porfolio_item = $('.projects-standard .row').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
        // bind filter button click
        $('.filter-projects li span').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $porfolio_item.isotope({ filter: filterValue });
        });
        // change is-checked class on buttons
        $('.filter-projects li span').on('click',function() {
            $('.filter-projects li').find('.is-checked').removeClass("is-checked");
            $(this).addClass("is-checked");
        });
    });
    $(window).on('load', function () {
        var grid_pinterest = $('.projects-pinterest').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'masonry',
            percentPosition: true,
            masonry: {
              columnWidth: '.portfolio-item', 
            //   gutter: 10
            }
        });
        // layout Masonry after each image loads
        $('.filter-projects li span').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            grid_pinterest.isotope({ filter: filterValue });
        });
        // change is-checked class on buttons
        $('.filter-projects li span').on('click',function() {
            $('.filter-projects li').find('.is-checked').removeClass("is-checked");
            $(this).addClass("is-checked");
        });
    });

    $(window).on('load', function () {
        var grid = $('.projects-masonry').isotope({
            itemSelector: '.item',
            percentPosition: true,
            masonry: {
              columnWidth: '.grid-sizer', 
            //   gutter: 10
            }
        });
        // layout Masonry after each image loads
        $('.filter-projects li span').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            grid.isotope({ filter: filterValue });
        });
        // change is-checked class on buttons
        $('.filter-projects li span').on('click',function() {
            $('.filter-projects li').find('.is-checked').removeClass("is-checked");
            $(this).addClass("is-checked");
        });
    });

    $(window).on('load', function () {
        var landing_grid = $('.landing-content').isotope({
            itemSelector: '.landing-item',
            masonry: {
              columnWidth: '.landing-sizer', 
            //   gutter: 65
            }
        });
    });

    $('.introduce-accordion ul li').on('click', function() {
        $('.introduce-accordion ul').find('.active').removeClass("active");
        $(this).addClass("active");
    });

    $('.single-course-content .curriculum-content  li').on('click', function() {
        $('.single-course-content .curriculum-content').find('.active').removeClass("active");
        $(this).addClass("active");
    });
    $('.grouped_elements2').fancybox({
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	600, 
		'speedOut'		:	600, 
        'overlayShow'	:	false,
        'width'         : 870,
        'autoDimensions' : false,
        'centerOnScroll' : true,
    });

    var marginSlider = document.getElementById('slider-margin');
    if (marginSlider != undefined) {
        noUiSlider.create(marginSlider, {
            start: [ 8, 27 ],
            step: 1,
            connect: true,
            range: {
                'min': 8,
                'max': 30
            },
            format: {
                from: function(value) {
                        return parseInt(x,10);
                    },
                to: function(value) {
                        return parseInt(x,10);
                    }
            }
        });
    var marginMin = document.getElementById('value-lower'),
	    marginMax = document.getElementById('value-upper');

        marginSlider.noUiSlider.on('update', function ( values, handle ) {
            if ( handle ) {
                marginMax.innerHTML = values[handle];
            } else {
                marginMin.innerHTML = values[handle];
            }
        });
    }

    // Woocommerce

    $('.shipping-calculator-button').on('click', function(event) {
        event.preventDefault();
        $('.shipping-calculator-form').toggle( "slow" );
    });

	/*----------  Payment method select  ----------*/

	$('[name="payment_method"]').on('click', function () {

        var $value = $(this).attr('value');

		$('.payment_box').slideUp();
		$('.payment_method_' + $value).slideDown();

    });
    
	$('[name="createaccount"]').on('click', function () {

		// $('.create-account').slideUp();
		$('.create-account').toggle( "slow" );

    });
    
	$('.showlogin').on('click', function () {

		// $('.create-account').slideUp();
		$('.woocommerce-form-login').toggle( "slow" );

    });
    $('.showcoupon').on('click', function () {

		// $('.create-account').slideUp();
		$('.checkout_coupon').toggle( "slow" );

    });

    /*========== FULLPAGE ==========*/
    try {
        if ( $(window).width() >= 992 ) {
             $('#fullpage').fullpage({
                navigation: true,
                navigationTooltips: ['01', '02','03','04','05','06'],
                showActiveTooltip : true,
                scrollBar:true,
                menu: '#menu',
            });
            $('.prev-slide').on('click', function(){
                $.fn.fullpage.moveSlideLeft();
            });
            $('.next-slide').on('click', function(){
                $.fn.fullpage.moveSlideRight();
            });
        }
    } catch(err) {}

    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            var $this = $(this).html(event.strftime('' +
                '<div class="count-down-item"><span>%m</span> <span>months</span><div class="line line2"></div><div class="line line4"></div></div>' +
                '<div class="count-down-item"><span>%d</span> <span>days</span><div class="line line2"></div><div class="line line4"></div></div>' +
                '<div class="count-down-item"><span>%H</span> <span>hour</span><div class="line line2"></div><div class="line line4"></div></div>' +
                '<div class="count-down-item"><span>%M</span> <span>min</span><div class="line line2"></div><div class="line line4"></div></div>' +
                '<div class="count-down-item"><span>%S</span> <span>sec</span><div class="line line2"></div><div class="line line4"></div></div>'));
        });
    });
    var $project_items = $('.project-item .item');
    var $section_bg = $('#projects-section').attr('data-background');
    $('#projects-section').css("background-image", "url(' "+$section_bg+" ')");
    $project_items.each(function() {
        var project_id = $("#"+$(this).attr('id')+"");
        var $project_img = project_id.attr('data-background');
        $(project_id).on('mouseover', function(){
            $('#projects-section').css("background-image", "url(' "+$project_img+" ')");
        });
        $(project_id).on('mouseout', function(){
            $('#projects-section').css("background-image", "url(' "+$section_bg+" ')");
        });
    });
})(jQuery);

function Tang(){
    var x = document.getElementById("quantity").value;//lay gia tri cu trong text
    if(parseInt(x, 10) > 0){
        document.getElementById("quantity").value = parseInt(x, 10) +1;// + gia tri lay dc len 1 roi gan kq vao o text
    }
}
function Giam(){
    var x = document.getElementById("quantity").value;
    if(parseInt(x, 10) > 1){
        document.getElementById("quantity").value = parseInt(x, 10) -1;
    }
}

function Tang2(){
    var y = document.getElementById("quantity_02").value;//lay gia tri cu trong text
    if(parseInt(y, 10) > 0){
        document.getElementById("quantity_02").value = parseInt(y, 10) +1;// + gia tri lay dc len 1 roi gan kq vao o text
    }
}
function Giam2(){
    var y = document.getElementById("quantity_02").value;
    if(parseInt(y, 10) > 1){
        document.getElementById("quantity_02").value = parseInt(y, 10) -1;
    }
}