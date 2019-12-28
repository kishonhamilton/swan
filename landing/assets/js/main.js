/* ----------------------------------
	@ Jolpai
	@ Version: 1.0
	@ Author: DynamicWebLab
	@Email:
-------------------------------------*/
"use strict";



(function($) {
    /*global jQuery $*/


    // trigger page scroll trigger
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    // on-ready trigger
    $(document).ready(function() {

        // trigger parallax hover
        var scene = document.getElementById('scene');

        if (typeof Parallax == 'function')
            var parallax = new Parallax(scene);

        // parallax background
        if (typeof $.fn.parallax == 'function')
            $('.parallax-window').parallax();

        // Trigger skill bar
        if (typeof $.fn.appear == 'function') {
            $('.skillbar').each(function() {
                $(this).appear(function() {
                    $(this).find('.count-bar').animate({
                        width: jQuery(this).attr('data-percent')
                    }, 3000);
                    var percent = jQuery(this).attr('data-percent');
                    $(this).find('.count').html('<span>' + percent + '</span>');
                });
            });

            $('#bars').appear(function() {
                var circularBars = new CircularSkillBar("#bars .bar");
            });
        }

        // jQuery Ripples
        if (typeof $.fn.ripples == 'function') {
            try {
                $('.ripple').ripples({
                    resolution: 500,
                    perturbance: 0.04
                });
            } catch (e) {
                $('.error').show().text(e);
            }
        }

        // at the end trigger window scroll and resize event
        $(window).trigger('resize').trigger('scroll');

        //$("img.lazyload").lazyload();
    });

}(jQuery));

$(window).on('load', function() {
  /*------------------
  	Preloder
  --------------------*/
  $(".loader").fadeOut();
  $("#preloder").delay(400).fadeOut("slow");

});
